import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class Quote extends Component {
    render() {
        return (
            <section className="gla_section gla_image_bck gla_fixed gla_wht_txt" data-stellar-background-ratio="0.8" data-image="images/wedding/andy_jeska/10094956883_a882196f8c_k.jpg">
                {/* Over */}
                <div className="gla_over" data-color="#282828" data-opacity="0.4" />
                <div className="container text-center">
                    <p><img src="images/animations/just_wh.gif" data-bottom-top="@src:images/animations/just_wh.gif" height={150} alt /></p>
                    <h3 style={{ marginBottom: '-10px' }}>" Yêu, là cùng nhau chung tay đi dưới con đường, </h3>
                    <h3> Là cùng trao cho nhau ngọt môi hôn. "</h3>
                    <p className="gla_subtitle">— Y.Ê.U</p>
                </div>
                {/* container end */}
            </section>
        );
    }
}



export default Quote;