import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
class MenuItem extends Component {
    render() {
        return (
            <ul>
                <li className="gla_parent"><a href="TrangChu.html">Trang chủ</a>
                </li>
                <li className="gla_parent"><a href="Album.html">Albums</a>
                    <ul>
                        <li><a href="ChiTietAlbum.html">Albums 1</a></li>
                        <li><a href="ChiTietAlbum.html">Albums 2</a></li>
                        <li><a href="ChiTietAlbum.html">Albums 3</a></li>
                    </ul>
                </li>
                <li className="gla_parent"><a href="AoCuoi.html">Áo cưới</a>
                    <ul>
                        <li><a href="ChiTietAoCuoi.html">Áo cưới 1</a></li>
                        <li><a href="ChiTietAoCuoi.html">Áo cưới 2</a></li>
                        <li><a href="ChiTietAoCuoi.html">Áo cưới 3</a></li>
                    </ul>
                </li>
                <li className="gla_parent"><a href="Video.html">Video cưới</a></li>
                <li className="gla_parent"><a href="GoiDichVu.html">Bảng giá</a>
                    <ul>
                        <li><a href="GiaAlbums.html">Albums</a></li>
                        <li><a href="GiaVideo.html">Video</a></li>
                        <li><a href="GoiDichVu.html">Trọn gói</a></li>
                    </ul>
                </li>
            </ul>
        );
    }
}



export default MenuItem;


