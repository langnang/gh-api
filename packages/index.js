import axios from "./../plugins/axios";
// import gh_auth from "./auth";
// import gh_comments from "./comments";
// import gh_issues from "./issues";
// import gh_project_columns from "./project_columns";
// import gh_projects from "./projects";
// import gh_repos from "./repos";
// import Apps from "./Apps/index";
import Emojis from "./Emojis/index";
import Issues from "./Issues/index";
// import OAuth from "./OAuth/index";

export const gh_apis = {
  // ...Apps,
  ...Emojis,
  ...Issues,
  // ...OAuth,
};

const gh_api = function(path = "", config) {
  // console.log(path, pathParams, token);

  if (!gh_apis[path]) {
    return Promise.reject(`Path Error: '${path}' not exist!!!`);
  }

  return gh_apis[path](config);

  // pathParams={}
  // const [owner, repo, issue_number, comment_id, project_id] = [
  //   path.owner,
  //   path.repo,
  //   path.issue_number,
  //   path.comment_id,
  //   path.project_id,
  // ];
  // return {
  //   issues: (path = {}) =>
  //     gh_issues({
  //       owner: path.owner || owner,
  //       repo: path.repo || repo,
  //     }),
  //   repos: (path = {}) => gh_repos({ owne: owner || path.owner }),
  //   oauth: () => gh_auth(),
  //   comments: (path = {}) =>
  //     gh_comments({
  //       owner: owner || path.owner,
  //       repo: repo || path.repo,
  //       issue_number: issue_number || path.issue_number,
  //       comment_id: comment_id || path.issue_number,
  //     }),
  //   project_columns: (path = {}) =>
  //     gh_project_columns({
  //       project_id: path.project_id || project_id,
  //     }),
  //   projects: (path = {}) =>
  //     gh_projects({
  //       owner: owner || path.owner,
  //       repo: repo || path.repo,
  //       project_id: path.project_id || project_id,
  //     }),
  // };
};
gh_api._axios = axios;
gh_api._list = gh_apis;

window.gh_api = gh_api;

export default gh_api;
