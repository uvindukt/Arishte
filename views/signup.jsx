import React, {Component} from 'react';
import NavBar from './nav';
import img from '../img/header.jpg';
import Logo from '../img/logo.png';

export default class SignUp extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <NavBar/>
            <img className="logo" src={Logo} alt="logo"/>
            <img className="headerImg" src={img} alt="Header"/>
            <div className="reg-container">
                <table>
                    <tbody>
                    <tr>
                        <td>First Name</td>
                        <td ><input type="text" className="text-box" name="fname" placeholder="eg. John" autoComplete="off"/></td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td><input type="text" className="text-box" name="lname"  placeholder="eg. Doe" autoComplete="off"/></td>
                    </tr>
                    <tr>
                        <td>E-Mail</td>
                        <td><input type="email" className="text-box" name="email" placeholder="eg. john.d@gmail.com" autoComplete="off"/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" className="text-box" name="pw" placeholder="Use a combination of numbers, letters & sumbols" autoComplete="off"/></td>
                    </tr>
                    <tr>
                        <td>Confirm Password</td>
                        <td><input type="password" className="text-box" name="cpw" placeholder="Use a combination of numbers, letters & symbols" autoComplete="off"/></td>
                    </tr>
                    <tr>
                        <td>Date of Birth</td>
                        <td><input type="date" name="dob" className="text-box" autoComplete="off"/></td>
                    </tr>
                    <tr>
                        <td>Telephone No.</td>
                        <td><input type="text" name="tel" className="text-box" pattern="[0-9]{10}" title="Telephone Number should consist of 10 digits" placeholder="eg. 0775002685" autoComplete="off"/></td>
                    </tr>
                    <tr>
                        <td>Bank Name</td>
                        <td><input type="text" className="text-box" name="bank" placeholder="eg. BOC" autoComplete="off" /></td>
                    </tr>
                    <tr>
                        <td>Bank Account No.</td>
                        <td><input type="text" name="acc" className="text-box" pattern="[0-9]{10,12}" title="Banck Account Number should contain 10 - 12 digits " placeholder="eg. 10-12 digits" autoComplete="off"/></td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td><input type="text" name="no" className="text-box" autoComplete="off" placeholder="Postal Number" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="text" name="st" className="text-box" autoComplete="off" placeholder="Street"/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="text" name="ct" className="text-box" autoComplete="off" placeholder="City"/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="text" name="di" className="text-box" autoComplete="off" placeholder="District" /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="col"><input type="checkbox" name="checkbox"/>&emsp;I have read and agree to the Privacy Policy</td>
                    </tr>
                    <tr>
                        <td className="col"><input class="button" type="reset" name="reset"/></td>
                        <td className="col"><input class="button" type="submit" name="submit" value="Submit"/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>;
    }
}