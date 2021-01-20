import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/Layout.css';
import MessageList from './MessageList';
import Header from './Header';
import ChatList from './ChatList';

export default class Layout extends React.Component{
    
    render () {        
        return <MuiThemeProvider>
                    <main className={'main'}>
                        <Header text={'Chat'} />
                        <div className={'container_chat'}>
                            <ChatList chats={['Terminator', 'R2D2', 'C3Pio']} />
                            <MessageList />
                        </div>   
                    </main>
                </MuiThemeProvider>; 
    }
}