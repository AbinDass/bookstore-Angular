import { createAction, props } from '@ngrx/store';
import { User, UserModel } from '../../model/userState.model';

export const loginRequested = createAction(
  '[Auth] loginRequested',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] loginSuccess',
  props<{
    token: string;
    user: {
      fullname: string;
      email: string;
      phone: string;
    };
  }>()
);

export const Failure = createAction(
  '[Auth] loginFail',
  props<{ error: string }>()
);

//sign

export const signupRequested = createAction(
  '[Auth] signupRequested',
  props<UserModel>()
);

export const signupSuccess = createAction(
  '[Auth] signupSuccess',
  props<User>()
);

export const signupFailure = createAction(
  '[Auth] signupFailure',
  props<{
    error: string;
  }>()
);
