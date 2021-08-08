<template>
  <md-app md-waterfall md-mode="fixed">
    <md-app-toolbar class="md-primary">
      <span class="md-title">
        Módulo Acadêmico
      </span>
      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button" @click="logout">
          <md-icon>logout</md-icon>
        </md-button>        
      </div>
    </md-app-toolbar>

    <md-app-drawer md-permanent="full">
      <md-toolbar class="md-transparent" md-elevation="0">
        <img src="@/assets/ga-logo.png" class="img-logo">
      </md-toolbar>

      <LeftMenu />

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
import LeftMenu from '../../components/LeftMenu.vue'
export default {
  name: 'Home',
  methods: {
    logout() {
      localStorage.removeItem('token')
      return this.$router.push({ path: '/'})
    }
  },
  components: {
    LeftMenu
  }
}
</script>