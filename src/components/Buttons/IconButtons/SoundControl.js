import React, { Component } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import SoundOnIcon from "../../Icons/SoundOn";
import SoundOffIcon from "../../Icons/SoundOff";

class SoundControl extends Component {
  static propTypes = {
    onSoundOn: PropTypes.func,
    onSoundOff: PropTypes.func,
    muted: PropTypes.bool,
  }

  static defaultProps = {
    onSoundOn: () => {},
    onSoundOff: () => {},
    muted: false,
  }

  onClick = () => {
    const { onSoundOff, onSoundOn, muted } = this.props;
    if (muted) {
      onSoundOn();
    } else {
      onSoundOff();
    }
  }

  iconFactory = () => {
    const { muted } = this.props;
    return muted ? <SoundOffIcon /> : <SoundOnIcon />;
  }

  render() {
    return (
      <IconButton onClick={this.onClick}>
        {this.iconFactory()}
      </IconButton>
    );
  }
}

export default SoundControl;
