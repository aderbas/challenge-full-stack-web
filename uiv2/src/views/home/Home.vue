<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <span class="md-title">
        Módulo Acadêmico
      </span>
    </md-app-toolbar>

    <md-app-drawer md-permanent="full">
      <md-toolbar class="md-transparent" md-elevation="0">
        <img src="@/assets/ga-logo.png" class="img-logo">
      </md-toolbar>

      <md-list>
        <md-list-item>
          <span class="md-list-item-text">
            <router-link :to="{path: '/app/students'}">Alunos</router-link>
          </span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <router-view></router-view>
    </md-app-content>
  </md-app>
</template>

<style scoped lang="scss">
.md-app {
  height: 100%;

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  } 

  .img-logo {
    max-width: 140px;
  }
}

</style>

<script>

export default {
  name: 'Home',
}
</script>