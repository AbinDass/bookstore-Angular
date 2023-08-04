import { createAction, props } from "@ngrx/store";
import { cart } from "../../model/cartState";


export const cartRequest = createAction(
    '[cart] cartRequest',
)

export const cartSuccess = createAction(
    '[cart] cartSuccess',
    props<cart>()
)

export const cartFailure = createAction(
    '[cart] cartFailure',
    props<{error:string}>()
)