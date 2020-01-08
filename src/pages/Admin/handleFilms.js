import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../../redux/action/index';
import ModalFilm from '../../components/Admin/ModalFilm';
class handleFilms extends Component {
    componentDidMount() {
        this.props.danhSach();
    }
    renderHTML = () => {
        return this.props.danhSachPhim.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.tenPhim}</td>
                    <td><img className="img img-fluid" src={item.hinhAnh} alt="" /></td>
                    <td>{item.moTa}</td>
                    <td>
                        <button className="btn btn-outline-danger" onClick={() => {this.handleDelete(item)}}>Xóa</button>
                    </td>
                    <td>
                        <button className="btn btn-outline-success" data-target="#phimModal"data-toggle="modal" onClick={() => this.handleSubmit(item)} >Sửa</button>
                    </td>
                </tr>
            );
        })
    }
    handleDelete =(item) => {
        this.props.xoaPhim(item);
    }
    handleSearch = (event) => {
        this.props.danhSach(event.target.value);
    }
    handleSubmit = film => {
        console.log(film)
        this.props.filmEdit(film);
    }

    render() {
        return (
            <div>
                <div className="display-4 lead text-center">LIST FILMS</div>
                <button className="btn btn-success mr-2" data-toggle="modal" data-target="#phimModal" onClick={() => {this.handleSubmit()}}>ADD FILM</button>
                <ModalFilm/>
                <input type="text" onChange={this.handleSearch}/>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Logo</th>
                            <th>Description</th>
                            <th>Function</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderHTML()}
                    </tbody>
                </table>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        danhSachPhim: state.movieReducer.danhSach
    }
}
const mapDispatchToProps = dispatch => {
    return {
        danhSach: (key) => {
            dispatch(action.actDanhSachPhim(key))
        },
        xoaPhim : (maPhim) => {
            dispatch(action.actDeleteFilm(maPhim))
        },
        filmEdit : (film) => {
            dispatch(action.actFilmEdit(film))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(handleFilms);