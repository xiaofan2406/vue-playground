<template>
  <el-card>
    <div slot="header" class="ProjectSingle-header">
      <Editable :value="project.name" :onConfirmValue="rename" displayTag="span" sharedClass="ProjectSingle-name"></Editable>
      <div class="ProjectSingle-menu">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="el-icon-setting"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              index="remove"
              @click.native="confirmRemove"
            >
              Delete this project
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-input @keyup.native.enter="newTodo" placeholder="What to do next?" class="ProjectSingle-newTodo"></el-input>
    <ProjectTodoList :project="this.project"></ProjectTodoList>
  </el-card>
</template>

<script>
import { v4 } from 'node-uuid';
import { projectActions } from 'store/actions';
import Editable from 'widgets/Editable';
import ProjectTodoList from './ProjectTodoList';

export default {
  components: {
    Editable,
    ProjectTodoList
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    rename(name) {
      this.$store.dispatch(projectActions.SET_PROJECT_NAME, { id: this.project.id, name });
    },
    confirmRemove() {
      this.$confirm('Are you sure you want to remove this project permanently', 'Warning', {
        type: 'warning',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Confirm'
      }).then(() => {
        this.$store.dispatch(projectActions.REMOVE_PROJECT, this.project.id);
        this.$message({
          type: 'success',
          message: 'Project removed successfully'
        });
      }).catch(() => {});
    },
    newTodo(e) {
      this.$store.dispatch(projectActions.ADD_TODO, {
        projectId: this.project.id,
        name: e.target.value,
        id: v4()
      });
      e.target.value = '';
    }
  }
};
</script>

<style>
.ProjectSingle-header {
  display: flex;
  justify-content: center;
  align-items: center;
  & .el-dropdown-link {
    cursor: pointer;
  }
}
.ProjectSingle-name {
  word-break: break-all;
  flex: 1;
  margin-right: 20px;
  padding: 0;
}
.ProjectSingle-newTodo {
  margin-bottom: 16px;

  &>.el-input__inner {
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #C0CCDA;
  }
}
</style>
