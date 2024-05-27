// src/App.js

import React from 'react';
import './styles.css';

/**
 * App component for the Roleplay Toolset.
 * @param {object} props - Component props
 * @param {function} props.onCloseClicked - Function to call when the panel close button is clicked
 * @returns {JSX.Element}
 */
function App({ onCloseClicked }) {
    function handleUnexpectedEventClick() {
        alert("An unexpected event occurs!");
    }

    return (
        <div>
            <div className="panelControlBar flex-container alignItemsBaseline">
                <div id="roleplayToolsetPanelheader" className="fa-fw fa-solid fa-grip drag-grabber"></div>
                <div id="roleplayToolsetPanelMaximize" className="inline-drawer-maximize">
                    <i className="floating_panel_maximize fa-fw fa-solid fa-window-maximize"></i>
                </div>
                <div id="roleplayToolsetPanelClose" className="fa-fw fa-solid fa-circle-xmark floating_panel_close" onClick={onCloseClicked}></div>
            </div>
            <div id="roleplayToolsetPanelHolder" name="roleplayToolsetPanelHolder">
                <button onClick={handleUnexpectedEventClick}>... an unexpected event.</button>
            </div>
        </div>
    );
}

export default App;
