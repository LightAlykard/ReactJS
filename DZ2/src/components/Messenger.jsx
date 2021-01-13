import React, {Component} from 'react';
import {MessagesList} from './MessagesList';
import {SendButton} from './SendButton';
import {SendMessage} from './SendMessage';

export class Messenger extends Component {
  state = {
    messages: [
      {id: 0, name: 'Ktulhu', content: 'Hi gays!'},
      {id: 1, name: 'Ktulhu', content: 'When apocalipsis?'},
    ],
    name: 'Unknown',
    content: 'Not now',
  };

  handleNewMessage = () => {
    const name = this.state.name;
    const content = this.state.content;
    if (name === '' || content === '') {
      alert('Need all fealds!');
      return false;
    }
    this.setState((prevState) => {
      return {
        messages: prevState.messages.concat([{
          id: prevState.messages.length,
          name: name,
          content: content,
        }]),
      };
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidUpdate() {
    const messages = this.state.messages;
    const len = messages.length;
    if (len % 2 === 1) {
      setTimeout(() => this.setState({
        messages: [...messages,
          {
            id: len,
            name: 'Ktulhu',
            content: messages[len - 1].name + ', okey go to sleep for one more age',
          }],
      }), 1000);
    }
  }

  render() {
    return (
      <div className='messenger'>
        <MessagesList messages={this.state.messages}/>
        <SendMessage name={this.state.name}
                     content={this.state.content}
                     change={this.handleChange}/>
        <SendButton click={this.handleNewMessage}/>
      </div>
    );
  }
}
