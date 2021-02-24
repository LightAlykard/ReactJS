import React from 'react' ;
import PropTypes from "prop-types" ;
import { TextField , FloatingActionButton } from 'material-ui' ;
import SendIcon from 'material-ui/svg-icons/content/send' ;
import Message from './Message' ;
import '../styles/styles.css' ;
import { bindActionCreators } from "redux" ;
import connect from "react-redux/es/connect/connect" ;

class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number.isRequired,
        messages : PropTypes.object.isRequired,
        chats : PropTypes.object.isRequired,
        sendMessage : PropTypes.func.isRequired,
    };

    state = {
        // chats: {
        //     1: { title: 'Чат 1' , messageList: [ 1 ]} ,
        //     2: { title: 'Чат 2' , messageList: [ 2 ]} ,
        //     3: { title: 'Чат 3' , messageList: []} ,
        // } ,
        // messages : {
        //     1: { text: "Привет!" , sender: 'bot' } ,
        //     2: { text: "Здравствуйте!" , sender: 'bot' } ,
        // } ,
        input: '' ,
    };

    // componentDidUpdate (prevProps , prevState) {
    //     const { messages } = this.state ;
    //     if (Object.keys(prevState.messages).length < Object.keys(messages).length && Object.values(messages)[Object.values(messages).length - 1 ].sender === 'me') {
    //     setTimeout (() =>
    //         this.handleSendMessage( 'Не приставай ко мне, я робот!', 'bot'), 1000);
    //     }
    // }

    handleSendMessage = (message, sender) => {
        if (this.state.input.length > 0 || sender === 'bot') {
            this.props.sendMessage(message, sender);
        }
        if (sender === 'me' ) {
            this.setState({input: '' });
        }
    } ;
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value}) ;
    } ;

    handleKeyUp = (event) => {
        if (event.keyCode === 13 ) { // Enter
            this.handleSendMessage(this.state.input, 'me')
        }
    } ;

    render () {
        const { chatId, messages, chats } = this.props;        
        const messageElements = chats[chatId].messageList.map(messageId => (
        <Message
            key = { messageId }
            text = { messages[messageId].text }
            sender = { messages[messageId].sender }
        /> )) ;
        return [
            <div key ='messageElements' className ="message-field" >
                {messageElements}
            </div>,
            <div key ='textInput' style = { { width : '100%' , display : 'flex' } } >
                <TextField
                    name ="input"
                    fullWidth = { true }
                    hintText ="Введите сообщение"
                    style = { { fontSize : '22px' } }
                    onChange = { this.handleChange }
                    value = { this.state.input }
                    onKeyUp = { this.handleKeyUp }
                />
                <FloatingActionButton
                        onClick = { () => this.handleSendMessage(this.state.input, 'me')}>
                    <SendIcon />
                </FloatingActionButton>
            </div>
        ]
    }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats ,
}) ;

const mapDispatchToProps = dispatch => bindActionCreators ({}, dispatch) ;
export default connect(mapStateToProps, mapDispatchToProps )(MessageField) ;