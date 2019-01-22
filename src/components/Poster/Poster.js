import React, { Component } from "react";
import PropTypes from "prop-types";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import VideoPoster from "./VideoPoster/VideoPoster";
import Particles from "../Particles/Particles";
// import video from "../../resources/poster/teaser.mp4";
// import poster from "../../resources/poster/poster.jpg";

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
              url="https://dai.ly/x713k17"
              onEnded={this.onEnded}
            />
          )}
          {ended
            && (
              <img
                style={{ position: "absolute", left: 0 }}
                alt=""
                key="img"
                width="100%"
                src="https://firebasestorage.googleapis.com/v0/b/ifimeetyouagain-shortfilm.appspot.com/o/ShortTeaser%2Fposter.jpg?alt=media&token=c2fa074a-28e0-49f8-b019-a36b8081354d"
              />
            )
          }
        </ReactCSSTransitionGroup>
        {ended && <Particles />}
      </div>
    );
  }
}

export default (Poster);
