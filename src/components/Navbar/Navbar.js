import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import style from "./Navbar.style";
import LuxuryButton from "../Buttons/TextButtons/Luxury/Button";

class TodoList extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    itemList: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.strings,
      onClick: PropTypes.func,
    })),
  };

  static defaultProps = {
    itemList: [],
  }

  render() {
    const { itemList, classes } = this.props;
    const items = itemList.map(item => (
      <LuxuryButton key={item.title} onClick={item.onClick}>
        {item.title}
      </LuxuryButton>
    ));
    return (
      <ReactCSSTransitionGroup
        className={classes.root}
        transitionName="fade"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}
      >
        {items}
      </ReactCSSTransitionGroup>
    );
  }
}

export default withStyles(style)(TodoList);
