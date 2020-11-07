// import gh_issue from "./apis/issue";

import gh_issue from "./apis/issue/index";

const gh_api = function ({ owner, repo }) {
  return {
    issue: gh_issue({ owner, repo }),
  };
};
export default gh_api;
