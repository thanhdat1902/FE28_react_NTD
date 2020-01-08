import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/action/index';
var imageFile;
class ModalFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maPhim: 0,
            tenPhim: "",
            biDanh: "",
            trailer: "",
            hinhAnh: "",
            moTa: "",
            maNhom: "GP01",
            ngayKhoiChieu: "",
            danhGia: 0
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (nextProps && nextProps.filmEdit) {
            let dateobj = new Date(nextProps.filmEdit.ngayKhoiChieu);
            function pad(n) { return n < 10 ? "0" + n : n; }
            let result = pad(dateobj.getDate()) + "/" + pad(dateobj.getMonth() + 1) + "/" + dateobj.getFullYear();
            this.setState({
                maPhim: nextProps.filmEdit.maPhim,
                tenPhim: nextProps.filmEdit.tenPhim,
                biDanh: nextProps.filmEdit.biDanh,
                trailer: nextProps.filmEdit.trailer,
                hinhAnh: nextProps.filmEdit.hinhAnh,
                moTa: nextProps.filmEdit.moTa,
                maNhom: nextProps.filmEdit.maNhom,
                ngayKhoiChieu: result,
                danhGia: nextProps.filmEdit.danhGia,
            })
        } else {
            this.setState({
                maPhim: 0,
                tenPhim: "",
                biDanh: "",
                trailer: "",
                hinhAnh: "",
                moTa: "",
                maNhom: "GP01",
                ngayKhoiChieu: "",
                danhGia: 0
            })
        }
    }
    handleOnChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({
            [name]: value,
        })
    }
    handleOnChangeImg = (event) => {
        imageFile = event.target.files[0];
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.filmEdit) {
            this.props.updateFilm(this.state, imageFile);
        } else {
            this.props.addFilm(this.state, imageFile);
        }


    }
    render() {
        return (
            <div className="modal fade" id="phimModal" tabIndex={-1} role="dialog" aria-labelledby="phimModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{this.props.filmEdit ? "EDIT FILM" : "ADD FILM"}</h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Mã Phim</label>
                                    <input type="text" className="form-control" name="maPhim" onChange={this.handleOnChange} value={this.state.maPhim} />
                                </div>
                                <div className="form-group">
                                    <label>Tên Phim</label>
                                    <input type="text" className="form-control" name="tenPhim" onChange={this.handleOnChange} value={this.state.tenPhim} />
                                </div>
                                <div className="form-group">
                                    <label>Bí danh</label>
                                    <input type="text" className="form-control" name="biDanh" onChange={this.handleOnChange} value={this.state.biDanh} />
                                </div>
                                <div className="form-group">
                                    <label>Trailer</label>
                                    <input type="text" className="form-control" name="trailer" onChange={this.handleOnChange} value={this.state.trailer} />
                                </div>
                                <div className="form-group">
                                    <label>Hình Ảnh</label>
                                    <input type="file" className="form-control" name="hinhAnh" onChange={this.handleOnChangeImg} />
                                </div>
                                <div className="form-group">
                                    <label>Mô Tả</label>
                                    <textarea type="message" className="form-control" style={{ height: 100 }} name="moTa" onChange={this.handleOnChange} value={this.state.moTa} />

                                </div>
                                <div className="form-group">
                                    <label>Mã Nhóm</label>
                                    <select className="form-control" name="maNhom" onChange={this.handleOnChange} value={this.state.maNhom}>
                                        <option>GP01</option>
                                        <option>GP02</option>
                                        <option>GP03</option>
                                        <option>GP04</option>
                                        <option>GP05</option>
                                        <option>GP06</option>
                                        <option>GP07</option>
                                        <option>GP08</option>
                                        <option>GP09</option>
                                        <option>GP10</option>
                                        <option>GP11</option>
                                        <option>GP12</option>
                                        <option>GP13</option>
                                        <option>GP14</option>
                                        <option>GP15</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Ngày khởi chiếu</label>
                                    <input type="text" className="form-control" name="ngayKhoiChieu" onChange={this.handleOnChange} value={this.state.ngayKhoiChieu} />
                                </div>
                                <div className="form-group">
                                    <label>Đánh giá</label>
                                    <select type="number" className="form-control" name="danhGia" onChange={this.handleOnChange} value={this.state.danhGia}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-success" >
                                    Submit
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addFilm: (item, img) => {
            dispatch(action.actAddFilm(item, img))
        },
        updateFilm: (film, img) => {
            dispatch(action.actUpdateFilm(film, img))
        }
    }
}
const mapStateToProps = state => {
    return {
        filmEdit: state.movieReducer.filmEdit
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalFilm);