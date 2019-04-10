import React, {Component} from 'react';
import NavBar from './nav';
import img from '../img/header.jpg';
import Logo from '../img/logo.png';
import Footer from './footer';

export default class Contact extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <NavBar/>
            <img className="logo" src={Logo} alt="logo"/>
            <img className="headerImg" src={img} alt="Header"/>
            <div>
                <form>
                    <div className="cont">
                        <h2 className="head">Contact Us</h2>
                        <div className="cont-col1">
                            <input type="text" name="fname" className="log-box" size="30" placeholder=" First Name"
                                   autoComplete=" off" required/>
                        </div>
                        <div class=" cont-col2">
                            <input type="email" name="email" className="log-box" size="30" placeholder=" E-Mail"
                                   autoComplete=" off" required/>
                        </div>
                        <div class=" cont-col3">
                            <input type="text" name="tel" pattern="[0-9]{10}" className="log-box"
                                   size="30" placeholder="Telephone" autoComplete="off" required/>
                        </div>
                        <div class="cont-big">
                            <textarea name="cmnt" className="txt-ar" placeholder="Comment" autoComplete=" off"
                                      required/>
                        </div>
                        <div class="cont-but2">
                            <button type="submit" value="submit" className="button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer/>
        </div>;
    }

}