import { USER } from "../../api/api";

// 초기값 설정
const initialStete = {
  loginCheck: false,
  Email: '',
  JWT: ''
}

// 액션 타입 만들기
const IS_LOGIN = "login/IS_LOGIN";
const USER_EMAIL = "login/USER_EMAIL";
const USER_JWT = "login/USER_JWT";

// 액션 함수 만들기
export const isLogin = () => ({type: IS_LOGIN});
export const userEmail = email => ({type: USER_EMAIL, email});
export const userJWT = jwt => ({type: USER_JWT, jwt});

// 리듀서 선언
export default function login (state = initialStete, action) {
  switch (action.type) {
    case IS_LOGIN:
      return {
        ...state,
        loginCheck: !state.loginCheck
      }
    case USER_EMAIL:
      return {
        ...state,
        Email: action.email
      }
    case USER_JWT:
      return {
        ...state,
        JWT: action.jwt
      }
    default :
      return state
  }
}
