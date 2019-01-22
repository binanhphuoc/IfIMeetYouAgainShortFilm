import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ReactPlayer from "react-player";
import style from "./VideoPoster.style";

import SoundControlButton from "../../Buttons/IconButtons/SoundControl";

class VideoPoster extends Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
    onEnded: PropTypes.func,
    url: PropTypes.string.isRequired,
  }

  static defaultProps = {
    onEnded: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      muted: true,
    };
  }

  onEnded = (state) => {
    const { played } = state;
    if (played >= 0.95) {
      const { onEnded } = this.props;
      onEnded();
    }
  }

  render() {
    const { classes, url } = this.props;
    const { muted } = this.state;
    return (
      <div>
        <div className={classes.videoController}>
          <SoundControlButton
            onSoundOn={() => { this.setState({ muted: false }); }}
            onSoundOff={() => { this.setState({ muted: true }); }}
            muted={muted}
          />
        </div>
        <ReactPlayer
          url={url}
          playing
          muted={muted}
          onProgress={this.onEnded}
          width="100%"
          height="100vh"
        />
      </div>
    );
  }
}

export default withStyles(style)(VideoPoster);
