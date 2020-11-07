<template>
  <div>
    <el-row>
      <el-col :span="3">
        <LayoutSidebar />
      </el-col>
      <el-col :span="21">
        <LayoutHeader />
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LayoutHeader from "./header";
import LayoutSidebar from "./sidebar";
export default {
  name: "Layout",
  components: {
    LayoutHeader,
    LayoutSidebar,
  },
};
</script>
