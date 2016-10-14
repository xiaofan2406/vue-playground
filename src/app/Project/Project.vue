<template>
  <div class="Project-root">
    <div class="Project-entry">
      <el-menu theme="dark" mode="horizontal" class="Project-menu">
        <el-menu-item index="new"><i class="el-icon-plus" />New</el-menu-item>  
        <input type="text" @keyup.enter="newProject"/>  
      </el-menu>      
      <ProjectList></ProjectList>
    </div>
  </div>
</template>

<script>
import { v4 } from 'node-uuid';
import { projectActions } from 'store/actions';
import ProjectList from './ProjectList';


export default {
  components: {
    ProjectList
  },
  methods: {
    newProject(e) {
      this.$store.dispatch(projectActions.ADD_PROJECT, {
        id: v4(),
        name: e.target.value
      });
      e.target.value = '';
    }
  }

};
</script>

<style>
.Project-root {
  display: flex;
  justify-content: center;
}
.Project-entry {
  width: 640px;
}
.Project-menu {
  margin-bottom: 32px;
}
</style>