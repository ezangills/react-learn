import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {CTX} from './Store.js'
import TopicsWindow from './TopicsWindow.js';
import MessageWindow from './MessagesWindow.js';

export default function ChatWindow(props) {
    const {allChats, sendChatAction, user} = React.useContext(CTX);
    const topics = Object.keys(allChats);
    const [activeTopic, changeActiveTopic] = React.useState(topics[0])
    const [textValue, changeTextValue] = React.useState('');

    return (
        <div>
            <div className='flex'>
                <TopicsWindow topics={topics} changeTopic={props.changeTopic} changeActiveTopic={changeActiveTopic} />
                <MessageWindow allChats={allChats} activeTopic={activeTopic} />
            </div>
            <div className='flex'>
                <TextField label='Write a message...' id="outlined-basic" variant="outlined" className='chatBox' value={textValue} onChange={e => changeTextValue(e.target.value)} />
                <Button 
                    variant="contained" 
                    color='primary'
                    className='button'
                    onClick={() => {
                        sendChatAction({msg: textValue, from: user, topic: activeTopic});
                        changeTextValue('');
                    }}
                >Send</Button>
            </div>
        </div>
    );
}