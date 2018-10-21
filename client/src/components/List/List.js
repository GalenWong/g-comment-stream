import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { listenForMessage } from '../../socket/socket';

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 'messages': [] }
        this.addMessage = this.addMessage.bind(this);
    }

    addMessage(msg) {
        this.setState({
            'messages': [msg, ...this.state.messages]
        });
        console.log(this.state);
    }

    componentDidMount() {
        listenForMessage(this.addMessage)
        // fetch('/messages')
        //     .then(res => res.json())
        //     .then(m => {
        //         this.setState({
        //             'messages': [ ...m, ...this.state.messages]
        //         })
        //         console.log(this.state)
        //     })
    }

    render() {
        const now = new Date()
        const tstr = now.toLocaleTimeString()
        const { messages } = this.state
        return(
            <div>
                {messages.map(m => 
                    <Card>
                        <CardContent>
                            <Typography color="textPrimary" variant="h2">
                               {m.message}
                            </Typography>
                            <Typography color="textSecondary">
                               {m.sender} - {tstr}
                            </Typography>
                        </CardContent>
                    </Card>
                )}
            </div>
        )
    }
}

export default List;