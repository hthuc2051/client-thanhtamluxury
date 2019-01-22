import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Menu from '../Menu/Menu';
import DefaultMenuContainer from '../../containers/DefaultMenuContainer';
class Header extends Component {
    render() {
        return (
            <header>
                <nav className="gla_light_nav gla_transp_nav">
                    <div className="container">
                        <div className="gla_logo_container clearfix">
                            <img src="images/glanz_logo.png" alt className="gla_logo_rev" />
                            <div className="gla_logo_txt">
                                <a href="TrangChu.html" className="gla_logo">Thanh tâm luxury</a>
                            </div>
                        </div>
                        <DefaultMenuContainer/>
                    </div>
                </nav>
            </header>
        );
    }
}



export default Header;