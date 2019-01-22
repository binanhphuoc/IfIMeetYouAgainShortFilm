import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import style from "./Button.style";

class Button extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    children: PropTypes.node,
  };

  static defaultProps = {
    children: "",
  }

  render() {
    const { children, classes } = this.props;
    return (
      <div className={classes.root}>
        {children}
      </div>
    );
  }
}

export default withStyles(style)(Button);
