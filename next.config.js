require('dotenv').config();

module.exports = {
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    BASE_BRANCH: 'main', // process.env.BASE_BRANCH,
  },
  // ...
};
