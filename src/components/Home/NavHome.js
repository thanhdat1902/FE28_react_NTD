import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/web-logo.png';
import avatar from '../../img/avatarDefault.png';
class NavHome extends Component {
    renderRight = () => {
        let user = JSON.parse(localStorage.getItem('userGuest'));
        if (!user) {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item navHomeItem">
                        <NavLink to="/sign-in" className="nav-link">Sign in</NavLink>
                    </li>
                    <li className="nav-item navHomeItem">
                        <NavLink to="/sign-up" className="nav-link">Sign up</NavLink>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item navHomeItem">
                        <div className="lead display-5 text-white mr-2"><img className="rounded-circle" src={avatar} style={{ width: 30, height: 30 }} alt="loading"/></div>
                    </li>
                    <li className="nav-item navHomeItem">
                        <div className="lead display-5 text-white mr-2">{user.hoTen}</div>
                    </li>
                    <li className="nav-item navHomeItem">
                        <NavLink to="/sign-in" className="btn btn-outline-danger" onClick={() => { this.handleLogOut() }}>Log out</NavLink>
                    </li>
                </ul>
            );
        }
    }
    handleLogOut = () => {
        localStorage.removeItem('userGuest');
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light navHome_bg">
                <NavLink className="navbar-brand" to="/"><img className="w-50" src={logo} alt="load" /></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto navHomeTab">
                        <li className="nav-item navHomeItem">
                            <a className="nav-link navHomeLink" href="#home">Trang Chủ</a>
                        </li>
                        <li className="nav-item navHomeItem">
                            <a className="nav-link navHomeLink" href="#news">Tin tức</a>
                        </li>
                        <li className="nav-item navHomeItem">
                            <a className="nav-link navHomeLink" href="#footer">Liên Hệ</a>
                        </li>
                    </ul>
                    {this.renderRight()}
                </div>
            </nav>

        );
    }
}

export default NavHome;