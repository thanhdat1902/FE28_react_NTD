import React, { Component } from 'react';
import user from './../../img/user.png';
class dashBoard extends Component {
    render() {
        let admin = JSON.parse(localStorage.getItem("userAdmin"));
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img className="img-fluid" src={user} alt="" />
                    </div>
                    <div className="col-10">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Phone Number</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{admin.hoTen}</td>
                                    <td>{admin.taiKhoan}</td>
                                    <td>{admin.soDT}</td>
                                    <td>{admin.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default dashBoard;