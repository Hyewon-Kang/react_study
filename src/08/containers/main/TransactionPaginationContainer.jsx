import { connect } from "react-redux";
import TransactionPagination from "../../components/main/TransactionPagination";
import { 
    requestTransactionList,
    FETCH_TRANSACTION_LIST,
 } from "../../actions/transactionPackActions";

const mapStateToProps = state => {
    const { pagination, loadingState } = state.transaction;
    const loading = loadingState[FETCH_TRANSACTION_LIST];
    const { number } = pagination;

    return { pageNumber: number || 1, loading };
}

const mapDispatchToProps = {
    requestTransactionList
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionPagination);