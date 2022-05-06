import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function TopicsWindow(props) {
    return (
        <div className='topicsWindow'>
            <List>
                {
                    props.topics.map(topic => (
                        <ListItem onClick={e => {
                                props.changeActiveTopic(e.target.innerText);
                                props.changeTopic(e.target.innerText);
                            }} key={topic} button>
                        <ListItemText primary={topic} />
                        </ListItem>
                    ))
                }
            </List>
        </div>
    );
}