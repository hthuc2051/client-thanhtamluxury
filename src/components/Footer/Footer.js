import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <section className="gla_section gla_image_bck gla_wht_txt" data-color="#292929" style={{ backgroundColor: 'rgb(41, 41, 41)' }}>
                <div className="container pt-20 pb-10">
                    <div className="row">
                        <div className="col-md-7 col-sm-7 aboutUs">
                            <h4>Thông tin chúng tôi</h4>
                            <p>
                                Địa chỉ : 459 Bùi Văn Hòa - Tổ 20 - Khu phố 6 - P. Long Bình - TP. Biên Hòa - T. Đồng Nai
                <br />
                                Điện thoại: 093 304 54 30<br />
                                <a href="mailto:hello@glanztheme.com">Email: thanhtam511983@gmail.com</a>
                            </p>
                        </div>
                        <div className="col-md-5 col-sm-5">
                            <h4>Địa điểm </h4><br />
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.4942857277247!2d106.87771211416214!3d10.925985692220154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174de447e46f59d%3A0x6fa176d0b49a9be2!2zNDU5IELDuWkgVsSDbiBIw7JhLCBMb25nIELDrG5oLCBUaMOgbmggcGjhu5EgQmnDqm4gSMOyYSwgxJDhu5NuZyBOYWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1547219151711" width="90%" height="260em" frameBorder={0} style={{ border: 0, marginTop: '-20px' }} allowFullScreen />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="gla_block">
                                <p>© Glanz 2017. Copyright. Glanz Theme.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



export default Footer;