import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import WelcomeLayout from 'layouts/WelcomeLayout';
import ProjectDetailsPage from 'pages/ProjectDetailsPage';
import { WelcomePage } from 'pages';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/welcome" />,
  },
  {
    path: '/welcome',
    component: WelcomeLayout,
    routes: [
      {
        component: () => <WelcomePage />,
      },
    ],
  },
  {
    path: '/projects',
    component: WelcomeLayout,
    routes: [
      { path: '/projects/:id', exact: true, component: ProjectDetailsPage },
      {
        component: () => <Redirect to="/welcome" />,
      },
    ],
  },
];

export default routes;
