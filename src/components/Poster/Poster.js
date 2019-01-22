import React, { Component } from "react";
import PropTypes from "prop-types";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import VideoPoster from "./VideoPoster/VideoPoster";
import Particles from "../Particles/Particles";
import video from "../../resources/poster/teaser.mp4";
import poster from "../../resources/poster/poster.jpg";

class Poster extends Component {
  static propTypes = {
    onEnded: PropTypes.func,
  }

  static defaultProps = {
    onEnded: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      ended: false,
    };
  }

  onEnded = () => {
    const { onEnded } = this.props;
    this.setState({ ended: true });
    onEnded();
  }

  render() {
    const { ended } = this.state;
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionAppearTimeout={2000}
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={2000}
        >
          {!ended && (
            <VideoPoster
              key="VideoPoster"
              url={video}
              onEnded={this.onEnded}
            />
          )}
          {ended && <img style={{ position: "absolute", left: 0 }} alt="" key="img" width="100%" src={poster} />}
        </ReactCSSTransitionGroup>
        {ended && <Particles />}
      </div>
    );
  }
}

export default (Poster);
