import React, { Component } from 'react';
import { connect } from 'react-redux';
class Slider extends Component {

    render() {
        var { imgSlider } = this.props

        return (
            <div className="gla_slider gla_image_bck  gla_wht_txt gla_fixed" data-image="images/wedding/andy_jeska/10099882125_4afe7c6786_k_mb.jpg" data-stellar-background-ratio="0.8">
                <div className="gla_over" data-color="#9abab6" data-opacity="0.2" />
                <div className="container">
                    <div className="gla_slide_txt gla_slide_center_bottom text-center">
                        <p><img src="images/animations/ourwedding_wh.gif" data-top-bottom="@src:images/animations/ourwedding_wh.gif" alt height={150} /></p>
                    </div>
                </div>
                <a className="gla_scroll_down gla_go" style={{ cursor: 'pointer' }}>
                    <b />
                    Scroll
            </a>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        imgSlider: state.imgSlider
    }
}

export default connect(mapStateToProps, null)(Slider);
