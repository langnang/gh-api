import gh_auth from "./apis/auth";
import gh_comments from "./apis/comments";
import gh_issues from "./apis/issues";
import gh_project_columns from "./apis/project_columns";
import gh_projects from "./apis/projects";
import gh_repos from "./apis/repos";

const gh_api = function(path = {}) {
  const [owner, repo, issue_number, comment_id, project_id] = [
    path.owner,
    path.repo,
    path.issue_number,
    path.comment_id,
    path.project_id,
  ];
  return {
    issues: (path = {}) =>
      gh_issues({
        owner: path.owner || owner,
        repo: path.repo || repo,
      }),
    repos: (path = {}) => gh_repos({ owne: owner || path.owner }),
    oauth: () => gh_auth(),
    comments: (path = {}) =>
      gh_comments({
        owner: owner || path.owner,
        repo: repo || path.repo,
        issue_number: issue_number || path.issue_number,
        comment_id: comment_id || path.issue_number,
      }),
    project_columns: (path = {}) =>
      gh_project_columns({
        project_id: path.project_id || project_id,
      }),
    projects: (path = {}) =>
      gh_projects({
        owner: owner || path.owner,
        repo: repo || path.repo,
        project_id: path.project_id || project_id,
      }),
  };
};

window.gh_api = gh_api;

export default gh_api;
