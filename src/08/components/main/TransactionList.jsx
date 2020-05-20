import React, { PureComponent } from "react";
import Api from "../../Api";

import Heading from "../../../doit-ui/Heading";
import Card from "../../../doit-ui/Card";

import TransactionSearchFilterContainer from "../../containers/main/TransactionSearchFilterContainer";
import TransactionTable from "./TransactionTable";


class TransactionList extends PureComponent{
    state = {
        transaction: [],
    }

    componentDidMount() {
        Api.get("/transactions")
            .then(({ data }) => this.props.setTransactionList(data));
    }

    render() {
        const { transaction } = this.props;
        return(
            <div>
                <Heading level={3}>거래 현황</Heading>
                <Card vertical={4} horizontal={4}>
                    <TransactionSearchFilterContainer />
                </Card>
                <Card>
                    <TransactionTable transaction={transaction} />
                </Card>
            </div>
        );
    }
}

TransactionList.defaultProps = {
    transactions: [],
    setTransactionList: () => {},
};

export default TransactionList;