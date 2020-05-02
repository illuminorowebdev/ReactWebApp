import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import {
  Header,
  DescriptionContent,
  Footer,
  AutomationExamplesContent,
  AutomationCategoryContent,
} from './components';

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const WelcomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <Divider />
      <DescriptionContent />
      <AutomationExamplesContent />
      <Divider />
      <AutomationCategoryContent />
      <Divider />
      <Footer />
    </div>
  );
};

export default WelcomePage;
