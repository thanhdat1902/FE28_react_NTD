import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/action/index';
import { NavLink } from 'react-router-dom';
import Trailer from '../../components/Home/Trailer';
class DetailFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rap: {maHeThongRap : "BHDStar"},
            thongTinPhim: {},
            day: "1/1/2019",
            isLoading: true,
            check: 1,
            activeLogo : 0,
            activeDay :0
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.detailMovie(id);
        this.props.heThongRap();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.thongTinPhim) {
            this.setState({
                thongTinPhim: nextProps.thongTinPhim,
            })
        }
        if (JSON.stringify(nextProps.thongTinPhim) !== "{}") {
            if (this.state.check === 2) {
                this.setState({
                    isLoading: false
                })
            }
        }
        this.setState({
            check: 2
        })
    }
    renderHeThongRap = () => {
        return this.props.listHeThongRap.map((item, index) => {
            return (
                <li className={this.state.activeLogo === index ? "active" : ""} key={index}>
                    <button onClick={() => { this.handleRap(item,index) }}>
                        <img className="img img-fluid" src={item.logo} alt="load" />
                        <div className="detail_rap_lopphu"></div>
                    </button>
                </li>
            );

        })
    }
    handleRap = (rap,index) => {
        this.setState({
            rap,
            day : "1/1/2019",
            activeLogo : index,
            activeDay : 0
        })
    }
    handleLichChieu = (day,index) => {
        this.setState({
            day,
            activeDay : index
        })
    }
    renderLichChieu = () => {
        if (JSON.stringify(this.state.thongTinPhim) !== "{}") {
            let dem = 0;
            let mang = [];
            let content = this.state.thongTinPhim.lichChieu.map((item, index) => {
                if (this.state.rap.maHeThongRap === item.thongTinRap.maHeThongRap) {
                    if (new Date(item.ngayChieuGioChieu).toLocaleDateString() === this.state.day) {
                        let indexMang = mang.findIndex((rap) => rap === item.thongTinRap.maCumRap);
                        if (indexMang === -1) {
                            mang.push(item.thongTinRap.maCumRap);
                            return (
                                <div key={index} className="border-top">
                                    <div className="lead font-weight-bold text-warning">{item.thongTinRap.tenCumRap}</div>
                                    <div className="lead font-italic">Thời lượng: {item.thoiLuong} phút</div>
                                    <NavLink to={`/check-out/${item.maLichChieu}`} className="btn btn-outline-success m-3">{new Date(item.ngayChieuGioChieu).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</NavLink>
                                </div>
                            );
                        }
                        dem++;
                        return (
                            <NavLink to={`/check-out/${item.maLichChieu}`} key={index} className="btn btn-outline-success m-3">{new Date(item.ngayChieuGioChieu).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</NavLink>
                        );
                    }
                }
            })
            if (dem !== 0) {
                return content
            } else {
                return (<div>Không có suất chiếu</div>)
            }
        }
    }
    renderNgay = () => {
        let listDay = []
        if (JSON.stringify(this.state.thongTinPhim) !== "{}") {
            this.state.thongTinPhim.lichChieu.map((item) => {
                let itemDay = new Date(item.ngayChieuGioChieu).toLocaleDateString();
                let indexDay = listDay.findIndex(day => day === itemDay);
                if (indexDay === -1) {
                    listDay.push(itemDay);
                }
            });
        }
        if (listDay.length) {
            return listDay.map((item, index) => {
                return (
                    <li className={this.state.activeDay === index ? "active" : ""} key={index}>
                        <button className="border-bottom" onClick={() => { this.handleLichChieu(item, index) }}>
                            <div className="detail_day_content">
                                <p>{item}</p>
                            </div>
                            <div className="detail_day_lopphu"></div>
                        </button>
                    </li>
                );
            })
        }
    }
    renderStar() {
        let star = this.props.thongTinPhim.danhGia;
        let a = [];
        while (star > 0) {
            if (star) {
                a.push(
                    <li key={star}><i className="fa fa-star" /></li>
                )
            }
            star--;
        }
        return a;
    }
    renderTrailer = (id) => {
        this.props.trailer(id)
    }
    render() {
        if (!this.state.isLoading) {
            return (
                <div className="detail_page">
                    <div className="detail_page_img" style={{ backgroundImage: `url(${this.props.thongTinPhim.hinhAnh})` }}>
                        <div className="detail_bg"></div>
                    </div>
                    <div className="container detail_page_content">
                        <div className="row p-5">
                            <div className="col-sm-4">
                                <img className="img img-fluid" src={this.props.thongTinPhim.hinhAnh} alt="loading... "/>
                            </div>
                            <div className="col-sm-8">
                                <div>{new Date(this.props.thongTinPhim.ngayKhoiChieu).toDateString()}</div>
                                <div>
                                    <button className="btn btn-danger">C18</button>
                                    <span className="ml-2 lead font-weight-bold" style={{ fontSize: 30 }}>{this.props.thongTinPhim.tenPhim}</span>
                                </div>
                                <br />
                                <div>{this.props.thongTinPhim.moTa}</div>
                                <br />
                                <button className="btn btn-outline-warning" data-toggle="modal" data-target="#trailer" onClick={() => { this.renderTrailer(this.props.thongTinPhim.trailer) }}>Trailer</button>
                                <Trailer />
                                <div className="circle-rate lead font-weight-bold display-4">{this.props.thongTinPhim.danhGia}</div>
                                <ul className="detail_page_star">
                                    {this.renderStar()}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-12 bg-light text-dark ">
                                <ul className="detail-page-hethongrap">
                                    {this.renderHeThongRap()}
                                </ul>
                                <div className="row ">
                                    <div className="col-4 border-right">
                                        <ul className="detail-page-ngay">
                                            {this.renderNgay()}
                                        </ul>
                                    </div>
                                    <div className="col-8">
                                        {this.renderLichChieu()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div className="lds-hourglass"></div>);
        }
    }
}
const mapStateToProps = state => {
    return {
        thongTinPhim: state.movieReducer.thongTinPhim,
        listHeThongRap: state.movieReducer.heThongRap
    }
}
const mapDispatchToProps = dispatch => {
    return {
        detailMovie: id => {
            dispatch(action.actThongTinPhim(id))
        },
        heThongRap: () => {
            dispatch(action.actHeThongRap());
        },
        trailer: (id) => {
            dispatch(action.actTrailer(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailFilm);