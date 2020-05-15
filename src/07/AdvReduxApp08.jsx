import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import configuerStore from "./configureStore";

import ContainerComponent from "./container/ContainerComponent";
import PresentationComponent from "./PresentationComponent";
import DispatchContainer from "./container/DispatchContainer03";

class AdvReduxApp extends PureComponent {
    store = configuerStore({ loading: false });

    render() {
        return(
            <Provider store={this.store}>
                화면 컴포넌트: <PresentationComponent userName="화면 컴포넌트" />
                <br />
                데이터 컴포넌트: <ContainerComponent id={2} />
                <br />
                최종 액션 데이터 컴포넌트: <DispatchContainer />
            </Provider>
        );
    }
}

export default AdvReduxApp;