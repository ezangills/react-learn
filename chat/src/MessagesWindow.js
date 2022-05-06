import React from "react";
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography';


export default function MessageWindow(props) {
    return (
        <div className='chatWindow'>
            {
                props.allChats[props.activeTopic].map((message, i) => (
                    <div className='flex' key={i}>
                        <Chip avatar={<Avatar>M</Avatar>} label={message.from} />
                        <Typography variant='body1'>{message.msg}</Typography>
                    </div>
                ))
            }
        </div>
    )
}