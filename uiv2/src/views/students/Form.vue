<template>
  <div class="root-form">
    <h4>{{ ` ${uuid ? 'Editar' :  'Cadastrar'} aluno `}}</h4>
    <div class="form">
      <md-field>
        <label>Nome</label>
        <md-input v-model="student.student_name" autofocus></md-input>
      </md-field>

      <md-field>
        <label>E-mail</label>
        <md-input v-model="student.student_email" autofocus></md-input>
      </md-field>

      <md-field>
        <label>RA</label>
        <md-input v-model="student.student_ra" autofocus></md-input>
      </md-field>

      <md-field>
        <label>RG</label>
        <md-input v-model="student.student_cpf" autofocus></md-input>
      </md-field>                  

      <div class="form-controls">
        <md-button @click="cancel">Cancelar</md-button>
        <md-button class="md-raised md-accent">Salvar</md-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.root-form{
  .form{
    .md-field{
      width: 450px;
    }

    .form-controls {
      text-align: right;
    }
  }
}
</style>

<script>
import { getStudent } from './helper'
export default {
  name: 'Form',
  data() {
    return {
      student: {
        student_name: '',
        student_email: '',
        student_ra: '',
        student_cpf: '',
      },
      uuid: undefined
    }
  },
  created() {
    this.uuid = this.$route.params?.uuid;
    getStudent(this.$route.params?.uuid)
      .then(res => {
        if(res.data && res.data.length > 0){
          this.student = res.data[0]
        }
      })
      .catch(err => console.log(err))
  },
  methods: {
    cancel: () => setTimeout(() => window.history.back(), 100)
  }
}
</script>