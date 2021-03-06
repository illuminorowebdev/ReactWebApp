import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'classnames';
import { makeStyles } from '@material-ui/core';

const LOGO_IMG = require('assets/images/logo.png');

const useStyles = makeStyles((theme) => ({
  container: {
    height: 50
  },
  logo: {
    height: '100%'
  }
}));

const Logo = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.container, className)} {...rest}>
      <img alt="logo" className={classes.logo} src={LOGO_IMG} />
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.any
};

Logo.defaultProps = {
  className: null
};

export default Logo;
