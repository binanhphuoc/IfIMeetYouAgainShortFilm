import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import style from "./index.style";

import Navbar from "../../components/Navbar/Navbar";
import Poster from "../../components/Poster/Poster";

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

  onEnded = () => {
    this.setState({ navbarShown: true });
  }

  render() {
    const { classes } = this.props;
    const { navbarShown } = this.state;
    return (
      <div className={classes.root}>
        {navbarShown && (
          <Navbar
            classes={{ root: classes.navbar }}
            itemList={[{ title: "Story" }, { title: "Characters" }, { title: "Contact" }]}
          />
        )}
        <Poster onEnded={this.onEnded} />
      </div>
    );
  }
}

export default withStyles(style)(Home);
