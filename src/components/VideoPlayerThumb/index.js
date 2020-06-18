import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'classnames';
import { makeStyles, Modal, fade, IconButton } from '@material-ui/core';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  thumbnail: {
    width: '100%',
    height: '100%'
  },
  buttonWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.4s',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: fade(theme.palette.app.secondary, 0.3),
      '& svg': {
        color: 'white'
      }
    }
  },
  icon: {
    width: 60,
    height: 60,
    transition: '0.4s',
    color: theme.palette.app.grey
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  content: {
    position: 'relative'
  },
  player: {
    width: 'auto !important',
    height: 'auto !important',
    maxWidth: '100%'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.app.danger
  }
}));

const VideoPlayerThumb = ({ className, video, thumbnail }) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible((visible) => !visible);
  };
  return (
    <>
      <div className={clsx(classes.container, className)} onClick={toggleModal}>
        <img alt="thumbnail" className={classes.thumbnail} src={thumbnail} />
        <div className={classes.buttonWrapper}>
          <PlayCircleOutlineIcon className={classes.icon} />
        </div>
      </div>
      {visible && (
        <Modal onClose={toggleModal} open={visible}>
          <div className={classes.modal}>
            <div className={classes.content}>
              <ReactPlayer
                className={classes.player}
                controls
                playing
                url={video}
              />
              <IconButton className={classes.closeButton} onClick={toggleModal}>
                <CancelIcon />
              </IconButton>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

VideoPlayerThumb.propTypes = {
  className: PropTypes.any,
  video: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
};

VideoPlayerThumb.defaultProps = {
  className: null
};

export default VideoPlayerThumb;
