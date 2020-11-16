import axios from "./../../plugins/axios";

import Assignees from "./Assignees";

export default {
  // List issues assigned to the authenticated user
  "GET /issues": () =>
    axios({
      url: `/issues`,
      method: "GET",
      header: {
        accept: "application/vnd.github.v3+json",
      },
    }),
  // List organization issues assigned to the authenticated user
  "GET /orgs/{org}/issues": ({ org }) =>
    axios({
      url: `/orgs/${org}/issues`,
      method: "GET",
      header: {
        accept: "application/vnd.github.v3+json",
      },
    }),
  // List repository issues
  "GET /repos/{owner}/{repo}/issues": ({ owner, repo }) =>
    axios({
      url: `/repos/${owner}/${repo}/issues`,
      method: "GET",
      header: {
        accept: "application/vnd.github.v3+json",
      },
    }),
  // Create an issue
  "POST /repos/{owner}/{repo}/issues": ({ owner, repo }) =>
    axios({
      url: `/repos/${owner}/${repo}/issues`,
      method: "POST",
      header: {
        accept: "application/vnd.github.v3+json",
      },
    }),
  // Get an issue
  "GET /repos/{owner}/{repo}/issues/{issue_number}": ({
    owner,
    repo,
    issue_number,
  }) =>
    axios({
      url: `/repos/${owner}/${repo}/issues/${issue_number}`,
      method: "GET",
      header: {
        accept: "application/vnd.github.v3+json",
      },
    }),
  // Update an issue
  "PATCH /repos/{owner}/{repo}/issues/{issue_number}": ({
    owner,
    repo,
    issue_number,
  }) =>
    axios({
      url: `/repos/${owner}/${repo}/issues/${issue_number}`,
      method: "PATCH",
      header: {
        accept: "application/vnd.github.v3+json",
      },
    }),
  // Lock an issue
  "PUT /repos/{owner}/{repo}/issues/{issue_number}/lock": () =>
    axios({
      url: `/repos/{owner}/{repo}/issues/{issue_number}/lock`,
      method: "PUT",
      header: {
        accept: "application/vnd.github.v3+json",
      },
    }),
  // Unlock an issue
  "DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock": ({
    owner,
    repo,
    issue_number,
  }) =>
    axios({
      url: `/repos/${owner}/${repo}/issues/${issue_number}/lock`,
      method: "DELETE",
      header: {
        accept: "application/vnd.github.v3+json",
      },
    }),
  // List user account issues assigned to the authenticated user
  "GET /user/issues": () =>
    axios({
      url: `/user/issues`,
      method: "GET",
      header: {
        accept: "application/vnd.github.v3+json",
      },
    }),
  ...Assignees,
};
