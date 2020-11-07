import gh_issues from "./apis/issues/index";
import gh_repos from "./apis/repos/index";
import gh_auth from "./apis/auth/index";

const gh_api = function(path) {
  const _owner = path.owner;
  const _repo = path.repo;
  return {
    issues: (path) =>
      gh_issues({ owner: _owner || path.owner, repo: _repo || path.repo }),
    repos: (path) => gh_repos({ owne: _owner || path.owner }),
    oauth: () => gh_auth(),
  };
};

window.gh_api = gh_api;

export default gh_api;
