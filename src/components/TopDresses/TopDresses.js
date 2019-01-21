import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import TopDressItem from './TopDressItem';
class TopDresses extends Component {
  render() {
    return (
      <section className="gla_section">
        <div className="container text-center">
          <p><img src="images/animations/flower6.gif" data-bottom-top="@src:images/animations/flower6.gif; opacity:1" className="gla_animated_flower skrollable skrollable-after" height={110} alt style={{opacity: 1}} /></p>
          <h2>Áo cưới</h2>
          <h3 className="gla_subtitle">Áo cưới nổi bật</h3>
          <p>Our ceremony and reception will be held at the Liberty House. Located on the Hudson River, it
            has a beautiful, unobstructed view of the World Trade One building and a convenient ferry that
            runs between it and Manhattan.</p>
          {/* boxes */}
          <div className="gla_icon_boxes row text-left">
            {/* item */}
            <TopDressItem/>
            <TopDressItem/>
            <TopDressItem/>
            {/*end item */}
          </div>
          <div className="gla_post_more clearfix">
            <div>
              <a href="AoCuoi.html" className="btn">Xem thêm</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}



export default TopDresses;