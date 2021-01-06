import React from 'react';

import Message from './Message.jsx';

const App = (props) => {
    const click = event => {};

    return <main onClick={click}><Message text="One more some text"/></main>;

};

export default App;