import { connect } from "react-redux";
import TradeCoinPage from "../../components/main/TradeCoinPage01";
import { createTransaction } from "../../actions/transactionActions";

export default connect(null, { createTransaction })(TradeCoinPage);