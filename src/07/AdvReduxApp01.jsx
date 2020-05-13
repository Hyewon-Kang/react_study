import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import configureStore from "./configureStore";

class AdvReduxApp extends PureComponent {
    store = configureStore({ loading: false });

    render() {
      return <Provider store={this.store}>AdvRedux 예제</Provider>;
    }
  }
  
  export default AdvReduxApp;