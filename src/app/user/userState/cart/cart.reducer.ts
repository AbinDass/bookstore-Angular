import { createReducer, on } from "@ngrx/store";
import { cart } from "../../model/cartState";
import { cartFailure, cartRequest, cartSuccess } from "./cart.action";

const initialState:cart = {
    count: 0,
    title:'',
    subtitle:'',
    price:'',
    isbn13:'',
    image:'',
    url:'',
    quantity:1,
    isLoading: false,
    error: '',
}

export const cartReducer = createReducer(
    initialState,
    on(cartRequest, (state, action) => ({...state, isLoading:true,error:''})),
    on(cartSuccess, (state, action) => {
        return {...state, cart:action,isLoading:false,error:''}
    }),
    on(cartFailure, (state, action) => ({...state, isLoading:false, error:action.error})),
)