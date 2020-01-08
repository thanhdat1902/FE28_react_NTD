import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as action from '../../redux/action/index';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: "",
            matKhau: ""
        };
    }
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.login(this.state, this.props.history);
    }
    handleOnChange = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    renderHTML = () => {
        if (this.props.validation) {
            return (
                <div className="alert alert-danger" role="alert">{this.props.validation}</div>
            );
        }
    }
    render() {
        return (
            <div className="container pt-5">
                <div className="row">
                    <div className="col-5 mx-auto">
                        <form onSubmit={this.handleOnSubmit}>
                            <div className="form-group">
                                <label htmlFor="">Tài Khoản</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" name="taiKhoan" placeholder="Tài khoản" onChange={this.handleOnChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Mật Khẩu</label>
                                <input type="password" className="form-control" placeholder="Mật khẩu" name="matKhau" onChange={this.handleOnChange} />
                            </div>
                            {this.renderHTML()}
                            <button type="submit" className="btn btn-primary">Đăng nhập</button>
                        </form>
                        <ul className="social-agileinfo wthree2">
                        </ul>
                    </div>
                </div>
                <div style={{ height: 200 }}></div>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (user, history) => {
            dispatch(action.actDangNhap(user, history))
        }
    }
}

const mapStateToProps = state => {
    return {
        validation: state.userReducer.validation
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);