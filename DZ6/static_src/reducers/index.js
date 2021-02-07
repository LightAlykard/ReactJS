import { combineReducers } from 'redux';
import chatReducer from './chatReducer';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';

export default combineReducers({
   chatReducer,
   messageReducer,
   profileReducer,
});

// export default (history) => combineReducers({
//    router: connectRouter(history),
//    chatReducer,
//    messageReducer,
// });