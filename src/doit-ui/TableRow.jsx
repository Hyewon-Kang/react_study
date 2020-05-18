import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TableRow extends PureComponent{
    render() {
        const { children, isHeader, baseline } = this.props;

        return (
            <thead>
                {React.Children.map(children, child => 
                    React.cloneElement(child, { baseline, isHeader }) 
                )}
            </thead>
        );
    }
}

TableRow.propTypes = {
    children: PropTypes.node,
    baseline: PropTypes.bool,
    isHeader: PropTypes.bool
};

export default TableRow;