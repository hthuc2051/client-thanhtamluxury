import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';
import TopAlbums from '../components/TopAlbums/TopAlbums';
import TopVideos from '../components/TopVideos/TopVideos';
import TopDresses from '../components/TopDresses/TopDresses';
import Quote from '../components/Quote/Quote';
import Appointment from '../components/Appointment/Appointment';
class HomePage extends Component {
    render() {
        return (
            <div className="gla_page" id="gla_page">
                <a href="#gla_page" className="gla_top ti ti-angle-up " />
                <div className="gla_music_icon">
                    <i className="ti ti-music" />
                </div>
                <div className="gla_music_icon_cont">
                    <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/108238095&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true" />
                </div>
                <Header />
                <Slider />
                <section id="gla_content" className="gla_content">
                    <TopAlbums />
                    <TopVideos />
                    <TopDresses />
                    <Quote />
                    <Appointment />
                </section>
                <Footer />
            </div>
        );
    }
}

export default HomePage;
