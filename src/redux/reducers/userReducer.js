import * as ActionType from './../constants/ActionType';
let initState = {
    validation: "",
    danhSach: [],
    userEdit: null
};
const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.VALIDATION_ADMIN:
            state.validation = action.validation;
            return { ...state };
        case ActionType.MEMBER_LIST: {
            state.danhSach = action.data;
            return { ...state };
        }
        case ActionType.ADD_USER: {
            // state.danhSach.push(action.data);
            state.danhSach = [...state.danhSach, action.data];
            return { ...state };
        }
        case ActionType.DELETE_USER : {
            let index = state.danhSach.findIndex(item => item.taiKhoan === action.data.taiKhoan);
            let mang = [...state.danhSach];
            if(index!==-1) {
                mang.splice(index,1);
                state.danhSach = mang;
            }
            return {...state}
        }
        case ActionType.USER_EDIT:{
            state.userEdit = action.data;
            return { ...state };
        }
        case ActionType.USER_UPDATE : {
            console.log(action.data);
            let index = state.danhSach.findIndex(item => item.taiKhoan === action.data.taiKhoan);
            let mang = [...state.danhSach];
            if(index !==-1) {
            mang[index] = action.data;
            state.danhSach = mang;
            }
            return {...state};
        }
        case ActionType.KEY_SEARCH:{
            state.danhSach = action.data;
            return { ...state };
        }
        default:
            return { ...state };
    }
}
export default movieReducer;