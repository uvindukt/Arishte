import React, {Component} from 'react';

export default class NavBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="nav">
            <a href="#" className="navLink">Home</a>
            <a href="#" className="navLink">Contact Us</a>
            <a href="#" className="navLink">Sign Up</a>
            <a href="#" className="navLink">Sign In</a>
        </div>;
    }

}