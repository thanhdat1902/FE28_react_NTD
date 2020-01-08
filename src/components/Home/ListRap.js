import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/action/index';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NavLink } from 'react-router-dom';
class ListRap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            danhSachPhim: [],
            activeHeThong: 0,
            activeCum :0
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.ListCumRap[0]) {
            this.setState({
                danhSachPhim: nextProps.ListCumRap[0].danhSachPhim,
                activeID: nextProps.ListCumRap[0].tenCumRap
            })
        }
    }
    componentDidMount() {
        this.props.heThongRap();
        this.props.cumRap("BHDStar");
        this.props.listPhim();
    }
    renderHeThongRap = () => {
        return this.props.ListHeThong.map((item, index) => {
            return (
                <li className={index === this.state.activeHeThong ? "active" : ""} key={index}>
                    <button onClick={() => { this.handleCumRap(item,index) }}>
                        <img className="img img-fluid" src={item.logo} alt="load" />
                        <div className="heThongRap_lopphu"></div>
                    </button>
                </li>
            );
        })
    }
    handleCumRap = (item,index) => {
        this.setState({
            activeHeThong : index,
            activeCum :0
        })
        this.props.cumRap(item.maHeThongRap);
    }
    renderCumRap = () => {
        if (this.props.ListCumRap) {
            return this.props.ListCumRap.map((item, index) => {
                return (
                    <li className={index === this.state.activeCum ? "active" : ""} key={index}>
                        <button className={"border-bottom"} onClick={() => { this.handleLichChieu(item,index) }}>
                            <div className="cumrap_item">
                                <div className="cumrap_text">
                                    <p className="text-success font-weight-bold">{item.tenCumRap}</p>
                                    <p>{item.diaChi}</p>
                                </div>
                            </div>
                            <div className="cumrap_lopphu"></div>
                        </button>
                    </li>
                );
            })
        }
    }
    handleLichChieu = (item,index) => {
        this.setState({
            activeCum : index,
            danhSachPhim: item.danhSachPhim
        })
    }
    renderLichChieu = () => {
        return this.state.danhSachPhim.map((item, index) => {
            return (
                <div key={index} className="p-2">
                    <div className="cumrap_item_item">
                        <img style={{height:200, width:150}} src={this.renderIMG(item)} alt="Loading" />
                        <div className="cumrap_text_text">
                            <p><span><button className="btn btn-warning tuoi disabled">C18</button></span>{item.tenPhim}</p>
                            <p className="lead">Phim 2D - Vietsub</p>
                        </div>
                    </div>
                    <div className="cumrap_giochieu row">
                        {this.renderNgayGio(item)}
                    </div>
                </div>
            );
        })
    }
    renderIMG = (item) => {
        //console.log(this.props.danhSachPhim);
        if (this.props.danhSachPhim) {
            let index = this.props.danhSachPhim.findIndex((phim) => phim.tenPhim === item.tenPhim);
            //console.log(index)
            if (index !== -1) {
                return this.props.danhSachPhim[index].hinhAnh;
            }
        }
    }
    renderNgayGio = (item) => {
        return item.lstLichChieuTheoPhim.map((item, index) => {
            if (new Date(item.ngayChieuGioChieu).toLocaleDateString() === "1/1/2019") {
                return (
                    <NavLink to={`/check-out/${item.maLichChieu}`} key={index} className="btn btn-success m-2 col-2">{new Date(item.ngayChieuGioChieu).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</NavLink>
                );
            }
        })
    }
    render() {

        return (
            <div className="container bg-light">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-2 border-right heThongRap">
                                <ul className="mb-5 justify-content-center">
                                    {this.renderHeThongRap()}
                                </ul>
                            </div>
                            <div className="col-4 border-right cumrap">
                                <InfiniteScroll
                                    dataLength={this.props.ListCumRap.lstCumRap ? this.props.ListCumRap.lstCumRap.length : 0}
                                    loader={<h4>Loading...</h4>}
                                    height={700}
                                >
                                    <ul className="mb-5 justify-content-center">
                                        {this.renderCumRap()}
                                    </ul>
                                </InfiniteScroll>
                            </div>
                            <div className="col-6">
                                <InfiniteScroll
                                    dataLength={this.state.danhSachPhim.length}
                                    loader={<h4>Loading...</h4>}
                                    height={700}
                                >
                                    {this.renderLichChieu()}
                                </InfiniteScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ListCumRap: state.movieReducer.listCumRap,
        ListHeThong: state.movieReducer.heThongRap,
        danhSachPhim: state.movieReducer.danhSach
    }
}
const mapDispatchToProps = dispatch => {
    return {
        heThongRap: () => {
            dispatch(action.actHeThongRap())
        },
        cumRap: (id) => {
            dispatch(action.actCumRap(id))
        },
        listPhim: (id) => {
            dispatch(action.actDanhSachPhim(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListRap);