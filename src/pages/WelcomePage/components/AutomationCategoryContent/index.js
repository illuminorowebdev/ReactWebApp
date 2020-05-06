import React from 'react';
import { makeStyles, Grid, colors } from '@material-ui/core';
import AutomationCategory from '../AutomationCategory';
import config from 'config';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    width: '90%',
    maxWidth: 1100,
    margin: `${theme.spacing(3)}px auto`,
  },
  top: {
    border: `1px solid ${colors.grey[500]}`,
    minHeight: 30,
    maxWidth: 400,
    width: '100%',
    padding: theme.spacing(2),
    margin: `auto`,
    marginBottom: theme.spacing(6),
    textAlign: 'center',
  },
}));

const AutomationCategoryContent = () => {
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
      <div className={classes.top}>Below the fold</div>
      <Grid container justify="space-between" alignItems="center" spacing={4}>
        {automations.map((item) => (
          <Grid item sm={4} xs={4} key={item.id}>
            <AutomationCategory {...item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AutomationCategoryContent;
