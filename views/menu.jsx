import React, {Component} from 'react';
import foreign from '../img/foriegn.jpg';
import local from '../img/local.jpg';
import snack from '../img/snack.jpg';

export default class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <div className="menu">
            <div className="item"><img className="img" src={foreign} alt="foreign"/><div className="txt">Foreign</div></div>
            <div className="item"><img className="img" src={local} alt="local"/><div className="txt">Sri Lankan</div></div>
            <div className="item"><img className="img" src={snack} alt="snack"/><div className="txt">Snacks</div></div>
        </div>;

    }

}