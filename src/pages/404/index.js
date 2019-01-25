import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import style from "./index.style";

class Home extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {"We're sorry. This page is not available."}
      </div>
    );
  }
}

export default withStyles(style)(Home);
