
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import DefaultMenu from './DefaultMenu/DefaultMenu';
import MainMenu from './MainMenu/MainMenu';



class Menu extends Component {
    render() {
        var { menus } = this.props;
        return (
            <div>
               <MainMenu menus ={menus} />
               <DefaultMenu menus ={menus} />
            </div>
        );
    }
}



export default Menu;


