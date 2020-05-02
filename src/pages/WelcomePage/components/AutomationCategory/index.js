import React from 'react';
import { makeStyles, colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    maxWidth: 250,
    minHeight: 150,
    border: `1px solid ${colors.blueGrey[500]}`,
  },
}));

const AutomationCategory = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      Link to automation featured category
    </div>
  );
};

export default AutomationCategory;
