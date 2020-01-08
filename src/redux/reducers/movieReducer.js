import * as ActionType from './../constants/ActionType';
let initState = {
    danhSach: [],
    filmEdit: {},
    trailer: "",
    heThongRap: [],
    listCumRap: [],
    danhSachGhe: [],
    rapDetail : {},
    thongTinPhim: {}
}
const movieReducer = (state = initState, action) => {
    switch(action.type) {
        // ADMIN PAGES
        case ActionType.FILM_LIST: {
            state.danhSach = action.data;
            return {...state} 
        }
        case ActionType.ADD_FILM: {
            state.danhSach = [...state.danhSach, action.data];
            return {...state} 
        }
        case ActionType.FILM_DELETE : {
            let index = state.danhSach.findIndex(item => item.maPhim ===action.data.maPhim);
            let mang = [...state.danhSach];
            mang.splice(index,1);
            state.danhSach = mang;
            return {...state}
        }
        case ActionType.FILM_EDIT: {
            state.filmEdit = action.data;
            return {...state}
        }
        case ActionType.FILM_UPDATE: {
            let index = state.danhSach.findIndex(item => item.tenPhim ===action.data.tenPhim);
            state.danhSach[index] = action.data;
            return {...state}
        }
        // Home Pages
        case ActionType.FILM_TRAILER: {
            state.trailer = action.data;
            return {...state}
        }
        case ActionType.HE_THONG_RAP: {
            state.heThongRap = action.data;
            return {...state}
        }
        case ActionType.CUM_RAP: {
            state.listCumRap = action.data[0].lstCumRap;
            return {...state}
        }
        case ActionType.FILM_DETAIL: {
            state.thongTinPhim = action.data;
            return {...state}
        }

        // Đặt vé 
        case ActionType.DANH_SACH_GHE : {
            console.log(action.data);
            state.rapDetail = action.data.thongTinPhim;
            state.danhSachGhe = action.data.danhSachGhe;
            return {...state}
        }
        default : 
        return {...state}
    } 
}
export default movieReducer;