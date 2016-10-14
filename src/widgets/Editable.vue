<template>
  <el-input
    v-if="renderEdit"
    type="text"
    :value="value"
    :class="sharedClass"
    @keyup.native.enter="confirmValue"
    @keyup.native.esc="cancelValue"    
  >
  </el-input>
  <Tag v-else @dblclick.native="changeRender" :tag="displayTag" :class="sharedClass">{{value}}</Tag>
</template>

<script>
import Tag from 'widgets/Tag';


export default {
  components: {
    Tag
  },
  props: {
    value: String,
    sharedClass: String,
    onConfirmValue: Function,
    displayTag: {
      type: String,
      default: 'div'
    }
  },
  data() {
    return {
      renderEdit: false
    };
  },
  methods: {
    confirmValue(e) {
      this.onConfirmValue(e.target.value);
      this.renderEdit = false;
    },
    cancelValue() {
      this.renderEdit = false;
    },
    changeRender() {
      this.renderEdit = true;
    }
  }
};
</script>

<style>

</style>
