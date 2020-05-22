import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import notificationEffects from "../middlewares/notificationEffects";
import transactionEffects from "../middlewares/transactionEffects";
import reducers from "../reducers";
import thunk from "redux-thunk";

const customMiddleware = store => nextRunner => action => {
    console.log("미들웨어에 전달된 액션 객체", action); //nextRunner() 함수 전에 실행할 작업 1
    console.log("리듀서 실행 전", store.getState());
    const result = nextRunner(action);
    console.log("리듀서 실행 후", store.getState());
    return result;
}

const customMiddleware2 = store => nextRunner => action => {
    console.log("미들웨어2에 전달된 액션 객체", action);
    console.log("미들웨어2 실행 전", store.getState());
    const result = nextRunner(action);
    console.log("미들웨어2 실행 후", store.getState());
    return result;
}

export default initState => createStore(
    combineReducers(reducers),
    initState,
    composeWithDevTools(
        applyMiddleware(thunk, notificationEffects, transactionEffects),
    ),
);