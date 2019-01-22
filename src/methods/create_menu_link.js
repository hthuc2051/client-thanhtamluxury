
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


// For menu items
const MenuLink = ({ label, to, activeOnlyWhenExact, itemSliders }) => {
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
                        {to === '/' ? renderItemSlider(itemSliders) : <ul>{renderItemSlider(itemSliders)}</ul>}
                    </li>
                );
            }}
        />
    );
};



// For Slider items
const SliderItemLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
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


// For Slider items
export const renderItemSlider = (itemSliders) => {
    var result = null;
    if (itemSliders.length > 0) {
        result = itemSliders.map((item, index) => {
            return (
                <SliderItemLink
                    key={index}
                    id={item.id}
                    label={item.name}
                    to={item.slug}
                />
            );
        });
    }
    return result;
}


// Render 
export const renderLink = (items) => {
    var result = null;
    if (items.length > 0) {
        result = items.map((item, index) => {
            return (
                <MenuLink
                    key={index}
                    label={item.name}
                    to={item.to}
                    activeOnlyWhenExact={item.exact}
                    itemSliders={item.itemSliders}
                />
            );
        });
    }
    return result;
}