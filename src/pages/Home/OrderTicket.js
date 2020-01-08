import React, { Component } from 'react';
import { connect } from 'react-redux';
import screen from '../../img/screen.png';
import * as action from '../../redux/action/index';
import SweetAlert from 'sweetalert2-react';
class OrderTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            danhSachVe: [],
            tongTien: 0,
            checkColor: [],
            show: false,
            isLoading: true,
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.lichChieu(id);
        let checkColor = this.state.checkColor;
        this.props.danhSachGhe.map(item => {
            checkColor.push(false);
        })
        this.setState({
            checkColor
        })
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        if (JSON.stringify(nextProps.danhSachGhe) !== "{}") {
            console.log(this.state.check)
            this.setState({
                isLoading: false
            })
        }
    }
    handleGhe = (ghe) => {
        //console.log(ghe);
        let index = this.state.danhSachVe.findIndex(item => item.maGhe === ghe.maGhe);
        let danhSachVe = [...this.state.danhSachVe];
        let tongTien = this.state.tongTien;
        let checkColor = [...this.state.checkColor];
        checkColor[+ghe.stt - 1] = !checkColor[+ghe.stt - 1];
        if (index === -1) {
            let seat = {
                maGhe: ghe.maGhe,
                giaVe: ghe.giaVe
            }
            tongTien += ghe.giaVe
            danhSachVe.push(seat);
            this.setState({
                danhSachVe,
                tongTien,
                checkColor
            })

        } else {
            danhSachVe.splice(index, 1);
            tongTien -= ghe.giaVe;
            this.setState({
                danhSachVe, tongTien, checkColor
            })
        }
    }
    renderGhe = () => {
        return this.props.danhSachGhe.map((item, index) => {
            if (item.daDat) {
                return (
                    <button className="btn btn-secondary m-2 buttonChoosed" key={index} style={{ width: 30, height: 30 }} disabled></button>
                );
            }
            else if (item.loaiGhe === "Thuong") {
                return (
                    <button key={index} className={this.state.checkColor[index] ? 'btn btn-success m-2' : 'btn btn-secondary m-2'} style={{ width: 30, height: 30 }} onClick={() => { this.handleGhe(item) }}></button>
                );
            } else if (item.loaiGhe === "Vip") {
                return (
                    <button key={index} className={this.state.checkColor[index] ? 'btn btn-success m-2' : 'btn btn-warning m-2'} style={{ width: 30, height: 30 }} onClick={() => { this.handleGhe(item) }}></button>
                );
            }
        })
    }
    thanhToanGhe = () => {
        return this.state.danhSachVe.map((item) => {
            return (
                item.maGhe + ','
            );
        })
    }
    handleDatVe = () => {
        console.log(this.state.danhSachVe);
        let user = JSON.parse(localStorage.getItem('userGuest'));
        if (user) {
            let datVe = {
                maLichChieu: this.props.thongTinPhim.maLichChieu,
                danhSachVe: this.state.danhSachVe,
                taiKhoanNguoiDung: user.taiKhoan
            }
            this.props.datVe(datVe, this.props.history);
            this.setState({
                show: true
            })
        } else {
            alert('Hãy đăng nhập để đặt vé');
            this.props.history.push('/sign-in');
        }
    }
    render() {
        if (!this.state.isLoading) {
            return (
                <div className="row danhSachGhe">
                    <div className="col-8">
                        <img className="img img-fluid text-center w-100 p-5" src={screen} alt="loading" />
                        {this.renderGhe()}
                    </div>
                    <div className="col-4">
                        <div className="lead display-4">THANH TOÁN</div>
                        <button className="btn btn-danger">C18</button>
                        <span className="lead ml-2 font-weight-normal">{this.props.thongTinPhim.tenPhim}</span>
                        <br />
                        <p className="lead" style={{ fontSize: 17 }}>{this.props.thongTinPhim.tenCumRap}</p>
                        <p className="lead" style={{ fontSize: 17 }}>{this.props.thongTinPhim.diaChi}</p>
                        <p className="lead" style={{ fontSize: 17 }}>Ngày chiếu: <span style={{ fontWeight: 500 }}>{this.props.thongTinPhim.ngayChieu}</span>         Giờ chiếu: <span style={{ fontWeight: 500 }}>{this.props.thongTinPhim.gioChieu}</span></p>
                        <br />
                        <span className="lead">Ghế: </span>
                        <p className="thanhToanGhe text-danger font-weight-bold">{this.thanhToanGhe()}</p>
                        <br />
                        <span className="lead">Thành tiền</span>
                        <p className="thanhToanGhe text-success font-weight-bold" style={{ fontSize: 50 }}>{this.state.tongTien} VND</p>
                        <form className="p-4">
                            <div className="custom-control custom-radio custom-control">
                                <input type="radio" className="custom-control-input" id="customRadio" name="example" defaultValue="customEx" />
                                <label className="custom-control-label lead " htmlFor="customRadio">Thanh toán qua Zalo Pay</label>
                            </div>
                            <div className="custom-control custom-radio custom-control">
                                <input type="radio" className="custom-control-input" id="customRadio2" name="example" defaultValue="customEx" />
                                <label className="custom-control-label lead " htmlFor="customRadio2">Thanh toán qua MOMO</label>
                            </div>
                            <div className="custom-control custom-radio custom-control">
                                <input type="radio" className="custom-control-input" id="customRadio3" name="example" defaultValue="customEx" />
                                <label className="custom-control-label lead " htmlFor="customRadio3">Thẻ ATM Nội Địa</label>
                            </div>
                            <div className="custom-control custom-radio custom-control">
                                <input type="radio" className="custom-control-input" id="customRadio4" name="example" defaultValue="customEx" />
                                <label className="custom-control-label lead " htmlFor="customRadio4">Visa, Mastercard</label>
                            </div>
                        </form>
                        <button className="btn btn-outline-success w-100 lead" style={{ fontSize: 50 }} onClick={() => { this.handleDatVe() }}>Đặt vé</button>
                        <SweetAlert
                            show={this.state.show}
                            title="Đặt vé thành công"
                            text="Cảm ơn đã sử dụng dịch vụ!"
                            onConfirm={() => this.setState({ show: false })}
                        />
                    </div>
                </div>
            );
        } else {
            return (<div className="lds-hourglass"></div>);
        }
    }
}
const mapStateToProps = state => {
    return {
        danhSachGhe: state.movieReducer.danhSachGhe,
        thongTinPhim: state.movieReducer.rapDetail
    }
}
const mapDispatchToProps = dispatch => {
    return {
        datVe: (ticketDetail, history) => {
            dispatch(action.actDatVe(ticketDetail, history))
        },
        lichChieu: id => {
            dispatch(action.actLichChieu(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderTicket);