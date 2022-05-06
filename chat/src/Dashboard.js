import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ChatWindow from './ChatWindow';

export default function Dashboard() {
    const [rootActiveTopic, changeRootActiveTopic] = React.useState('');

    return (
        <div>
            <Paper className='root'>
                <Typography variant='h4' component='h4'>
                    Chat
                </Typography>
                <Typography component='h5'>
                    {rootActiveTopic}
                </Typography>
                <ChatWindow changeTopic={changeRootActiveTopic}/>
            </Paper>
        </div>
    )
}
