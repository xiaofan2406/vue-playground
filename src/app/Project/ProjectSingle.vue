<template>
  <div>
    <el-card>
      <div slot="header" class="ProjectSingle-header">
        <span class="ProjectSingle-name">{{project.name}}</span>
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
      {{project.id}} 
      <Editable></Editable>
      <input type="text" @keyup.enter="rename" placeholder="a new name" />
    </el-card>
  </div>
</template>

<script>
import { projectActions } from 'store/actions';
import Editable from 'widgets/Editable';


export default {
  components: {
    Editable
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    rename(e) {
      this.$store.dispatch(projectActions.SET_NAME, { id: this.project.id, name: e.target.value });
      e.target.value = '';
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
    }
  }
};
</script>

<style>
.ProjectSingle-header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.ProjectSingle-name {
  word-break: break-all;
  flex: 1;
  margin-right: 20px;
}
.el-dropdown-link {
  cursor: pointer;
}
</style>