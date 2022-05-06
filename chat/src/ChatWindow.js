import React from 'react';
import PropTypes from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import {CTX} from './Store.js'

export default function ChatWindow(props) {
    const {allChats, sendChatAction, user} = React.useContext(CTX);
    const topics = Object.keys(allChats);
    const [activeTopic, changeActiveTopic] = React.useState(topics[0])
    const [textValue, changeTextValue] = React.useState('');

    return (
        <div>
            <div className='flex'>
                <div className='topicsWindow'>
                    <List>
                        {
                            topics.map(topic => (
                                <ListItem onClick={e => {
                                        changeActiveTopic(e.target.innerText);
                                        props.changeTopic(e.target.innerText);
                                    }} key={topic} button>
                                <ListItemText primary={topic} />
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
                <div className='chatWindow'>
                    {
                        allChats[activeTopic].map((message, i) => (
                            <div className='flex' key={i}>
                                <Chip avatar={<Avatar>M</Avatar>} label={message.from} />
                                <Typography variant='body1'>{message.msg}</Typography>
                            </div>
                        ))
                    }
                </div>
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