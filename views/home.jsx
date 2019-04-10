import React, {Component} from 'react';
import NavBar from './nav';
import img from '../img/header.jpg';
import Menu from './menu';
import Logo from '../img/logo.png';
import Footer from './footer';

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <NavBar/>
            <img className="logo" src={Logo} alt="logo"/>
            <img className="headerImg" src={img} alt="Header"/>
            <Menu/>
            <Footer/>
        </div>;
    }

}