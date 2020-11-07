import gh_issues from "./apis/issues/index";
import gh_repos from "./apis/repos/index";
import gh_auth from "./apis/auth/index";
const gh_api = function({ owner, repo }) {
  return {
    issues: gh_issues({ owner, repo }),
    repos: gh_repos({ owner }),
    oauth: gh_auth(),
  };
};
export default gh_api;
