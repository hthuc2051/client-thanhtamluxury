
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const MenuItemSlider = ({ label, to, activeOnlyWhenExact }) => {
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

export const showMenuItemSlider = (itemSliders) => {
    var result = null;
    if (itemSliders.length > 0) {
        result = itemSliders.map((item, index) => {
            return (
                <MenuItemSlider
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
