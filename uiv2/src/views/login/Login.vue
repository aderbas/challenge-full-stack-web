<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">

      <div class="title">
        <img src="@/assets/ga-logo.png">
      </div>

      <div class="form">
        <md-field>
          <label>E-mail</label>
          <md-input v-model="credentials.email" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Senha</label>
          <md-input v-model="credentials.password" type="password"></md-input>
        </md-field>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <md-button class="md-raised md-primary" @click="auth">Entrar</md-button>
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner md-mode="indeterminate" :md-stroke="2"></md-progress-spinner>
      </div>

    </md-content>
    <Toast :showSnackbar="toast.showSnackbar" :message="toast.message"/>
  </div>
</template>

<style scoped lang="scss">
.centered-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  .title {
    text-align: center;
    margin-bottom: 30px;
    img {
      margin-bottom: 16px;
      max-width: 148px;
    }
  }
  .actions {
    .md-button {
      margin: 0;
    }
  }
  .form {
    margin-bottom: 60px;
  }
  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }  
}
</style>

<script>
import { tryAuthenticate } from './helper'
import Toast from '../../components/Toast.vue'

export default {
  name: 'Login',
  data() {
    return {
      loading: false,
      credentials: {
        email: '',
        password: ''
      },
      toast: {
        showSnackbar: false,
        message: ''
      }
    }
  },
  methods: {
    toggleToast() {
      this.toast.showSnackbar = true
      this.toast.message = "Ocorreu um erro ao tentar logar."
    },
    auth() {
      this.loading = true;
      tryAuthenticate(this.credentials)
        .then(result => {
          if(result.data){
            localStorage.setItem("token", result.data.token)
            return this.$router.push({ path: '/app'})
          }
          this.toggleToast()        
          this.loading = false
        })
        .catch((err) => {
          console.log(err)
          this.toast.showSnackbar = true
          this.toast.message = "Ocorreu um erro ao tentar logar."
          this.loading = false
        })
    }
  },
  components: {
    Toast
  }
}
</script>