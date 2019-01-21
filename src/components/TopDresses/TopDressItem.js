import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class TopDressItem extends Component {
    render() {
        return (
          <div className="col-md-4 col-sm-6">
          <a href="ChiTietAlbum.html" className="gla_news_block">
            <span className="gla_news_img">
              <span className="gla_over" data-image="http://www.aocuoithanhtam.com/upload/tinnho/aocuoithanhtam2-15041657575_410x500.png" />
            </span>
            <span className="gla_news_title aoCuoi-title">Áo cưới trắng </span>
          </a>
        </div>
        );
    }
}

export default TopDressItem;