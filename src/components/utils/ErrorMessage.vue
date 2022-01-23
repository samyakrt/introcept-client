<template>
  <div>
    <div class="text-danger" v-for="error of errors" :key="error.$uid">
      {{ error.$message }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
    },
  },
};
</script>