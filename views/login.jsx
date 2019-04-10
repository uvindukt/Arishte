import React, {Component} from "react";
import NavBar from "./home";
import Logo from "../img/logo.png";
import img from "../img/header.jpg";

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            uname: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.uname.length > 0 && this.state.password.length > 0;
    }

    render() {

        return <div>
            <NavBar/>
            <img className="logo" src={Logo} alt="logo"/>
            <img className="headerImg" src={img} alt="Header"/>
            <form>
                <table>
                    <tr>
                        <td>User name</td>
                        <td><input type="text" name="name" value={this.props.uname}/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="pass" value={this.props.password}/></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="check"/></td>
                        <td>Remember credentials</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td align="left"><input type="submit" value="Login" disabled={!this.validateForm()}/></td>
                    </tr>
                </table>

            </form>
        </div>;

    }
}

