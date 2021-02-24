import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
    static defaultProps = {
        chatId: 1,
    };
    render () {
        return (
            <div className ="header" >
                {/* <span style = { { fontSize : '20px' } } > Чат {this.props.chatId} </span> */}
                <h1>{this.props.text}</h1>
                <Link to='/profile' className={'link'}>Профиль</Link>
            </div>
        )
    }
}