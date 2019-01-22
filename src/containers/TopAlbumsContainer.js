import React, { Component } from 'react';
import TopAlbumItem from '../components/TopAlbums/TopAlbumItem';
const albums = [
    {
        id: 1,
        name: 'Chụp hình cưới tại Biên Hòa, Đồng Nai',
        location: 'Biên Hòa,',
        city: '  Đồng Nai',
        image: 'http://www.aocuoithanhtam.com/upload/tinnho/bia2-15040052631_330x217.14.jpg',
        slug: '/chup-hinh-cuoi-tai-bien-hoa-dong-nai'
    },
    {
        id: 2,
        name: 'Chụp hình cưới tại khu du lịch Bửu Long',
        location: 'Bửu Long,',
        city :'  Đồng Nai',
        image: 'http://www.aocuoithanhtam.com/upload/tinnho/bia2-15040047861_330x213.18.jpg',
        slug: '/chup-hinh-cuoi-tai-ha-loi'
    },
    {
        id: 3,
        name: 'Chụp hình cưới tại phim trường Phương Anh',
        location: '',
        city:'  Đà to the Lọt',
        image: 'http://www.aocuoithanhtam.com/upload/tinnho/3-15049507588_330x230.png',
        slug: '/chup-hinh-cuoi-tai-da-lot'
    }
];


const renderTopAlbums = (albums) => {
    var result = null;
    if (albums.length > 0) {
        result = albums.map((album, index) => {
            return (
                <TopAlbumItem key={index} album={album} />
            );
        });
    }
    return result;
}

class TopAlbumsContainer extends Component {
    render() {
        return (
            <div className="gla_icon_boxes row text-left">
                {renderTopAlbums(albums)}
            </div>

        );
    }
}

export default TopAlbumsContainer;
