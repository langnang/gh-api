import axios from "../plugins/axios";

/**
 * List issue comments
 * @href https://developer.github.com/v3/issues/comments/#list-issue-comments
 * List issue comments for a repository
 * @href https://developer.github.com/v3/issues/comments/#list-issue-comments-for-a-repository
 */
export const gh_comments_list = ({ owner, repo, issue_number }, config) => {
  if (issue_number) {
    return axios({
      url: `/repos/${owner}/${repo}/issues/${issue_number}/comments`,
      method: "get",
      ...config,
    });
  }
  return axios({
    url: `/repos/${owner}/${repo}/issues/comments`,
    method: "get",
    ...config,
  });
};

/**
 * Get an issue comment
 * @href https://developer.github.com/v3/issues/comments/#get-an-issue-comment
 */
export const gh_comments_info = ({ owner, repo, comment_id }, config) =>
  axios({
    url: `/repos/${owner}/${repo}/issues/comments/${comment_id}`,
    method: "get",
    ...config,
  });

const gh_comments = function(path = {}) {
  const _owner = path.owner;
  const _repo = path.repo;
  const _issue_number = path.issue_number;
  return {
    list: (path = {}) =>
      gh_comments_list({
        owner: path.owner || _owner,
        repo: path.repo || _repo,
        issue_number: path.issue_number || _issue_number,
      }),
    info: (path = {}) =>
      gh_comments_info({
        owner: path.owner || _owner,
        repo: path.repo || _repo,
        issue_number: path.issue_number || _issue_number,
      }),
  };
};

export default gh_comments;
