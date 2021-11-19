import { createAction } from "redux-actions";

// 액션 타입 만들기
export const SAMPLE_ACTION = 'auth/SAMPLE_ACTION';

export const sampleAction = createAction(SAMPLE_ACTION);