import { connect } from "react-redux";
import TransactionSerachFilter from "../../components/main/TransactionSearchFilter";
import { requestTransactionList } from "../../actions/transactionPackActions";
import { setFilter } from "../../actions/searchFilterActions";

export default connect(null, { requestTransactionList, setFilter })(TransactionSerachFilter);