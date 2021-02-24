import React from 'react';
import PropTypes from 'prop-types';
import connect from "react-redux/es/connect/connect";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import '../styles/Profile.css';


class Profile extends React.Component{
    static propTypes = {        
        user: PropTypes.object,
        
    };
    static defaultProps = {
        user: {
            name: "user1",
            mail: "@mail.hren"
        },
    };

    render () {
        return <>      
    
        <div className='container_profile'>
            <div>
                <p>User</p>    
                <h2>{this.props.user.name}</h2>
                <p>{this.props.user.mail}</p>
            </div>
            <div>
                <p>Перейти в <Link to = '/' >чаты</Link></p>
            </div>
            
        </div>      
    </>;
    }
}

const mapStateToProps = ({ }) => ({ });
 
 const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(Profile);