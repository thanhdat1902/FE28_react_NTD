import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import * as action from './../../redux/action/index';
import Trailer from '../../components/Home/Trailer';
import ListRap from '../../components/Home/ListRap';
import Review from '../../components/Home/Review';
import { NavLink } from 'react-router-dom';
import Carousel from '../../components/Home/Carousel';
class Home extends Component {
    componentDidMount() {
        this.props.danhSach();
    }
    renderListFilm = () => {
        return this.props.listMovie.map((item, index) => {
            return (
                <div className="movie_content" key={index}>
                    <div className="movie_item">
                        <img className="img-fluid" style={{ height: 300, width: 250 }} src={item.hinhAnh} alt="load" />
                        <div className="movie_overplay"></div>
                        <button className="movie_play" data-toggle="modal" data-target="#trailer" onClick={() => this.handleTrailer(item)}><i className="fa fa-play" /></button>
                    </div>
                    <div className="movie_detail">
                        <p className="tieude">{item.tenPhim}</p>
                        <p className="time">113 phút</p>
                    </div>
                    <NavLink to={`/detail/${item.maPhim}`} className="btn btn-danger w-100 movie_btnMuaNgay">Mua ngay</NavLink>
                </div>
            );
        })
    }
    handleTrailer = (item) => {
        this.props.trailer(item.trailer);
    }
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
        };
        return (
            <div className="home_content">
                <Carousel />
                <div className="text-light pt-5">

                    <div className="container">
                        <Slider {...settings}>
                            {this.renderListFilm()}
                        </Slider>
                    </div>
                    <Trailer />
                </div>
                <div className="home_bg">
                    <div style={{ height: 200 }}></div>
                    <ListRap />
                    <div style={{ height: 200 }}></div>
                    <Review />
                    <div style={{ height: 200 }}></div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        listMovie: state.movieReducer.danhSach,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        danhSach: () => {
            dispatch(action.actDanhSachPhim());
        },
        trailer: (trailer) => {
            dispatch(action.actTrailer(trailer))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);