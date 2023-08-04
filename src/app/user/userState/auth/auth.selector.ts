import { createSelector } from "@ngrx/store";
import { appStateInterface } from "src/app/appStore/appState";

export const userAuth = (state: appStateInterface) => state.userAuthentication;
export const tokenSelector = createSelector(userAuth,(state)=> state.token)
export const registerData = createSelector(userAuth,(state) => state.user)
export const idSelector = createSelector(userAuth,(state) => state.user)