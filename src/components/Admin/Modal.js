import React, { Component } from "react";
import * as action from '../../redux/action/index';
import { connect } from 'react-redux';
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
      hoTen: "",
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps && nextProps.userEdit) {
      this.setState({
        taiKhoan: nextProps.userEdit.taiKhoan,
        matKhau: nextProps.userEdit.matKhau,
        hoTen: nextProps.userEdit.hoTen,
        email: nextProps.userEdit.email,
        soDt: nextProps.userEdit.soDT,
        maLoaiNguoiDung: nextProps.userEdit.maLoaiNguoiDung,
        maNhom: "GP01"
      })
      if(nextProps.userEdit.loaiNguoiDung) {
        if(nextProps.userEdit.loaiNguoiDung === "Quản trị") {
          this.setState({
            maLoaiNguoiDung : "QuanTri"
          })
        }else {
          this.setState({
            maLoaiNguoiDung : "KhachHang"
          })
        }
      }
      if(nextProps.userEdit.soDT) {
        this.setState({
          soDt : nextProps.userEdit.soDT
        })
      }else {
        this.setState({
          soDt : nextProps.userEdit.soDt
        })
      }
    } else {
      this.setState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: ""
      })
    }
  }
  handleOnChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    })
  }
  render() {
    return (
      <div className="modal fade" id="exampleModalScrollable" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.userEdit ? "EDIT USER" : "ADD USER"}</h5>
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
                  <label>Name</label>
                  <input type="text" className="form-control" name="hoTen" onChange={this.handleOnChange} value={this.state.hoTen} />
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="taiKhoan" onChange={this.handleOnChange} value={this.state.taiKhoan} />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" className="form-control" name="matKhau" onChange={this.handleOnChange} value={this.state.matKhau} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" onChange={this.handleOnChange} value={this.state.email} />
                </div>
                <div className="form-group">  
                  <label>Phone Number</label>
                  <input type="number" className="form-control" name="soDt" onChange={this.handleOnChange} value={this.state.soDt} />
                </div>
                <div className="form-group">
                  <label>Group number</label>
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
                  <label>Type</label>
                  <select className="form-control" name="maLoaiNguoiDung" onChange={this.handleOnChange} value={this.state.maLoaiNguoiDung}>
                    <option>KhachHang</option>
                    <option>QuanTri</option>
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
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.userEdit) {
      this.props.onUpdate(this.state);
    } else {
      this.props.onAdd(this.state);
      this.setState({
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
        hoTen: ""
      })
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: user => {
      dispatch(action.actThemNguoiDung(user))
    },
    onUpdate: user => {
      dispatch(action.actUpdateUser(user))
    },
    deleteUser : user => {
      dispatch(action.actDeleteND(user))
    }
  }
}
const mapStateToProps = state => {
  return {
    userEdit: state.userReducer.userEdit
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
