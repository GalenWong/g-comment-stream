import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { uploadMessage } from '../../api/api'

const space = {
    margin: "5px"
}

class UploadPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 'sender': '', 'message': '' }
        this.handleChange = this.handleChange.bind(this)
        this.sendData = this.sendData.bind(this)
    }
    handleChange = field => event => {
        this.setState({
            [field]: event.target.value, 
        })
    }
    sendData = () => {
        const { sender, message } = this.state
        if(sender.length === 0) {
            alert("Put in your name!")
            return
        }
        if(message.length === 0) {
            alert("Put in some message!")
            return
        }
        uploadMessage(this.state)
    }

    render(){
        return(
            <>
            <h2>Hi</h2>
            <TextField
                onChange={this.handleChange('sender')}
                variant="filled"
                label="Name"
                style={space}
            />
            <br/>
            <TextField 
                onChange={this.handleChange('message')}
                variant='filled'
                multiline
                rowsMax="5"
                label="Message"
                style={space}
            />
            <br/>
            <Button variant="contained" color="primary" onClick={this.sendData}>
                Send
            </Button>
            </>
        )
    }
}

export default UploadPage;