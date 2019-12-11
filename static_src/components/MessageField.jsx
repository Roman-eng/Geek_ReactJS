import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message.jsx';
import '../styles/styles.css';

export default class MessageField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],},
        this.input = '';
    }

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
            setTimeout(() =>
                    this.setState({
                        messages: [ ...this.state.messages, {text: 'Не приставай ко мне, я робот!', sender: 'bot'} ] }),
                1000);
        }
    }
 
    handleClick(message) {
        this.sendMessage(message)
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
     };

    handleKeyUp(event, message) {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message)
        }
     };

     sendMessage(message) {
        this.setState({
            messages: [ ...this.state.messages, {text: message, sender: 'me'} ],
            input: '',
        });
     };
 
 
    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index } text={ message.text } sender={ message.sender } />));

            return <div className="layout">
            <div className=""></div>    
            <div className="message-field">
                { messageElements }
            </div>
            <div style={ { width: '100%', display: 'flex' } }>
               <TextField
                   name="input"
                   fullWidth={ true }
                   hintText="Введите сообщение"
                   style={ { fontSize: '22px' } }
                   onChange={ this.handleChange.bind(this) }
                   value={ this.state.input }
                   onKeyUp={ (event) => this.handleKeyUp(event, this.state.input).bind(this) }
               />
               <FloatingActionButton onClick={ () => this.handleClick(this.state.input).bind(this) }>
                   <SendIcon />
               </FloatingActionButton>
           </div>
         </div>
     
    }
}
