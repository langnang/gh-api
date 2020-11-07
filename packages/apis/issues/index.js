import axios from "../../plugins/axios";
import gh_issue_comment from "./comment";

export const gh_issue_list = ({ owner, repo }) =>
  axios.get(`/repos/${owner}/${repo}/issues`);

export const gh_issue_info = ({ owner, repo, issue_number }) =>
  axios.get(`/repos/${owner}/${repo}/issues/${issue_number}`);

const gh_issue = function({ owner, repo }) {
  return {
    list: () => gh_issue_list({ owner, repo }),
    info: ({ issue_number }) => gh_issue_info({ owner, repo, issue_number }),
    create: () => {},
    update: () => {},
    lock: () => {},
    unlock: () => {},
    comment: ({ issue_number }) => gh_issue_comment({ issue_number }),
  };
};

export default gh_issue;
