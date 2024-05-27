import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import { SlashCommandParser } from '../../../SlashCommandParser.js';
import { SlashCommand } from '../../../SlashCommand.js';
import { ARGUMENT_TYPE, SlashCommandArgument } from '../../../SlashCommandArgument.js';

// Register the slash command
SlashCommandParser.addCommandObject(SlashCommand.fromProps({
    name: 'unexpectedevent',
    callback: (namedArgs, unnamedArgs) => {
	    const eventDescription = unnamedArgs.join(' ');
        console.log(eventDescription);
    },
    aliases: ['uev'],
    returns: 'Introduces an unexpected event into the roleplay.',
    unnamedArgumentList: [
        SlashCommandArgument.fromProps({
            description: 'Description of the unexpected event',
            typeList: [ARGUMENT_TYPE.STRING],
            isRequired: true,
        }),
    ],
    helpString: `
        <div>
            Introduces an unexpected event into the roleplay.
            <strong>Example:</strong>
            <ul>
                <li>
                    <pre><code class="language-stscript">/unexpectedevent A sudden storm hits the village.</code></pre>
                </li>
            </ul>
        </div>
    `,
}));

const buttonContainer = document.getElementById('extensionsMenu');
const buttonElement = document.createElement('div');
const iconElement = document.createElement('i');
const textElement = document.createElement('span');
textElement.textContent = 'Roleplay Toolset';
iconElement.classList.add('fa-solid', 'fa-tools');
buttonElement.id = 'openRoleplayToolsetButton';
buttonElement.classList.add('list-group-item', 'flex-container', 'flexGap5');
buttonContainer.appendChild(buttonElement);
buttonElement.appendChild(iconElement);
buttonElement.appendChild(textElement);

const rootElement = document.getElementById('movingDivs');
const rootContainer = document.createElement('div');
rootElement.appendChild(rootContainer);
rootContainer.id = 'roleplayToolsetPanel';
rootContainer.classList.add('drawer-content', 'flexGap5', 'displayNone');

buttonElement.addEventListener('click', () => {
    rootContainer.classList.toggle('flex');
    rootContainer.classList.toggle('displayNone');
});

function closePanel() {
    rootContainer.classList.remove('flex');
    rootContainer.classList.add('displayNone');
}

const root = createRoot(rootContainer);
root.render(
    <React.StrictMode>
        <App onCloseClicked={closePanel} />
    </React.StrictMode>
);
