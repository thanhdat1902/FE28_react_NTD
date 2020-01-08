import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../redux/action/index';
class SignUp extends Component {
    constructor(props) {
        super();
        this.state = {
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP01",
            maLoaiNguoiDung: "KhachHang",
            hoTen: ""
        }
    }
    handleOnchange = (event) => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state, this.props.history);
    }
    render() {
        return (
            <div className="container p-5">
                <div className="row">
                    <div className="col-5 mx-auto">
                        <form onSubmit={this.handleSubmit}>
                            <h4 className="display-4">Đăng Ký</h4>
                            <div className="form-group">
                                <label>Tài Khoản</label>
                                <input type="text" className="form-control" name="taiKhoan" onChange={this.handleOnchange} />
                            </div>
                            <div className="form-group">
                                <label>Mật Khẩu</label>
                                <input type="password" className="form-control" name="matKhau" onChange={this.handleOnchange} />
                            </div>
                            <div className="form-group">
                                <label>Họ Tên: </label>
                                <input type="text" className="form-control" name="hoTen" onChange={this.handleOnchange} />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" onChange={this.handleOnchange} />
                            </div>
                            <div className="form-group">
                                <label>Số ĐT</label>
                                <input type="text" className="form-control" name="soDt" onChange={this.handleOnchange} />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-success" type="submit">Đăng Ký</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signUp: (user, history) => {
            dispatch(action.actSignUp(user, history))
        }
    }
}
export default connect(null, mapDispatchToProps)(SignUp);