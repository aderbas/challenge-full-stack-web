<template>
  <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
    <span>{{ message }}</span>
  </md-snackbar>
</template>

<style scoped></style>

<script>
export default {
  name: 'Toast',
  props: { 
    showSnackbar: Boolean,
    position: String,
    duration: Number,
    isInfinity: Boolean,
    message: String
  },
}
</script>