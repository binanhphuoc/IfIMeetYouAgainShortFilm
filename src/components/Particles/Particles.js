import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Particles from "react-particles-js";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import style from "./Particles.style";

import Config from "./particlesjs-config";

class Effect extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
  }

  render() {
    const { classes } = this.props;
    return (
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear
        transitionAppearTimeout={2000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Particles
          className={classes.root}
          params={Config}
        />
      </ReactCSSTransitionGroup>
    );
  }
}

export default withStyles(style)(Effect);
