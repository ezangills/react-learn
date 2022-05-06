import { getThemeProps } from '@material-ui/styles';
import React from 'react';
import io from "socket.io-client";

export const CTX = React.createContext();

const initState = {
    topic1: [
        {from: 'someone', msg: 'hey'},
        {from: 'someone', msg: 'how are u'},
        {from: 'someone', msg: 'good'},
    ],
    topic2: [
        {from: 'othersomeone', msg: 'hello'},
        {from: 'othersomeone', msg: 'im good'},
        {from: 'othersomeone', msg: 'chilling'},
    ],
}

function reducer(state, action) {
    console.log("callsed");
    const {from, msg, topic} = action.payload;
    switch(action.type) {
        case 'RECEIVE_MESSAGE':
            return {
                ...state,
                [topic]: [
                    ...state[topic],
                    {
                        from,
                        msg
                    }
                ]
            }
        default:
            return state
    }
}

let socket;

function sendChatAction(value) {
    socket.emit('chat-message', value);
}

export default function Store(props) {

    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if (!socket) {
        socket = io('http://localhost:3001', { transports : ['websocket'] });
        socket.on('chat-message', function(msg) {
            dispatch({type: 'RECEIVE_MESSAGE', payload: msg});
        });
    }

    const user = 'user' + Math.random(100).toFixed(2);

    return (
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )
}