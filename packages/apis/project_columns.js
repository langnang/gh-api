import axios from "./../plugins/axios";
/**
 * List project columns
 * @href https://developer.github.com/v3/projects/columns/#list-project-columns
 */
export const gh_project_columns_list = ({ project_id }, config) => {
  return axios({
    url: `/projects/${project_id}/columns`,
    method: "get",
    headers: {
      Accept: "application/vnd.github.inertia-preview+json",
    },
    ...config,
  });
};

const gh_project_columns = (path = {}) => {
  const [_project_id] = [path.project_id];
  return {
    list: (path = {}) =>
      gh_project_columns_list({
        project_id: path.project_id || _project_id,
      }),
  };
};

export default gh_project_columns;
