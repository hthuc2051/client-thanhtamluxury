import React, { Component } from 'react';
import Menu from '../components/Menu/Menu';


const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true,
        itemSliders:[]
    },
    {
        name: 'Albums',
        to: '/albums',
        exact: false,
        itemSliders: [
            {
                id: 1,
                name: 'Albums 1',
                slug: '/albums-1'
            },
            {
                id: 2,
                name: 'Albums 2',
                slug: '/albums-2'
            },
            {
                id: 3,
                name: 'Albums 3',
                slug: '/albums-3'
            }
        ]
    },
    {
        name: 'Áo cưới',
        to: '/ao-cuoi',
        exact: false,
        itemSliders: [
            {
                id: 1,
                name: 'Áo cưới 1',
                slug: '/ao-cuoi-1'
            },
            {
                id: 2,
                name: 'Áo cưới 2',
                slug: '/ao-cuoi-2'
            },
            {
                id: 3,
                name: 'Áo cưới 3',
                slug: '/ao-cuoi-3'
            }
        ]
    },
    {
        name: 'Videos',
        to: '/videos',
        exact: false,
        itemSliders: [
            {
                id: 1,
                name: 'Videos 1',
                slug: '/video-1'
            },
            {
                id: 2,
                name: 'Videos 2',
                slug: '/video-2'
            },
            {
                id: 3,
                name: 'Videos 3',
                slug: '/video-3'
            }
        ]
    },
    {
        name: 'Bảng giá',
        to: '/bang-gia',
        exact: false,
        itemSliders: [
            {
                id: 1,
                name: 'Albums',
                slug: '/bang-gia-albums'
            },
            {
                id: 2,
                name: 'Videos',
                slug: '/bang-gia-video'
            },
            {
                id: 3,
                name: 'Trọn gói',
                slug: '/bang-gia-tron-goi'
            }
        ]
    }
];

class DefaultMenuContainer extends Component {

    render() {
        return (
            <Menu menus={menus} />
        );
    }
}

export default DefaultMenuContainer;
