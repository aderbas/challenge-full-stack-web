<template>
  <md-app-drawer md-permanent="full">
    <md-toolbar class="md-transparent" md-elevation="0">
      Navigation
    </md-toolbar>

    <md-list>
      <md-list-item>
        <span class="md-list-item-text">Alunos</span>
      </md-list-item>
    </md-list>
  </md-app-drawer>
</template>

<style scoped>
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

<script>
export default {
  name: 'DrawerMenu'
}
</script>