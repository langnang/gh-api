import axios from "./../../plugins/axios";
import gh_issue_comment from "./comment";

const gh_issue = function({ owner, repo }) {
  return {
    list: () => axios.get(`/repos/${owner}/${repo}/issues`),
    info: ({ issue_number }) =>
      axios.get(`/repos/${owner}/${repo}/issues/${issue_number}`),
    create: () => {},
    update: () => {},
    lock: () => {},
    unlock: () => {},
    comment: ({ issue_number }) => gh_issue_comment({ issue_number }),
  };
};

export default gh_issue;
