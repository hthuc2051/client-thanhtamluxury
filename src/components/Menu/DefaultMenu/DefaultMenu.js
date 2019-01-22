
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { fetch_home_data } from '../../../methods/fetch_home_data'
import { renderLink } from '../../../methods/create_menu_link';

class DefaultMenu extends Component {

    render() {
        var { menus } = this.props;
        return (
            <div>
                <div className="gla_default_menu">
                    <ul>
                        {renderLink(menus)}
                    </ul>
                </div>
            </div>

        );
    }

}


export default DefaultMenu;


