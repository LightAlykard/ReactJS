import React from 'react';
import ReactDOM from 'react-dom';
import Router from './containers/Router'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import initStore, { history } from './utils/store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.render(
    <Provider store={ initStore() }>
       <BrowserRouter>
           <MuiThemeProvider>
               <Router />
           </MuiThemeProvider>
       </BrowserRouter>
   </Provider>,
   document.getElementById('root'),
);

// ReactDOM.render(
//     <Provider store={ initStore() }>
//         <ConnectedRouter history={history}>
//             <MuiThemeProvider>
//                 <Router />
//             </MuiThemeProvider>
//         </ConnectedRouter>
//     </Provider>,
//     document.getElementById('root'),
//  );
 
//-2
// ReactDOM.render(
//     <Provider store={ store }>
//         <PersistGate loading={ null } persistor={ persistor }>
//             <ConnectedRouter history={history}>
//                 <MuiThemeProvider>
//                     <Router />
//                 </MuiThemeProvider>
//             </ConnectedRouter>
//         </PersistGate>
//     </Provider>,
//     document.getElementById('root'),
//  );
 







