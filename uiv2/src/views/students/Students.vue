<template>
  <div class="root-container">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <h1 class="md-title">Alunos</h1>
      </div>
      <div class="md-layout-item right">
        <md-field md-inline>
          <label>Buscar</label>
          <md-input v-model="query" @keyup="actionSearch"></md-input>
          <md-icon>search</md-icon>
        </md-field>
      </div>
    </div>
    <div v-if="datasource.length > 0">
      <md-table v-model="datasource" md-card md-sort="student_name" md-sort-order="asc">
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="RA" md-sort-by="student_ra">{{ item.student_ra }}</md-table-cell>
          <md-table-cell md-label="Nome" md-sort-by="student_name">{{ item.student_name }}</md-table-cell>
          <md-table-cell md-label="Email" md-sort-by="student_email">{{ item.student_email }}</md-table-cell>
          <md-table-cell md-label="CPF" md-sort-by="student_cpf">{{ item.student_cpf }}</md-table-cell>
          <md-table-cell md-label="Ações">
            <md-button class="md-icon-button" @click="actionEdit(item.student_uuid)">
              <md-icon>
                create
                <md-tooltip md-direction="top">Editar</md-tooltip>
              </md-icon>
            </md-button>
            <md-button class="md-icon-button" @click="actionRemove(item)">
              <md-icon>
                delete
                <md-tooltip md-direction="top">Remover</md-tooltip>
              </md-icon>
            </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <div v-else>
      <h4>Nenhum aluno cadastrado.</h4>
    </div>
    <md-button class="md-fab" @click="actionNew">
      <md-icon>add</md-icon>
    </md-button>
    <ConfirmDialog 
      ref="dialog"
      text="Confirmar remoção de aluno?"
      :onConfirm="confirmDelete" />
    <Toast ref="toast" />
  </div>
</template>

<style scoped lang="scss">
  @import "vue-material/dist/theme/engine";

  .root-container{
    position: relative;
    max-width: 99%;

    .md-layout{
      margin-bottom: 48px; 

      .md-layout-item {
        height: 40px;
        margin-right: 16px;
        margin-left: 16px;
        .md-title{ margin-top: 22px; }

        &:after {
          width: 100%;
          height: 100%;
          display: block;
          content: " ";
        }
      }
    }
    .md-fab{
      position: fixed;
      bottom: 20px;
      right: 20px;
    }
  }
</style>

<script>
import { mainCreated,studentRoute,searchStudent,tryDelete } from './helper'
import ConfirmDialog from '../../components/ConfirmDialog.vue'
import Toast from '../../components/Toast.vue'

export default {
  name: 'Students',
  data() {
    return {
      datasource: [],
      query: "",
      selected: undefined,
    }
  },
  created() {
    mainCreated(this)
  },
  methods: {
    actionNew() {
      return this.$router.push({ path: `${studentRoute}/edit`})
    },
    actionEdit(uuid){
      return this.$router.push({ path: `${studentRoute}/edit/${uuid}`})
    },
    actionRemove(it) {
      this.selected = it;
      this.$refs.dialog.open()
    },
    confirmDelete(){
      if(this.selected){
        tryDelete(this.selected.student_uuid)
          .then(res => {
            if(res.data && res.len >= 1){
              this.$refs.toast.toggle(`Aluno(a) "${this.selected.student_name}" removido com sucesso.`)
              this.actionSearch()
            }
            this.selected = undefined;
          })
          .catch(() => this.$refs.toast.toggle('Erro ao tentar remover aluno.'))
      }
    },
    actionSearch(){
      searchStudent(this.query)
        .then(res => this.datasource = res.data ?? [])
        .catch(() => this.datasource = [])
    }
  },
  components: {
    ConfirmDialog, Toast
  }
}
</script>