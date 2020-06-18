import React, { useState, useEffect } from 'react';
import { makeStyles, Typography, Tooltip, Button } from '@material-ui/core';
import * as API from 'services/api';
import { Page, GlobalLoader } from 'components';
import useRouter from 'utils/useRouter';
import config from 'config';
import ReactPlayer from 'react-player';
import { getFileNameFromKey } from 'utils/utils';

const useStyles = makeStyles((theme) => ({
  container: {},
  content: {
    minHeight: 'calc(100vh - 300px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    margin: 'auto',
    maxWidth: 1100,
    padding: `${theme.spacing(3)}px 0`
  },
  thumbnail: {
    maxWidth: 300,
    maxHeight: 300,
    marginBottom: theme.spacing(2)
  },
  player: {
    width: '70% !important',
    height: 'auto !important',
    maxWidth: 500,
    marginBottom: theme.spacing(2)
  }
}));

const ProjectDetailsPage = (props) => {
  const [data, setData] = useState({
    details: null,
    loading: true
  });
  const router = useRouter();
  const classes = useStyles();

  useEffect(() => {
    const {
      params: { id: projectId }
    } = router.match;
    if (projectId) {
      API.getProject(projectId)
        .then((res) => {
          setData({
            details: res,
            loading: false
          });
        })
        .catch((err) => {
          setData({
            details: null,
            loading: false
          });
        });
    } else {
      router.history.push('/');
    }
  }, []);

  const onDownload = () => {
    const payload = {
      data: [data.details.source]
    };
    setData((prevData) => ({
      ...prevData,
      loading: true
    }));
    API.createPublicSignedUrls(payload).then((res) => {
      setData((prevData) => ({
        ...prevData,
        loading: false
      }));
      window.open(res[0], '_blank');
    });
  };

  return (
    <Page title={data.details ? data.details.title : 'Project Details'}>
      <div className={classes.content}>
        {data.loading && <GlobalLoader />}
        {data.details && (
          <>
            <Typographyparagraph variant="h4">
              {data.details.title}
            </Typographyparagraph>
            <Typography paragraph>{data.details.description}</Typography>

            <Typography>Thumbnail Image</Typography>
            <img
              alt="thumbnail"
              className={classes.thumbnail}
              src={config.AWS_S3_URL + data.details.thumbnail}
            />

            <Typography>Video</Typography>
            <ReactPlayer
              className={classes.player}
              controls
              url={config.AWS_S3_URL + data.details.video}
            />

            <Typography>Source Code</Typography>
            <Tooltip title="Click to download source code">
              <Button onClick={onDownload} variant="outlined">
                {getFileNameFromKey(data.details.source)}
              </Button>
            </Tooltip>
          </>
        )}
        {!data.loading && !data.details && (
          <div>
            <Typography color="error" variant="h5">
              Project Not Found
            </Typography>
          </div>
        )}
      </div>
    </Page>
  );
};

export default ProjectDetailsPage;
