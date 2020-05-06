import React from 'react';
import { makeStyles, colors } from '@material-ui/core';
import { VideoPlayerThumb } from 'components';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    maxWidth: 250,
    height: 200,
    border: `1px solid ${colors.blueGrey[500]}`,
    position: 'relative',
  },
}));

const AutomationCategory = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <VideoPlayerThumb {...props} />
    </div>
  );
};

export default AutomationCategory;
