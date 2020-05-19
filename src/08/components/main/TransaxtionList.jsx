import React, { PureComponent } from "react";

import Heading from "../../../doit-ui/Heading";
import Card from "../../../doit-ui/Card";

import TransactionSearchFilter from "./TransactionSearchFilter";
import TransactionTable from "./TransactionTable";

class TransactionList extends PureComponent{
    state = {
        transaction: [
            {
                id: "btx_01",
                name: "비트코인(BTX)",
                totalPrice: "123,123,000,000원",
                currentPrice: "4,200,000원",
                datetime: "2019/01/20 08:23:22",
            }
        ],
    }

    render() {
        const { transaction } = this.state;
        return(
            <div>
                <Heading level={3}>거래 현황</Heading>
                <Card vertical={4} horizontal={4}>
                    <TransactionSearchFilter />
                </Card>
                <Card>
                    <TransactionTable transaction={transaction} />
                </Card>
            </div>
        );
    }
}

export default TransactionList;