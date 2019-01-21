import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import TopAlbumItem from './TopAlbumItem';
class TopAlbums extends Component {
    render() {
        return (
            <section className="gla_section" id="gla_services">
        <div className="container text-center">
          <p><img src="images/animations/flowers2.gif" data-bottom-top="@src:images/animations/flowers2.gif" height={150} alt /></p>
          <h2>Albums</h2>
          <h3 className="gla_subtitle">Những albums nổi bật</h3>
          <p>Our ceremony and reception will be held at the Liberty House. Located on the Hudson River, it
            has a beautiful, unobstructed view of the World Trade One building and a convenient ferry that
            runs between it and Manhattan.</p>
          {/* boxes */}
          <div className="gla_icon_boxes row text-left">
            <TopAlbumItem/>
            <TopAlbumItem/>
            <TopAlbumItem/>
          </div>
          <div className="gla_post_more clearfix">
            <div>
              <a href="Album.html" className="btn">Xem thêm</a>
            </div>
          </div>
          {/* boxes end */}
        </div>
        {/* container end */}
      </section>
        );
    }
}



export default TopAlbums;