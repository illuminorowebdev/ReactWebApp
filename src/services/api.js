import { postData, getData, deleteData, patchData, putData } from './base';

const apiEndPoints = {
  projects: 'projects/',
  createPublicSignedUrls: 'projects/public-s3-urls',
};

export const listProjects = (query) =>
  new Promise((resolve, reject) => {
    getData(apiEndPoints.projects, { params: query })
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });

export const getProject = (id) =>
  new Promise((resolve, reject) => {
    getData(apiEndPoints.projects + id)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });

export const createPublicSignedUrls = (payload) =>
  new Promise((resolve, reject) => {
    postData(apiEndPoints.createPublicSignedUrls, payload)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });
