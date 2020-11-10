import axios from "../plugins/axios";
/**
 * List repositories for a user
 * @href https://developer.github.com/v3/repos/#list-repositories-for-a-user
 */
export const gh_repo_list = ({ org }, config) => {
  let url, originUrl;
  if (org) {
    originUrl = "/orgs/{org}/repos";
    url = `/orgs/${org}/repos`;
  }
  axios({
    url,
    originUrl,
    method: "get",
    ...config,
  });
};

/**
 * Get a repository
 * @href https://developer.github.com/v3/repos/#get-a-repository
 */
export const gh_repo_info = ({ owner, repo }, config) =>
  axios({
    url: `/repos/${owner}/${repo}`,
    method: "get",
    ...config,
  });

/**
 * Get all repository topics
 * @href https://developer.github.com/v3/repos/#get-all-repository-topics
 */
const gh_repo_topics = ({ owner, repo }, config) =>
  axios({
    url: `/repos/${owner}/${repo}/topics`,
    method: "get",
    ...config,
  });
/**
 * List repository contributors
 * @href https://developer.github.com/v3/repos/#get-all-repository-topics
 */
const gh_repo_contributors = ({ owner, repo }, config) =>
  axios({
    url: `/repos/${owner}/${repo}/contributors`,
    method: "get",
    ...config,
  });

/**
 * List repository languages
 * @href https://developer.github.com/v3/repos/#list-repository-languages
 */
const gh_repo_languages = ({ owner, repo }, config) =>
  axios({
    url: `/repos/${owner}/${repo}/languages`,
    method: "get",
    ...config,
  });
/**
 * List repository tags
 * @href https://developer.github.com/v3/repos/#list-repository-tags
 */
const gh_repo_tags = ({ owner, repo }, config) =>
  axios({
    url: `/repos/${owner}/${repo}/tags`,
    method: "get",
    ...config,
  });

const gh_repo = function({ owner }) {
  return {
    list: (config) => gh_repo_list({ owner }, config),
    info: ({ repo }, config) => gh_repo_info({ owner, repo }, config),
    topics: ({ repo }, config) => gh_repo_topics({ owner, repo }, config),
    contributors: ({ repo }, config) =>
      gh_repo_contributors({ owner, repo }, config),
    languages: ({ repo }, config) => gh_repo_languages({ owner, repo }, config),
    tags: ({ repo }, config) => gh_repo_tags({ owner, repo }, config),
  };
};

export default gh_repo;
