import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class TableBody extends PureComponent{
    render() {
        const { children } = this.props;
        const { length } = React.Children.toArray(children);

        return (
            <thead>
                {React.Children.map(children, (child, index) => {
                    const baseline = index < length -1 ? true: false;
                    return React.cloneElement(child, { baseline })
                 })}
            </thead>
        );
    }
}

TableBody.propTypes = {
    children: PropTypes.node
};

export default TableBody;