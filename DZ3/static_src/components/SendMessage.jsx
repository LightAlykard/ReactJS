import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from 'material-ui';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export default class SendMessage extends React.Component{

    state ={
        message: ''
    };

    static propTypes ={
        send: PropTypes.func.isRequired
    };

    send = () => {
        this.props.send({message: this.state.message, author: 'me'});
        this.setState({message:''});
    };

    handleChange = event => this.setState({message:event.target.value });
    

    render () {
        return <div>            
            <TextField value={this.state.message} 
                        onChange={this.handleChange} 
                        fullWidth={true}
                        multiLine
                        id={'send_mes'}/>
            <Button variant="contained"  color="primary" onClick={this.send}>
                Send
            </Button>
            {/* <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
            >
                Send
            </Button> */}
        </div>
    }

}