import React from 'react' ;

export default class App extends React.Component {
    state = {
    text: 'Наш первый React-компонент'
    } ;

    componentWillMount () {
    console.log ( 'componentWillMount' ) ;
    }

    componentDidMount () {
    console. log ( 'componentDidMount' ) ;
    setTimeout (() => this.setState ({ 'text': 'Обновленный React-компонент' }) ,
    1000 ) ;
    }

    componentDidUpdate () {
    console. log ( 'componentDidUpdate' ) ;
    }

    render () {
        console. log ( 'render' ) ;
        return (
            <h1> { this . state . text } </h1>
        )
    }
}