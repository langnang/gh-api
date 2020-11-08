<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" />
  </div>
</template>

<script>
import gh_api from "./../packages";
export default {
  name: "App",
  components: {},
  data() {
    return {
      gh_api,
    };
  },
  mounted() {
    gh_api()
      .comments()
      .list({
        owner: "langnang",
        repo: "AudioPlayer",
        issue_number: 7,
      });
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
