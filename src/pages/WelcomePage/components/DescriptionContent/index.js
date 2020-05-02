import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    backgroundImage: `url(/images/background.jpg)`,
    height: '65vw',
    maxHeight: 715,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    maxWidth: 1100,
    margin: 'auto',
  },
  commentWrapper: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    marginRight: 'auto',
    maxWidth: '50vw',
    width: '50%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
  },
  comment: {
    fontSize: 22,
    lineHeight: '26px',
    fontWeight: 'bold',
    color: theme.palette.app.primary,
  },
}));

const DescriptionContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.commentWrapper}>
        <Typography variant="body1" className={classes.comment}>
          Illuminoro aims to accelerate the pace of automation whilst ensuring
          the delivery vehicles are highly secured.
          <br />
          <br /> Automation backed by a managed services arm of engineers
          allowing optimized and steady state run time environments.
          {/* <br />
          <br />
          In our infancy our portal provides example automation using the
          Node-Red flow based automation engine with examples spanning:
          <br />
          -Cisco Collaboration
          <br />
          -Cisco Cyber Security
          <br />
          -Internet of Things
          <br />
          <br />
          In a soon to be released secondary edition our portal will provide an
          open-sourced flow based editior rooted in serverless technologies. The
          portal will in addition foster accelerated innovation via a community
          of developer contributions fueled by revenue streams to the creators
          of individual components. */}
        </Typography>
      </div>
    </div>
  );
};

export default DescriptionContent;
