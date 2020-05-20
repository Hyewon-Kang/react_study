export const SET_TRANSACTION_LIST = "transaction/SET_TRANSACTION_LIST";

export function setTransactionList(transaction) {
    return{
        type: SET_TRANSACTION_LIST,
        payload: transaction,
    };
}