import React, { Component } from 'react';

class SignOut extends Component {
    componentDidMount = () => {
        this.props.loggedOut(false);
    }

    render() {
        return (
            <>
            </>
        );
    }
}

export default SignOut;
