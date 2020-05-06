import React, { useEffect, useState } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import AutomationExample from '../AutomationExample';
import * as API from 'services/api';
import { SubLoader } from 'components';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: `${theme.spacing(2)}px ${theme.spacing(2)}px`,
    margin: `${theme.spacing(3)}px auto`,
    position: 'relative',
    minHeight: 200,
  },
  content: {
    width: '90%',
    maxWidth: 1100,
    margin: 'auto',
  },
}));

const AutomationExamplesContent = () => {
  const classes = useStyles();
  const [data, setData] = useState({
    projects: [],
    loading: true,
  });

  useEffect(() => {
    API.listProjects({
      page: 1,
      perPage: 6,
    })
      .then((res) => {
        setData({
          loading: false,
          projects: res.projects,
        });
      })
      .catch((err) => {
        setData((prevData) => ({
          ...prevData,
          loading: false,
        }));
      });
  }, []);

  return (
    <div className={classes.container}>
      {data.loading && <SubLoader />}
      <div className={classes.content}>
        <Grid container justify="space-between" alignItems="center" spacing={4}>
          {data.projects.map((item) => (
            <Grid item sm={4} xs={4} key={item.id}>
              <AutomationExample {...item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default AutomationExamplesContent;
