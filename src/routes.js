import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import WelcomeLayout from 'layouts/WelcomeLayout';

const routes = [
  {
    path: '/',
    exact: true,
    component: WelcomeLayout,
  },
];

export default routes;
