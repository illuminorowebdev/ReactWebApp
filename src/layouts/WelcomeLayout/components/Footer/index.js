import React from 'react';
import { makeStyles, colors } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  container: {},
  content: {
    minHeight: 100,
  },
  socialButtons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    maxWidth: 500,
    margin: 'auto',
    paddingBottom: theme.spacing(2.5),
  },
  iconButton: {
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.app.grey}`,
  },
  icon: {
    fontSize: '1.2rem',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.content} />
      <div className={classes.socialButtons}>
        <IconButton className={classes.iconButton}>
          <MailIcon className={classes.icon} />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <LinkedInIcon className={classes.icon} />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <InstagramIcon className={classes.icon} />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <TwitterIcon className={classes.icon} />
        </IconButton>
        <IconButton className={classes.iconButton}>
          <FacebookIcon className={classes.icon} />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
