import { createReducer, on } from '@ngrx/store';
import { User } from '../../model/userState.model';

import {
  loginRequested,
  loginSuccess,
  signupRequested,
  Failure,
  signupSuccess,
} from './auth.action';
export const initialState: User = {
  token: '',
  user: {
    fullname: '',
    email: '',
    phone: '',
  },
  isLoading: false,
  isLogin: false,
  error: '',
};

export const authReducer = createReducer(
  initialState,
  //login
  on(loginRequested, (state, action) => ({ ...state, isLoading: true })),

  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      token: action.token,
      isLoading: false,
      isLogin: true,
    };
  }),

  //sign up

  on(signupRequested, (state, action) => ({
    ...state,
    isLoading: true,
    isLogin: false,
  })),
  on(signupSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      token: action.token,
      isLoading: false,
      isLogin: true,
    };
  }),

  on(Failure, (state, action) => ({
    ...state,
    isLogin: false,
    isLoading: false,
    error: action.error,
  }))
);
