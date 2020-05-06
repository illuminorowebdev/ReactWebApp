import React, { Suspense } from 'react';
import { renderRoutes } from 'react-router-config';
import { Header, Footer } from './components';
import { Divider, LinearProgress } from '@material-ui/core';

const WelcomeLayout = ({ route }) => {
  return (
    <>
      <Header />
      <Divider />
      <Suspense fallback={<LinearProgress />}>
        {renderRoutes(route.routes)}
      </Suspense>
      <Divider />
      <Footer />
    </>
  );
};

export default WelcomeLayout;
