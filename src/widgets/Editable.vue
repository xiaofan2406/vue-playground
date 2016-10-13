<template>
  <div v-if="renderEdit" :class="sharedClass">
    <
  </div>
  <div v-else>
    yoy
  </div>
</template>

<script>
export default {
  props: {
    sharedClass: String
  },
  data() {
    return {
      renderEdit: false
    };
  }

};
</script>

<style>

</style>