import Api from "../Api";
import { showMessage } from "./NotificationActions";

export const LOADING_TRANSACTION_LIST = "transaction/LOADING_TRANSACTION_LIST";
export const SET_TRANSACTION_LIST = "transaction/SET_TRANSACTION_LIST";
export const SET_ERROR = "transaction/SET_ERROR";
export const TRADE_COMPLETE = "transaction/TRADE_COMPLETE";

export function tradeComplete() {
    return { type: TRADE_COMPLETE };
}

export function createTransaction(data, onComplete) {
    return dispatch =>
        Api.post("/transaction", data).then(
            ({ data }) => {
                dispatch(tradeComplete());
                onComplete();
            },
            error => dispatch(setError(error.response.data.errorMessage)),
        );
}

export function setTransactionList(transaction) {
    return{
        type: SET_TRANSACTION_LIST,
        payload: transaction,
    };
}

export function requestTransactionList(params) {
    return dispatch => {
        dispatch(loading());
        Api.get("/transactions").then(
            ({ data }) => dispatch(setTransactionList(data)),
            error => {
                dispatch(setError(error.response.data.errorMessage));
            },
        );
    }
        
}

export function loading() {
    return {
        type: LOADING_TRANSACTION_LIST,
    };
}

export function setError(errorMessage) {
    return {
        type: SET_ERROR,
        payload: { errorMessage },
    }
}
