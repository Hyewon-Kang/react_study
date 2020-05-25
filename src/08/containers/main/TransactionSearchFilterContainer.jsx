import { connect } from "react-redux";
import TransactionSerachFilter from "../../components/main/TransactionSearchFilter";

const mapStateToProps = state => ({
    initValues: state.searchFilter.params,
})

export default connect(mapStateToProps)(TransactionSerachFilter);