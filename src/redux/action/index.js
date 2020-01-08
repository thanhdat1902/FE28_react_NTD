import Axios from "axios";
import * as ActionType from './../constants/ActionType';
//Lay accessToken tu LocalStorage
const userAdmin = JSON.parse(localStorage.getItem("userAdmin"));
if (userAdmin) {
  var config =
  {
    headers: {
      Authorization: `Bearer ${userAdmin.accessToken}`
    }
  }
}
// USER
const actThemNguoiDung = user => {
  return dispatch => {
    Axios.post("http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung", user, config)
      .then(result => {
        // console.log(result.data);
        alert("Thêm thành công")
        dispatch({
          type: ActionType.ADD_USER,
          data: result.data
        })
      })
      .catch(err => {
        alert(err.response.data)
      });
  };
};

const actLoginAdmin = (user, history) => {
  console.log(user);
  return dispatch => {
    Axios({
      method: "POST",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      data: user
    })
      .then(result => {
        if (result.data.maLoaiNguoiDung === "QuanTri") {
          localStorage.setItem("userAdmin", JSON.stringify(result.data));
          //Chuyen link
          console.log(history);
          history.push("/admin/dashboard");
        } else {
          history.push("/");
        }
      })
      .catch(err => {
        dispatch({
          type: ActionType.VALIDATION_ADMIN,
          validation: "Wrong username or password",
        })
        console.log(err.response.data);
      });
  };
};
const actDanhSach = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
    })
      .then(result => {
        dispatch({
          type: ActionType.MEMBER_LIST,
          data: result.data
        })
      })
      .catch(err => {
        alert("Some error");
      })
  }

}
const actDeleteND = (user) => {
  const url = `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user.taiKhoan}`
  return dispatch => {
    Axios.delete(url, config)
      .then(result => {
        dispatch({
          type: ActionType.DELETE_USER,
          data : user
        })
        alert('Xóa thành công');
      })
      .catch(err => {
        alert(err.response.data);
      })
  }
}

const actUpdateUser = (user) => {
  console.log(user)
  const url = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung"
  return dispatch => {
    Axios.put(url, user, config)
      .then(result => {
        dispatch({
          type : ActionType.USER_UPDATE,
          data : user
        })
        alert('Sửa thành công');
      })
      .catch(err => {
        alert(err.response.data);
      })
  }
}
const actUserEdit = user => {
  return dispatch => {
    dispatch({
      type: ActionType.USER_EDIT,
      data: user
    })
  }
}
const actSearch = key => {
  console.log(key);
  let url
  if (key) {
    url = `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${key}`;
  }
  return dispatch => {
    Axios.get(url)
      .then(result => {
        dispatch({
          type: ActionType.KEY_SEARCH,
          data: result.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

// PHIM
const actDanhSachPhim = (key) => {
  let url;
  if (key) {
    url = `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${key}`;
  } else {
    url = "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01";
  }
  return dispatch => {
    Axios.get(url)
      .then(result => {
        //console.log(result);
        dispatch({
          type: ActionType.FILM_LIST,
          data: result.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
const actDeleteFilm = (phim) => {
  console.log(phim);
  const url = `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${phim.maPhim}`
  return dispatch => {
    Axios.delete(url, config)
      .then(result => {
        dispatch({
          type : ActionType.FILM_DELETE,
          data : phim
        })
      })
      .catch(err => {
        alert(err.response.data)
      })
  }
}
const actAddFilm = (film, img) => {
  film.hinhAnh = img.name;
  console.log(film);
  const formData = new FormData()
  formData.append(
    'File',
    img,
    img.name
  )
  formData.append('tenPhim', film.tenPhim);
  formData.append('maNhom', film.maNhom);
  const url1 = "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim";
  const url2 = "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim";
  return dispatch => {
    Axios.post(url1, film, config)
    .then((res) => {
      dispatch({
        type: ActionType.ADD_FILM,
        data: res.data
      })
      return Axios.post(url2, formData, config);
    })
    .then((res) => {
      console.log(res);
      alert('Thêm phim thành công');
      window.location.reload();
    })
    .catch(err => {
      alert(err.response.data);
    })
  }
}
const actFilmEdit = film => {
  return dispatch => {
    dispatch({
      type: ActionType.FILM_EDIT,
      data: film
    })
  }
}
const actUpdateFilm = (film,img) => {
  console.log(img);
  if(img) {
  film.hinhAnh = img.name;
  console.log(film);
  const formData = new FormData()
  formData.append(
    'File',
    img,
    img.name
  )
  formData.append('tenPhim', film.tenPhim);
  formData.append('maNhom', film.maNhom);
  const url1 = "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim";
  const url2 = "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim";
  return dispatch => {
    Axios.post(url1, film, config)
      .then((res) => {
        dispatch({
          type : ActionType.FILM_UPDATE,
          data : res.data
        })
        console.log(res.data)
        return Axios.post(url2, formData, config);
      })
      .then((res) => {
        console.log(res);
        alert('Sửa thành công');
        window.location.reload();
      })
      .catch(err => {
        console.log(err)
      })
  }
}else {
  return dispatch => {
    alert('Vui lòng upload lại hình ảnh');
  }
}
}
const actTrailer = trailer => {
  return dispatch => {
    dispatch({
      type: ActionType.FILM_TRAILER,
      data: trailer
    })
  }
}

// HOME
const actSignUp = (user, history) => {
  const url = "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
  return dispatch => {
    Axios.post(url, user)
      .then(res => {
        alert("Đăng ký thành công");
        history.push("/sign-in");
      })
      .catch(e => {
        alert(e.response.data)
      })
  }
}
const actDangNhap = (user, history) => {
  console.log(user);
  return dispatch => {
    Axios({
      method: "POST",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
      data: user
    })
      .then(result => {
        if (result.data.maLoaiNguoiDung === "KhachHang") {
          localStorage.setItem("userGuest", JSON.stringify(result.data));
          //Chuyen link
          console.log(history);
          history.goBack();
        }
      })
      .catch(err => {
        dispatch({
          type: ActionType.VALIDATION_ADMIN,
          validation: "Wrong username or password",
        })
        console.log(err.response.data);
      });
  };
};
// Cụm rạp

const actHeThongRap = () => {
  const url = "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap";
  return dispatch => {
    Axios.get(url)
      .then(res => {
        dispatch({
          type: ActionType.HE_THONG_RAP,
          data: res.data
        })
      }
      )
      .catch(err => {
        console.log(err)
      })
  }
}
const actCumRap = (id) => {
  const url = `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01
  `;
  return dispatch => {
    Axios.get(url)
      .then(res => {
        dispatch({
          type: ActionType.CUM_RAP,
          data: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })

  }
}

// Đặt vé
const actLichChieu = (maLichChieu) => {
  const url = `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
  return dispatch => {
    Axios.get(url)
      .then(res => {
        console.log(res);
        dispatch({
          type: ActionType.DANH_SACH_GHE,
          data: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }
}
const actDatVe = (item, history) => {
  const userGuest = JSON.parse(localStorage.getItem('userGuest'));
  let userConfig =
  {
    headers: {
      Authorization: `Bearer ${userGuest.accessToken}`
    }
  }
  const url = "http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe";
  return dispatch => {
    Axios.post(url, item, userConfig)
      .then(res => {
        console.log(res);
        history.push('/');
      })
      .catch(err => {
        console.log(err)
      })
  }
}
const actThongTinPhim = id => {
  const url = `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`;
  return dispatch => {
    Axios.get(url)
      .then(res => {
        console.log(res);
        dispatch({
          type: ActionType.FILM_DETAIL,
          data: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
export { actThemNguoiDung, actLoginAdmin, actDanhSach, actDeleteND, actUpdateUser, actUserEdit, actSearch, actDanhSachPhim, actDeleteFilm, actAddFilm, actFilmEdit, actUpdateFilm, actSignUp, actDangNhap, actTrailer, actHeThongRap, actCumRap, actLichChieu, actDatVe, actThongTinPhim }