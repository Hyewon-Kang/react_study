import React, { PureComponent } from "react";

import Heading from "../../../doit-ui/Heading";
import Card from "../../../doit-ui/Card";

import TransactionSearchFilterContainer from "../../containers/main/TransactionSearchFilterContainer";
import TransactionTable from "./TransactionTable";
import TransactionPaginationContainer from "../../containers/main/TransactionPaginationContainer";
import TransactionPagination from "./TransactionPagination";


class TransactionList extends PureComponent{
    state = {
        transaction: [],
    }

    componentDidMount() {
        this.props.requestTransactionList();
    }

    render() {
        const { transaction, loading } = this.props;
        return(
            <div>
                <Heading level={3}>거래 현황</Heading>
                <Card vertical={4} horizontal={4}>
                    <TransactionSearchFilterContainer />
                </Card>
                <Card>
                    <TransactionTable transaction={transaction} isLoading={loading} />
                </Card>
                <TransactionPaginationContainer />
            </div>
        );
    }
}

TransactionList.defaultProps = {
    transactions: [],
    requestTransactionList: () => {},
};

export default TransactionList;