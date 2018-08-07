import React, { Component } from 'react';
import { connect } from 'react-redux';

import history from '../history';

export default function(ComposedComponent) {
    class Authentication extends Component {
        componentWillMount() {
            if(!this.props.authenticated) {
                history.push('/');
            }
        }
        componentWillUpdate(nextProps) {
            if(!nextProps.authenticated) {
                history.push('/');
            }
        }
        render() {
<<<<<<< HEAD
            return <ComposedComponent {...this.props}/>
=======
            return <ComposedComponent/>
>>>>>>> e5b6c86b88a1ce58214aa38b2dbc97c9230466f4
        }
    }

    function mapStateToProps(state) {
        const { authenticated } = state.auth;
        return { authenticated } 
    }
<<<<<<< HEAD
    
    return connect(mapStateToProps)(Authentication)
}
=======

    return connect(mapStateToProps)(Authentication)
}
>>>>>>> e5b6c86b88a1ce58214aa38b2dbc97c9230466f4
