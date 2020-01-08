import React, { Component } from 'react';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import img6 from '../../img/6.jpg';
import img7 from '../../img/7.jpg';
import img8 from '../../img/8.jpg';
// import img9 from '../../img/9.jpg';
// import img10 from '../../img/10.jpg';
// import img11 from '../../img/11.jpg';
// import img12 from '../../img/12.jpg';
// import img13 from '../../img/13.jpg';
// import img14 from '../../img/14.jpg';    
// import img15 from '../../img/15.jpg';
// import img16 from '../../img/16.jpg';
class Review extends Component {
    render() {
        return (
            <div className="container review_bg text-dark">
                {/* REVIEW */}
                <ul className="nav nav-tabs d-flex justify-content-center reviewTab" id="myTab" role="tablist">
                    <li className="nav-item reviewItem">
                        <a className="nav-link reviewLink active" id="home-tab" data-toggle="tab" href="#home" aria-controls="home" aria-selected="true">Điện ảnh 24h</a>
                    </li>
                    <li className="nav-item reviewItem">
                        <a className="nav-link reviewLink" id="profile-tab" data-toggle="tab" href="#profile" aria-controls="profile" aria-selected="false">Review</a>
                    </li>
                    <li className="nav-item reviewItem">
                        <a className="nav-link reviewLink" id="contact-tab" data-toggle="tab" href="#contact" aria-controls="contact" aria-selected="false">Khuyến Mãi</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row">
                            <div className="card col-6 filmDetails">
                                <img className="img-fluid rounded " src={img1} alt="loading" />
                                <div className="card-body">
                                    <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet">Đầu năm 2020, Ju-On sẵn sàng chào đón bạn tại phòng chiếu Việt</a>
                                    <p>Xem trailer mà gai hết người thật sự.</p>
                                </div>
                                <div className="card-footer">
                                    <span className="mr-2"><i className="fa fa-thumbs-up" /></span>
                                    <span className="mr-5">0</span>
                                    <span className="mr-2"><i className="fa fa-comment" /></span>
                                    <span>0</span>
                                </div>
                            </div>
                            <div className="card col-6 filmDetails">
                                <img className="img-fluid rounded " src={img2} alt="loading" />
                                <div className="card-body">
                                    <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Bắc Kim Thang và những chi tiết đắt giá trong trailer cuối cùng</a>
                                    <p>Xem xong trailer này, có ai tiếc thay thân phận của Hai Lầm hay không?</p>
                                </div>
                                <div className="card-footer">
                                    <span className="mr-2"><i className="fa fa-thumbs-up" /></span>
                                    <span className="mr-5">0</span>
                                    <span className="mr-2"><i className="fa fa-comment" /></span>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card col-4 filmDetails">
                                <img className="img-fluid rounded " src={img3} alt="loading" />
                                <div className="card-body">
                                    <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Sau 10 ngày khởi chiếu, Joker đã thu về gần 60 tỷ đồng</a>
                                    <p>Dù đã bước sang đến tuần thứ 2 nhưng Joker vẫn chưa có dấu hiệu hạ nhiệt tại phòng chiếu Việt.</p>
                                </div>
                                <div className="card-footer">
                                    <span className="mr-2"><i className="fa fa-thumbs-up" /></span>
                                    <span className="mr-5">0</span>
                                    <span className="mr-2"><i className="fa fa-comment" /></span>
                                    <span>0</span>
                                </div>
                            </div>
                            <div className="card col-4 filmDetails">
                                <img className="img-fluid rounded " src={img4} alt="loading" />
                                <div className="card-body">
                                    <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Vì sao Joker là kẻ phản diện được yêu thích nhất?</a>
                                    <p>Mang phong cách lịch thiệp, bóng bẩy nhưng phía sau nụ cười ấy là một tính cách quải gở, khó
                                      đoán
              với một tâm hồn bạo lực, Joker được mệnh danh là “Hoàng tử tội phạm”.</p>
                                </div>
                                <div className="card-footer">
                                    <span className="mr-2"><i className="fa fa-thumbs-up" /></span>
                                    <span className="mr-5">0</span>
                                    <span className="mr-2"><i className="fa fa-comment" /></span>
                                    <span>0</span>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="row mb-3">
                                    <div className="col-2 p-0 ">
                                        <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" ><img className="img-fluid rounded " src={img5} alt="loading" /></a>
                                    </div>
                                    <div className="col-10 p-0 filmDetailsMin">
                                        <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Ed Sheeran, 'Lọ Lem' Lily James và nhiều sao lớn cùng góp mặt...</a>
                                    </div>
                                </div>
                                <div className="row mt-3 mb-3">
                                    <div className="col-2 p-0 ">
                                        <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" ><img className="img-fluid rounded " src={img6} alt="loading" /></a>
                                    </div>
                                    <div className="col-10 p-0 filmDetailsMin">
                                        <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Vượt ải kiểm quyệt, Thất Sơn Tâm Linh chính thức tấn công...</a>
                                    </div>
                                </div>
                                <div className="row mt-3 mb-3">
                                    <div className="col-2 p-0 ">
                                        <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" ><img className="img-fluid rounded " src={img7} alt="loading" /></a>
                                    </div>
                                    <div className="col-10 p-0 filmDetailsMin">
                                        <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Không phô trương, cầu kỳ nhưng Lời Từ Biệt lại đang 'làm mưa...</a>
                                    </div>
                                </div>
                                <div className="row mt-3 mb-3">
                                    <div className="col-2 p-0 ">
                                        <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" ><img className="img-fluid rounded " src={img8} alt="loading" /></a>
                                    </div>
                                    <div className="col-10 p-0 filmDetailsMin">
                                        <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Siêu phẩm hoạt hình Trung Quốc - Na Tra: Ma Đồng Giáng Thế ...</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div id="more">
                            <div className="row">
                                <div className="card col-6 filmDetails">
                                    <img className="img-fluid rounded " src={img9} alt="loading" />
                                    <div className="card-body">
                                        <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Bạn còn nhớ hay đã quên nhóm bạn Losers' Club đối đầu với hề Pennywise?</a>
                                        <p>27 năm sau, liệu họ có đủ "mạnh" diệt It một lần và mãi mãi?</p>
                                    </div>
                                    <div className="card-footer">
                                        <span><i className="fa fa-thumbs-up" /></span>
                                        <span>0</span>
                                        <span><i className="fa fa-comment" /></span>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className="card col-6 filmDetails">
                                    <img className="img-fluid rounded " src={img10} alt="loading" />
                                    <div className="card-body">
                                        <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Sony và Disney 'chia tay đòi Spider-Man' - Ai là người chịu thiệt?</a>
                                        <p>Cuối cùng thì đại diện Sony cũng chính thức lên tiếng và xác nhận Spider-Man không còn ở MCU (Vũ trụ
                                          Điện
                ảnh Marvel) nữa. Nhưng ai là người chịu thiệt thòi hơn trong màn “chia tay thế kỉ” này?</p>
                                    </div>
                                    <div className="card-footer">
                                        <span><i className="fa fa-thumbs-up" /></span>
                                        <span>0</span>
                                        <span><i className="fa fa-comment" /></span>
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="card col-4 filmDetails">
                                    <img className="img-fluid rounded " src={img11} alt="loading" />
                                    <div className="card-body">
                                        <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Quái vật biển sâu trở lại trong Hung Thần Đại Dương: Thảm Sát</a>
                                        <p>Cá sấu vừa xong thì giờ đến cá mập tấn công phòng vé.</p>
                                    </div>
                                    <div className="card-footer">
                                        <span><i className="fa fa-thumbs-up" /></span>
                                        <span>0</span>
                                        <span><i className="fa fa-comment" /></span>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className="card col-4 filmDetails">
                                    <img className="img-fluid rounded " src={img12} alt="loading" />
                                    <div className="card-body">
                                        <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >3 lý do khiến bạn khó lòng bỏ qua siêu phẩm kinh dị, giật gân Địa Đạo Cá Sấu Tử</a>
                                        <p>Với sự kết hợp giữa thảm hoạ và sức mạnh của thiên nhiên, phim sẽ khiến ban phải đặt vé ra rạp ngay
                                          đấy.
              </p>
                                    </div>
                                    <div className="card-footer">
                                        <span><i className="fa fa-thumbs-up" /></span>
                                        <span>0</span>
                                        <span><i className="fa fa-comment" /></span>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="row mb-3">
                                        <div className="col-2 p-0 ">
                                            <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" ><img className="img-fluid rounded " src={img13} alt="loading" /></a>
                                        </div>
                                        <div className="col-10 p-0 filmDetailsMin">
                                            <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Conan và những phần phim gây sốt trên màn ảnh rộng Việt Nam...</a>
                                        </div>
                                    </div>
                                    <div className="row mt-3 mb-3">
                                        <div className="col-2 p-0 ">
                                            <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" ><img className="img-fluid rounded " src={img14} alt="loading" /></a>
                                        </div>
                                        <div className="col-10 p-0 filmDetailsMin">
                                            <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Khám phá tính cách đáng yêu của 5 học trò nhí trong Anh Thầ...</a>
                                        </div>
                                    </div>
                                    <div className="row mt-3 mb-3">
                                        <div className="col-2 p-0 ">
                                            <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" ><img className="img-fluid rounded " src={img15} alt="loading" /></a>
                                        </div>
                                        <div className="col-10 p-0 filmDetailsMin">
                                            <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Thưa Mẹ Con Đi giản dị nhưng lôi cuốn và còn gợi nhắc cả Call...</a>
                                        </div>
                                    </div>
                                    <div className="row mt-3 mb-3">
                                        <div className="col-2 p-0 ">
                                            <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" ><img className="img-fluid rounded " src={img16} alt="loading" /></a>
                                        </div>
                                        <div className="col-10 p-0 filmDetailsMin">
                                            <a href="https://tix.vn/goc-dien-anh/7831-tom-tat-ca-vu-tru-star-wars-chi-voi-7-chi-tiet" >Dù chưa ra mắt nhưng Cậu Chủ Ma Cà Rồng đã ủ mưu sản xuất...</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="text-center">
                            <button className="btn btn-info" id="myBtn">Read more</button>
                        </div> */}
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">CHỨC NĂNG ĐANG NÂNG CẤP</div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">LIÊN HỆ ĐỂ ĐẶT QUẢNG CÁO</div>
                </div>
            </div>
        );
    }
}

export default Review;