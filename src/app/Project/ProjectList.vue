<template>
  <transition-group
    enter-active-class="animated zoomInDown"
    leave-active-class="animated bounceOutRight"
  >
    <el-col v-for="project in ALL_PROJECTS" :span="24" :key="project.id">
      <ProjectSingle :project="project" class="ProjectSingle"></ProjectSingle>
    </el-col>
  </transition-group>
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
