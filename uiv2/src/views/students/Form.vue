<template>
  <div class="root-form">
    <h4>{{ ` ${uuid ? 'Editar' :  'Cadastrar'} aluno `}}</h4>
    <div class="form">
      <md-field>
        <label>Nome *</label>
        <md-input v-model="student.student_name" autofocus></md-input>
        <span class="md-helper-text">Nome completo</span>
      </md-field>

      <md-field>
        <label>E-mail</label>
        <md-input v-model="student.student_email"></md-input>
      </md-field>

      <md-field>
        <label>RA *</label>
        <md-input v-model="student.student_ra" :disabled="disable" type="number"></md-input>
        <span class="md-helper-text">Registro acadêmico</span>
      </md-field>

      <md-field>
        <label>RG *</label>
        <md-input v-model="student.student_cpf" :disabled="disable" type="number" maxlength="11"></md-input>
        <span class="md-helper-text">Apenas números</span>
      </md-field>                  

      <div class="form-controls">
        <md-button @click="back">Cancelar</md-button>
        <md-button class="md-raised md-accent" @click="save">Salvar</md-button>
      </div>
    </div>
    <Toast ref="toast" />
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
import { formCreated,trySave } from './helper'
import Toast from '../../components/Toast.vue'

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
      uuid: undefined,
      disable: false
    }
  },
  created() {
    formCreated(this)
  },
  methods:{ 
    back: () => setTimeout(() => window.history.back(), 100),
    save() {
      const {student} = this;
      if(student.student_name !== "" && student.student_ra !== "" && student.student_cpf !== ""){
        // simple check
        if(student.student_cpf.length > 11) return this.$refs.toast.toggle('CPF inválido.')
        // try send to backend
        return trySave(student)
          .then(res => {
            if(res.data){
              this.$refs.toast.toggle(`Estudante ${student.student_name} salvo com sucesso.`)
              return this.back()
            }
            // not saved
            this.$refs.toast.toggle(res.message)
          })
          .catch(() => this.$refs.toast.toggle('Ocorreu um erro ao tentar salvar.'))
      }
      return this.$refs.toast.toggle('Campos obrigatórios não podem ficar em branco.')
    },
  },
  components: {
    Toast
  }
}
</script>