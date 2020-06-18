import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { Logo } from 'components';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`
  },
  button: {
    borderRadius: theme.spacing(1.5)
  },
  logo: {
    cursor: 'pointer'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <NavLink to="/">
        <Logo className={classes.logo} />
      </NavLink>

      <div className={classes.button}>
        <Button className={classes.button} variant="outlined">
          Mission Statement
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button className={classes.button} variant="outlined">
          Automation Repo
        </Button>
      </div>
    </div>
  );
};

export default Header;
