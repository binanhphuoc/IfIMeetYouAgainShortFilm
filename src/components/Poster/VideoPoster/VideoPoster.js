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

  onEnded = () => {
    const { onEnded } = this.props;
    onEnded();
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
          onEnded={this.onEnded}
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}

export default withStyles(style)(VideoPoster);
