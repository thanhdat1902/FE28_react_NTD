import React, { Component } from 'react';
import Modal from './../../components/Admin/Modal';
import { connect } from 'react-redux';
import * as action from './../../redux/action/index';
class handleUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 1
        }
    }
    componentDidMount() {
        this.props.danhSach();
    }
    renderHTML = () => {
        return this.props.danhSachNguoiDung.map((item, index) => {
            return (
                <tr key={index} className="d-flex row">
                    <td className="col-1">{index + 1}</td>
                    <td className="col-2">{item.hoTen}</td>
                    <td className="col-2">{item.taiKhoan}</td>
                    <td className="col-2">{item.soDt}</td>
                    <td className="col-3">{item.email}</td>
                    <td className="col-1">
                        <button className="btn btn-outline-danger" onClick={() => { this.handleDelete(item) }}>Xóa</button>
                    </td>
                    <td className="col-1">
                        <button className="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModalScrollable" onClick={() => { this.handleSubmit(item) }}>Sửa</button>
                    </td>
                </tr>
            );
        })
    }
    handleDelete = (taiKhoan) => {
        this.props.xoaNguoiDung(taiKhoan);
    }
    handleSubmit = (user) => {
        this.props.userEdit(user);
    }
    handleSearch = (event) => {
        this.props.searchUser(event.target.value)
    }
    render() {
        return (
            <div className="page-content p-2 container" id="content">
                <div className="display-4 text-center">LIST USERS</div>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearch} />
                </form>
                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable" onClick={() => { this.handleSubmit() }}>ADD USER</button>
                <Modal />
                <table className="table">
                    <thead>
                        <tr className="d-flex">
                            <th className="col-1">STT</th>
                            <th className="col-2">Name</th>
                            <th className="col-2">Username</th>
                            <th className="col-2">Phone number</th>
                            <th className="col-3">Email</th>
                            <th className="col-1">Function</th>
                            <th className="col-1">Function</th>
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


const mapDispatchToProps = dispatch => {
    return {
        danhSach: () => {
            dispatch(action.actDanhSach());
        },
        xoaNguoiDung: (taiKhoan) => {
            dispatch(action.actDeleteND(taiKhoan));
        },
        userEdit: user => {
            dispatch(action.actUserEdit(user))
        },
        searchUser: key => {
            dispatch(action.actSearch(key))
        }
    }
}

const mapPropsToState = (state) => {
    return {
        danhSachNguoiDung: state.userReducer.danhSach
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(handleUsers);