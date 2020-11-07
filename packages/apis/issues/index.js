import axios from "../../plugins/axios";
import gh_issue_comment from "./comment";

export const gh_issue_list = ({ owner, repo }) =>
  axios.get(`/repos/${owner}/${repo}/issues`);

export const gh_issue_info = ({ owner, repo, issue_number }) =>
  axios.get(`/repos/${owner}/${repo}/issues/${issue_number}`);

const gh_issue = function(path) {
  const _owner = path.owner;
  const _repo = path.repo;
  return {
    list: (path) =>
      gh_issue_list({ owner: path.owner || _owner, repo: path.repo || _repo }),
    info: (path) =>
      gh_issue_info({
        owner: path.owner || _owner,
        repo: path.repo || _repo,
        issue_number: path.issue_number,
      }),
    create: () => {},
    update: () => {},
    lock: () => {},
    unlock: () => {},
    comment: ({ issue_number }) => gh_issue_comment({ issue_number }),
  };
};

export default gh_issue;
