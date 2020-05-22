import { connect } from "react-redux";
import TransactionSerachFilter from "../../components/main/TransactionSearchFilter";
import { requestTransactionList } from "../../actions/transactionActions";

export default connect(null, { requestTransactionList })(TransactionSerachFilter);