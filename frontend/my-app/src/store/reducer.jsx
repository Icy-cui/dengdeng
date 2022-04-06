const LOGIN  = 'LOGIN';

const defaultState = {isLogin: false};

export default function(state=defaultState, action){
    // 登录状态的切换
    switch (action.type){
        case LOGIN:
            // islogin = ..
            return {isLogin: action.isLogin};
        default:
            return state;
    }
}