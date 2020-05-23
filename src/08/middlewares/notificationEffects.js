import { SET_ERROR } from "../actions/transactionActions";
import { SHOW_NOTIFICATION, showMessage, hideMessage } from "../actions/NotificationActions";
import { debounce } from "../../02/debounce";
import { KEY, LIFECYCLE } from "redux-pack";
import { FETCH_TRANSACTION_LIST } from "../actions/transactionPackActions";

const debounceRunner = debounce(action => action(), 4000);

export default store => nextRunner => action => {
    const { type, payload, meta } = action;
    if( type === SET_ERROR) {
        const { errorMessage } = payload;
        store.dispatch(showMessage(errorMessage, true));
    }
    else if(type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.FAILURE) {
        const { errorMessage } = payload.response.data || {};
        store.dispatch(showMessage(errorMessage, true));
    }
    else if(type === FETCH_TRANSACTION_LIST && meta[KEY.LIFECYCLE] === LIFECYCLE.SUCCESS) {
        const message = "거래 목록을 최신으로 업데이트했습니다.";
        store.dispatch(showMessage(message));
    }
    return nextRunner(action);
}