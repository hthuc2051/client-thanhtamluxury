
import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MenuItem from './MenuItem';
class MainMenu extends Component {
    render() {
        return (
            <div>
                <div className="gla_main_menu gla_main_menu_mobile">
                    <div className="gla_main_menu_icon">
                        <i /><i /><i /><i />
                        <b>Menu</b>
                        <b className="gla_main_menu_icon_b">Back</b>
                    </div>
                </div>

                <div className="gla_main_menu_content gla_image_bck" data-color="rgba(0,0,0,0.9)" data-image="images/wedding/andy_jeska/10099882125_4afe7c6786_k_mb.jpg">
                    <div className="gla_over" data-color="#000" data-opacity="0.7" />
                </div>
                <div className="gla_main_menu_content_menu gla_wht_txt text-right">
                    <div className="container">
                       
                            <MenuItem />
                       
                    </div>

                </div>
            </div>
        );
    }
}



export default MainMenu;


