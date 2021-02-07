import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middlewares from '../middlewares';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

//-2
// const persistConfig = {
//     key: 'geekmessanger',
//     storage,
//     stateReconciler: autoMergeLevel2,
//     whitelist: ['messageReducer', 'chatReducer'],
//  };
 
// export const history = createBrowserHistory()

//-2
// function initStore() {
//     const innitialStore = {}; 
//     const store = createStore(
//         persistReducer(persistConfig, initReducers(history)),
//         innitialStore,
//         compose(
//             applyMiddleware(routerMiddleware(history), ...middlewares),
//             window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
//         ),
//     );
//         const persistor = persistStore(store);
//    return { store, persistor };
// }


function initStore() {
   const innitialStore = {};

   return createStore(
       initReducers,
       innitialStore,
       compose(
            applyMiddleware(...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
        ),
    //     initReducers(history),
    //     innitialStore,
    //     compose(
    //        applyMiddleware(routerMiddleware(history), ...middlewares),
    //        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
    //    ),
   );
}

export default initStore;