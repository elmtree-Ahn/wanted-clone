import {handleActions} from 'redux-actions'
import {SAMPLE_ACTION} from '../actions/auth'

// 초기 상태값 설정
const initialState = {};


// 리듀서 설정
const auth = handleActions(
  {
    [SAMPLE_ACTION]: (state, action) => state,
  },
  initialState,
);

export default auth;