import React from 'react';
import { makeStyles, colors, Typography, Button } from '@material-ui/core';
import { VideoPlayerThumb } from 'components';
import config from 'config';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 300,
    border: `1px solid ${colors.blueGrey[500]}`,
    borderRadius: 5,
    width: '90%',
    margin: 'auto',
  },
  content: {
    width: '100%',
    maxWidth: 300,
    height: 200,
    borderTop: `1px solid ${colors.blueGrey[500]}`,
    borderBottom: `1px solid ${colors.blueGrey[500]}`,
    position: 'relative',
  },

  title: {
    margin: `${theme.spacing(1)}px`,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const AutomationExample = ({ id, title, video, thumbnail, ...rest }) => {
  const classes = useStyles();

  const onDetails = () => {
    window.open(`/projects/${id}`, '_blank');
  };

  return (
    <div className={classes.container}>
      <Typography className={classes.title} align="center" variant="h5">
        {title}
      </Typography>
      <div className={classes.content}>
        <VideoPlayerThumb
          video={config.AWS_S3_URL + video}
          thumbnail={config.AWS_S3_URL + thumbnail}
        />
      </div>

      <Button onClick={onDetails} fullWidth>
        Details
      </Button>
    </div>
  );
};

export default AutomationExample;
