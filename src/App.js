import React from 'react';
import './styles.css';
import { sendSystemMessage } from '../../../script.js';

/**
 * App component for the Roleplay Toolset.
 * @param {object} props - Component props
 * @param {function} props.onCloseClicked - Function to call when the panel close button is clicked
 * @returns {JSX.Element}
 */
function App({ onCloseClicked }) {
    function handleUnexpectedEventClick() {
        const command = '/unexpectedevent [Pause the roleplay and introduce an unexpected event that significantly impacts the current scene. Provide a detailed description of the event including the following aspects:\n- What the event is (e.g., sudden storm, surprise visit, unexpected discovery. Be creative and have fun compiling ideas and providing them, unconventional, scary or lewd! Drama, Horror, Comedy, Porno)\n- How it begins and unfolds\n- The immediate impact on the characters and setting\n- The reactions and responses of the characters involved\n- Any potential consequences or developments that could arise from the event\n- Ensure the event is relevant to the current context of the roleplay and adds an interesting twist to the story.\n- Use vivid and concise language to describe the event. Write only the description of the event. Use markdown for formatting.]';
        
        sendSystemMessage(command);
    }

    const sendSystemMessage = (message) => {
        console.log(`Sending system command: ${message}`);
        // Implement the actual logic to send the system message to SillyTavern
        if (window.SillyTavern && window.SillyTavern.sendSystemMessage) {
            window.SillyTavern.sendSystemMessage(message);
        } else {
            console.error('SillyTavern system messaging API is not available.');
        }
    };

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
