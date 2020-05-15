import {connect } from "react-redux";
import AcionComponent from "../ActionComponent02";
import { setLoading, resetLoading } from "../actions/loadingActions";
import { setUser } from "../actions/userAction";
import { setCollection, setAge } from "../actions/collectionActions";
import ActionComponent from "../ActionComponent01";

const mapDispatchToProps = {
    setLoading,
    resetLoading,
    setUser,
    setAge,
    setCollection,
};

export default connect(null, mapDispatchToProps)(ActionComponent);