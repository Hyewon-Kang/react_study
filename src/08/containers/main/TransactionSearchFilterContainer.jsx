import { connect } from "react-redux";
import TransactionSerachFilter from "../../components/main/TransactionSearchFilter";
import { setTransactionList } from "../../actions/transactionActions";

export default connect(null, { setTransactionList })(TransactionSerachFilter);