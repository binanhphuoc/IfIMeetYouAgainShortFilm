import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import style from "./index.style";

class Home extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      navbarShown: false,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <h1>We're sorry. This page is not available.</h1>
      </div>
    );
  }
}

export default withStyles(style)(Home);
