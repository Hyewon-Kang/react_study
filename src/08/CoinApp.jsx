import React, { PureComponent } from "react";
import { Provider } from "react-redux";

import AppLayout from "./components/AppLayout";
import CoinOverview from "./components/main/CoinOverview";
import TransactionList from "./components/main/TransactionList";
import congifureStore from "./store/configureStore";
import ModalProvider from "./ModalProvider";

class CoinApp extends PureComponent {
    store = congifureStore();

    render() {
        return (
            <Provider store={this.store}>
                <ModalProvider>
                    <AppLayout>
                        <CoinOverview />
                        <TransactionList />
                    </AppLayout>
                </ModalProvider>
            </Provider>
        );
    }
}

export default CoinApp;