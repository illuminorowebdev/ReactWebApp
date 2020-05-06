const SERVER_URL = process.env.REACT_APP_SERVER_URL;
const API_URL = `${SERVER_URL}v1/`;
const AWS_S3_URL = process.env.REACT_APP_AWS_S3_END_POINT;

//
const ASSET_URL = `${SERVER_URL}illuminoro-assets/`;
const ASSET_VIDEO_URL = `${ASSET_URL}video/`;
const ASSET_IMAGE_URL = `${ASSET_URL}image/`;
const ASSET_THUMBNAIL_URL = `${ASSET_URL}thumbnail/`;
//

export default {
  SERVER_URL,
  API_URL,
  AWS_S3_URL,
  //
  ASSET_URL,
  ASSET_VIDEO_URL,
  ASSET_IMAGE_URL,
  ASSET_THUMBNAIL_URL,
  //
};
