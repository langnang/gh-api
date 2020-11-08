import gh_issues from "./apis/issues";
import gh_repos from "./apis/repos";
import gh_auth from "./apis/auth";
import gh_comments from "./apis/comments";

const gh_api = function(path = {}) {
  const [_owner, _repo, _issue_number, _comment_id] = [
    path.owner,
    path.repo,
    path.issue_number,
    path.comment_id,
  ];
  return {
    issues: (path = {}) =>
      gh_issues({ owner: _owner || path.owner, repo: _repo || path.repo }),
    repos: (path = {}) => gh_repos({ owne: _owner || path.owner }),
    oauth: () => gh_auth(),
    comments: (path = {}) =>
      gh_comments({
        owner: _owner || path.owner,
        repo: _repo || path.repo,
        issue_number: _issue_number || path.issue_number,
        comment_id: _comment_id || path.issue_number,
      }),
  };
};

window.gh_api = gh_api;

export default gh_api;
