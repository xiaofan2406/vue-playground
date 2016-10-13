<template>
  <div>
    <el-row :gutter="16" v-for="project in ALL_PROJECTS">
      <el-col :span="24" :key="project.id">
        <ProjectSingle :project="project" class="ProjectSingle"></ProjectSingle>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { projectGetters } from 'store/getters';
import ProjectSingle from './ProjectSingle';


const { ALL_PROJECTS } = projectGetters;

export default {
  components: {
    ProjectSingle
  },
  computed: {
    ...mapGetters({
      ALL_PROJECTS
    })
  }

};
</script>

<style>
.ProjectSingle {
  margin-bottom: 16px;
}
</style>