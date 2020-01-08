import React, { Component } from 'react';
import logo1 from '../../img/bhd.png';
import logo2 from '../../img/galaxycine.png';
import logo3 from '../../img/cinestar.png';
import logo4 from '../../img/megags.png';
import logo5 from '../../img/VCB.png';
import logo6 from '../../img/VIETTINBANK.png';
import logo7 from '../../img/TOUCH.png';
import logo8 from '../../img/AGRIBANK.png';
import logo9 from '../../img/IVB.png';
import logo10 from '../../img/laban.png';
import logo11 from '../../img/momo.png';
import logo12 from '../../img/zalopay_icon.png';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="container __footer">
                    <div className="row _rowfootertop">
                        <div className="col-lg-4 col-md-8 col-sm-8 col-12">
                            <p className="td_footer  ">WebPhim</p>
                            <div className="row">
                                <div className="col-lg-6 col-6  webphim">
                                    <a href="#123">FAQ</a>
                                    <a href="#123">Brand Guidelines</a>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 col-12 webphim">
                                    <a href="#123">Thỏa thuận sử dụng</a>
                                    <a href="#123">Quy chế hoạt động</a>
                                    <a href="#123">Chính sách bảo mật</a>
                                    <a href="#123">Quyền lợi thành viên</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <p className="td_footer">Đối tác</p>
                            <div className="row linePartner">
                                <div className="col-lg-12 doitac">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <a href="#123">
                                                <img className="img-fluid icon__img" src={logo1} alt="loading" />
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="#123">
                                                <img className="img-fluid icon__img" src={logo2} alt="loading" />
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="#123">
                                                <img className="img-fluid icon__img" src={logo3}alt="loading" />
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="#123">
                                                <img className="img-fluid icon__img" src={logo4}alt="loading" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row linePartner">
                                <div className="col-sm-12 doitac">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <a href="#123">
                                                <img className="img-fluid icon__img" src={logo5}alt="loading" />
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="#123">
                                                <img className="img-fluid icon__img" src={logo6}alt="loading" />
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="#123">
                                                <img className="img-fluid icon__img" src={logo7}alt="loading" />
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="#123">
                                                <img className="img-fluid icon__img" src={logo8}alt="loading" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row linePartner">
                                <div className="col-sm-12 doitac">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <a href="#123">
                                                <img className="img-fluid icon__img" src={logo9}alt="loading" />
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="#123">
                                                <img className="img-fluid icon__img" src={logo10}alt="loading" />
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="#123">
                                                <img className="img-fluid icon__img" src={logo11}alt="loading" />
                                            </a>
                                        </div>
                                        <div className="col-sm-3">
                                            <a href="#123">
                                                <img className="img-fluid icon__img" src={logo12}alt="loading" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 col-12 mobile_social_app">
                                    <p className="td_footer ">Mobile app</p>
                                    <a href="#123"><i className="fa fa-apple" /></a>
                                    <a href="#123"><i className="fa fa-android" /></a>
                                </div>
                                <div className="col-lg-6 col-12 mobile_social_app ">
                                    <p className="td_footer ">Social </p>
                                    <a href="#123"><i className="fa fa-facebook" /></a>
                                    <a href="#123"><i className="fa fa-twitter" /></a>
                                    <a href="#123"><i className="fa fa-google-plus" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="hrfooter" />
                    <div className="row _rowfooterbottom">
                        <div className="col-sm-12 col-12 infoFooter">
                            <span>WebPhim - Copyright</span>
                            <span>Nguyễn Thành Đạt</span>
                            <span>Võ Ngọc Anh</span>
                            <span>Nguyễn Trung Quân</span>
                        </div>
                    </div>
                </div>  
            </div>

        );
    }
}

export default Footer;