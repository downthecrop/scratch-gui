import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Box from '../components/box/box.jsx';
import GUI from '../containers/gui.jsx';
import HashParserHOC from '../lib/hash-parser-hoc.jsx';
import AppStateHOC from '../lib/app-state-hoc.jsx';

import { setPlayer } from '../reducers/mode';

if (process.env.NODE_ENV === 'production' && typeof window === 'object') {
    // Warn before navigating away
    window.onbeforeunload = () => true;
}

import styles from './player.css';

const Player = ({ isPlayerOnly, onSeeInside, projectId }) => (
    <Box className={classNames(isPlayerOnly ? styles.stageOnly : styles.editor)}>
        {isPlayerOnly && <button onClick={onSeeInside}>{'See inside'}</button>}
        <GUI
            canEditTitle
            enableCommunity
            isPlayerOnly={isPlayerOnly}
            projectId={projectId}
        />
    </Box>
);

Player.propTypes = {
    isPlayerOnly: PropTypes.bool,
    onSeeInside: PropTypes.func,
    projectId: PropTypes.string
};

const mapStateToProps = state => ({
    isPlayerOnly: state.scratchGui.mode.isPlayerOnly
});

const mapDispatchToProps = dispatch => ({
    onSeeInside: () => dispatch(setPlayer(false))
});

const ConnectedPlayer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);

// note that redux's 'compose' function is just being used as a general utility to make
// the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
// ability to compose reducers.
const WrappedPlayer = compose(
    AppStateHOC,
    HashParserHOC
)(ConnectedPlayer);

const appTarget = document.createElement('div');
document.body.appendChild(appTarget);

ReactDOM.render(<WrappedPlayer isPlayerOnly />, appTarget);

//Customizer

function isValidColor(str) { return str.match(/[a-f0-9]{6}$/i) !== null; }
const params = new URLSearchParams(window.location.search);
const pid = window.location.hash.substring(1);

let playerDiv = document.querySelectorAll("[class^=player]");
let headerDiv = document.querySelectorAll("[class^=stage-header]");
let menuDiv = document.querySelectorAll("[class*=stage-menu-wrapper]");
let sizeDiv = document.querySelectorAll("[class*=stage-size]");
let canvasWrapper = document.querySelectorAll("[class^=stage-wrapper_stage-canvas-wrapper]");
let borderDiv = document.querySelectorAll("[class*=stage_stage_]");
let greenflagDiv = document.querySelectorAll("[class*=green-flag-overlay]");

/** canvasWrapper
 * .stage-wrapper .stage-canvas-wrapper {
    display: flex;
    justify-content: center;
    width: 476px;
}

 * 
 * */



document.body.style.margin = "0px";
sizeDiv[0].style.display = "none";
headerDiv[0].style.width = "461px";


borderDiv[0].style.width = "461px"
borderDiv[0].style.height = "346px";
borderDiv[0].style.borderStyle = "0.1875rem solid rgb(126, 133, 151)"

greenflagDiv[0].style.width = "461px";
greenflagDiv[0].style.height = "346px";


//Logo
if (JSON.parse(params.get('logo'))) {
    
    const myDiv = document.createElement("div");
    const myLink = document.createElement("a");
    const myLogo = document.createElement("img");
    
    myLink.setAttribute("href", "https://scratch.mit.edu/projects/"+pid+"/")
    
    myLogo.src = "https://raw.githubusercontent.com/downthecrop/scratch-gui/develop/src/components/menu-bar/scratch-logo.svg"
    myLogo.style.height = "1.6rem"
    myLogo.style.opacity = "0.7"
    
    myLink.appendChild(myLogo)
    myDiv.appendChild(myLink)

    menuDiv[0].appendChild(myDiv)
}


//Background color
let bg = params.get('bg')

if (bg && isValidColor(bg)) {
    playerDiv[0].style.backgroundColor = "#" + bg;
} else if (bg) {
    playerDiv[0].style.backgroundColor = bg;
}

//Paddings
let padding = params.get('padding')

if (padding) {
    playerDiv[0].style.padding = padding
} else {
    playerDiv[0].style.padding = "0.1875rem";
}

//Header display
if (JSON.parse(params.get('header'))) {
    headerDiv[0].style.display = "none";
}


