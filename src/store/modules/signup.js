// 초기값 설정
const initialSate = {
  onOff: false,
}

// 액션 타입 만들기
const SIGNUP_ONOFF = "modal/SIGNUP_ONOFF";


// 액션 생성함수 만들기
export const signupOnOff = () => ({type: SIGNUP_ONOFF});


// 리듀서 선언
export default function modal(state = initialSate, action) {
  switch (action.type) {
    case SIGNUP_ONOFF:
      return {
        ...state,
        onOff: !state.onOff
      };
    default:
      return state;
  }
}