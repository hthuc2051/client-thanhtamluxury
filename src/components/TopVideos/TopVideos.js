import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import TopVideoItem from './TopVideoItem';
import TopVideosContainer from '../../containers/TopVideosContainer';
class TopVideos extends Component {
  render() {
    return (
      <section className="gla_section gla_image_bck gla_fixed" data-stellar-background-ratio="0.2" data-image="images/wedding/ian_kelsey/14815177364_46f0b9d71e_k.jpg" style={{ backgroundImage: 'url("images/wedding/ian_kelsey/14815177364_46f0b9d71e_k.jpg")', backgroundAttachment: 'fixed', backgroundPosition: '50% 54px' }}>
        <div className="container">
          <TopVideosContainer/>
        </div>
        <div align="center" style={{ marginBottom: '2em' }}>
          <a href="AoCuoi.html" className="xemThemAoCuoi btn submit">Xem thêm</a>
        </div>
        {/* container end */}
      </section>
    );
  }
}



export default TopVideos;