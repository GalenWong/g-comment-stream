import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Helmet } from 'react-helmet'

import { uploadMessage } from '../../api/api'

const inputStyle = {
    margin: "5px",
    width: "200px"
}

const buttonStyle = {
    "margin": "10px"
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
            <Helmet>
                <title>POST a message</title>
            </Helmet>
            <h2>Hi, POST a message</h2>
            <TextField
                onChange={this.handleChange('sender')}
                variant="filled"
                label="Name"
                style={inputStyle}
            />
            <br/>
            <TextField 
                onChange={this.handleChange('message')}
                variant='filled'
                multiline
                rowsMax="5"
                label="Message"
                style={inputStyle}
            />
            <br/>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={this.sendData}
                style={buttonStyle}
            >
                Send
            </Button>
            </>
        )
    }
}

export default UploadPage;