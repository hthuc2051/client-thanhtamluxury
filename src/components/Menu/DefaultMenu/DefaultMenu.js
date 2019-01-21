
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {fetch_home_data} from '../../../methods/fetch_home_data'

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active + ' gla_parent'}>
                        <Link to={to}>
                            {label}
                        </Link>
                        {showSliderItems(to)}
                    </li>
                );


            }}
        />
    );
};

const showSliderItems = (to) => {
    switch (to) {
        case '/':
            return;
        case '/albums':
            return <ul>
                /albums
        </ul>
        case '/ao-cuoi':
            return <ul>
                /ao-cuoi
        </ul>
        case '/videos':
            return <ul>
                /videos
        </ul>
        case '/bang-gia':
            return <ul>
                /bang-gia
        </ul>
        default:
    }
}

const MenuSliderItemLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={() => {
                return (
                    <li >
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};



class DefaultMenu extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //       indexData: []
    //     }
    //   }
    //   async componentWillMount() {
    //     this.setState({indexData: await fetch_home_data()})
    //   }

    render() {
        // console.log(indexData);
        var { menus } = this.props;
        return (
            <div>
                <div className="gla_default_menu">
                    <ul>
                        {this.showDefaultMenu(menus)}
                    </ul>
                </div>
            </div>

        );
    }


    showDefaultMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }

    showMenuSliderItem = (menuSliderItems) => {
        var result = null;
        if (menuSliderItems.length > 0) {
            result = menuSliderItems.map((menu, index) => {
                return (
                    <MenuSliderItemLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }
}


export default DefaultMenu;


