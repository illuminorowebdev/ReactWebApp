import React from 'react';
import { makeStyles, Button, colors } from '@material-ui/core';
import { Logo } from 'components';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
  },
  button: {
    borderRadius: theme.spacing(1.5),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.button}>
        <Button variant="outlined" className={classes.button}>
          Mission Statement
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="outlined" className={classes.button}>
          Automation Repo
        </Button>
      </div>
    </div>
  );
};

export default Header;
