import axios from "../../plugins/axios";

const gh_issue_comment = function({ owner, repo, issue_number }) {
  return {
    list: () =>
      axios.get(`/repos/${owner}/${repo}/issues/${issue_number}/comments`),
  };
};

export default gh_issue_comment;
