import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class TopAlbumItem extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6">
                <a href="ChiTietAlbum.html" className="gla_news_block">
                    <span className="gla_news_img">
                        <span className="gla_over" data-image="http://www.aocuoithanhtam.com/upload/tinnho/bia2-15040052631_330x217.14.jpg" />
                    </span>
                    <span className="gla_news_title">Chụp hìn cưới tại Biên Hòa Đồng Nai </span>
                    <p>Biên Hòa , <strong>Đồng Nai</strong></p>
                </a>
            </div>
        );
    }
}



export default TopAlbumItem;