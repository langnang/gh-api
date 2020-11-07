<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" />
  </div>
</template>

<script>
import _gh_api from "./../packages";
const gh_api = _gh_api({ owner: "langnang", repo: "gh-api" });
console.log(gh_api);
export default {
  name: "App",
  components: {},
  mounted() {
    console.log(gh_api);
    console.log(gh_api.issue);
    gh_api.issue.list();
    gh_api.issue.info({ issue_number: 1 });
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
