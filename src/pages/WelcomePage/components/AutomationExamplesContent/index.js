import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import AutomationExample from '../AutomationExample';
import config from 'config';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    width: '90%',
    maxWidth: 1100,
    margin: `${theme.spacing(3)}px auto`,
  },
}));

const AutomationExamplesContent = () => {
  const classes = useStyles();

  const automations = [
    {
      id: '1',
      video: `${config.ASSET_VIDEO_URL}SimpleNodeRed.mp4`,
      thumbnail: `${config.ASSET_THUMBNAIL_URL}SimpleNodeRed.png`,
    },
    {
      id: '2',
      video: `${config.ASSET_VIDEO_URL}SimpleNodeRed.mp4`,
      thumbnail: `${config.ASSET_THUMBNAIL_URL}SimpleNodeRed.png`,
    },
    {
      id: '3',
      video: `${config.ASSET_VIDEO_URL}SimpleNodeRed.mp4`,
      thumbnail: `${config.ASSET_THUMBNAIL_URL}SimpleNodeRed.png`,
    },
  ];

  return (
    <div className={classes.container}>
      <Grid container justify="space-between" alignItems="center" spacing={4}>
        {automations.map((item) => (
          <Grid item sm={4} xs={4} key={item.id}>
            <AutomationExample {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AutomationExamplesContent;
