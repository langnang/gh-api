import axios from "./../plugins/axios";
/**
 * List organization projects
 * @href https://developer.github.com/v3/projects/#list-organization-projects
 * List repository projects
 * @href https://developer.github.com/v3/projects/#list-repository-projects
 * List user projects
 * @href https://developer.github.com/v3/projects/#list-user-projects
 */

export const gh_projects_list = ({ owner, repo, org }, config) => {
  if (org) {
    return axios({
      url: `/orgs/${org}/projects`,
      method: "get",
      ...config,
    });
  }
  if (repo) {
    return axios({
      url: `/repos/${owner}/${repo}/projects`,
      method: "get",
      ...config,
    });
  }
  return axios({
    url: `/users/${owner}/projects`,
    method: "get",
    headers: {
      Accept: "application/vnd.github.inertia-preview+json",
    },
    ...config,
  });
};

const gh_projects = (path = {}) => {
  const [owner, repo, org] = [path.owner, path.repo, path.org];
  return {
    list: (path = {}, config) =>
      gh_projects_list(
        {
          owner: path.owner || owner,
          repo: path.owner || repo,
          org: path.owner || org,
        },
        config
      ),
  };
};

export default gh_projects;
