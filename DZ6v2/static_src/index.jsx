import React from 'react' ;
import ReactDOM from 'react-dom' ;
import App from './components/MessageField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import { Provider } from 'react-redux' ;
import initStore, { history } from './utils/store' ;
import { ConnectedRouter } from 'connected-react-router' ;
import { PersistGate } from 'redux-persist/integration/react' ;

const { store , persistor } = initStore() ;

ReactDOM.render (
    <Provider store = { store } >
        <PersistGate loading = { null } persistor = { persistor } >
            <ConnectedRouter history = {history} >
                <MuiThemeProvider>
                    <Router />
                </MuiThemeProvider>
            </ConnectedRouter>
        </PersistGate>
    </Provider>, 
    document. getElementById ( 'root' ) ,
);