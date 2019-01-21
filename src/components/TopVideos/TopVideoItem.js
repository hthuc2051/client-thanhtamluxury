import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class TopAlbumItem extends Component {
    render() {
        return (
            <div className="row gla_auto_height">
            <div className="col-md-6 gla_image_bck" data-color="#eee" style={{ backgroundColor: 'rgb(238, 238, 238)', height: '520px' }}>
              <div className="gla_simple_block top-video">
                <h2>Ian Wilson</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio mollitia, ipsa
                  accusamus eius. Aspernatur ab sed minima, doloremque eligendi voluptatibus repellat
                    unde, facilis natus ex ipsum eius atque suscipit fugit.</p>
              </div>
            </div>
            <div className="col-md-6 gla_image_bck" style={{ height: '520px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <iframe width="100%" height="360px" src="https://www.youtube.com/embed/y576-ONm5II?controls=0?autoplay=1&loop=1&mute=1&enablejsapi=1" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; mute;enablejsapi" allowFullScreen style={{ marginTop: '15%' }} />
            </div>
            <div className="col-md-6 col-md-push-6 gla_image_bck" data-color="#eee" style={{ backgroundColor: 'rgb(238, 238, 238)', height: '520px' }}>
              <div className="gla_simple_block top-video">
                <h2>Kelly Johnson</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio mollitia, ipsa
                  accusamus eius. Aspernatur ab sed minima, doloremque eligendi voluptatibus repellat
                    unde, facilis natus ex ipsum eius atque suscipit fugit.</p>
              </div>
            </div>
            <div className="col-md-6 col-md-pull-6 gla_image_bck" style={{ height: '520px', backgroundColor: 'rgba(0,0,0,0.5)' }}>
              <iframe width="100%" height="360px" src="https://www.youtube.com/embed/y576-ONm5II?controls=0?autoplay=1&loop=1&mute=1&enablejsapi=1" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; mute;enablejsapi" allowFullScreen style={{ marginTop: '15%' }} />
            </div>
          </div>
        );
    }
}



export default TopAlbumItem;