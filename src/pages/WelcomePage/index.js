import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import {
  DescriptionContent,
  AutomationExamplesContent,
  AutomationCategoryContent,
} from './components';
import { Page } from 'components';

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const WelcomePage = () => {
  const classes = useStyles();
  return (
    <Page title="Welcome" className={classes.container}>
      <DescriptionContent />
      <AutomationExamplesContent />
      <Divider />
      <AutomationCategoryContent />
    </Page>
  );
};

export default WelcomePage;
