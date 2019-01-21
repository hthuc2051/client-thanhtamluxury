
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import DefaultMenu from './DefaultMenu/DefaultMenu';
import MainMenu from './MainMenu/MainMenu';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Albums',
        to: '/albums',
        exact: false
    },
    {
        name: 'Áo cưới',
        to: '/ao-cuoi',
        exact: false
    },
    {
        name: 'Videos',
        to: '/videos',
        exact: false
    },
    {
        name: 'Bảng giá',
        to: '/bang-gia',
        exact: false
    }
];

class Menu extends Component {
    render() {
        return (
            <div>
               <MainMenu menus ={menus}/>
               <DefaultMenu menus ={menus} />
            </div>
        );
    }
}



export default Menu;


