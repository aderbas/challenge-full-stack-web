<template>
  <md-snackbar md-position="left" :md-active.sync="showSnackbar" md-persistent>
    <span>{{ message }}</span>
  </md-snackbar>
</template>

<style scoped></style>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      showSnackbar: false,
      message: ''
    }
  },
  methods: {
    toggle(message) {
      this.showSnackbar = true
      this.message = message
    }
  }
}
</script>