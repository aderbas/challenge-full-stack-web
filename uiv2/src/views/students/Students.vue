<template>
  <div>
    <md-table v-model="datasource" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Alunos</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="RA" md-sort-by="student_ra">{{ item.student_ra }}</md-table-cell>
        <md-table-cell md-label="Nome" md-sort-by="student_name">{{ item.student_name }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="student_email">{{ item.student_email }}</md-table-cell>
        <md-table-cell md-label="CPF" md-sort-by="student_cpf">{{ item.student_cpf }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<style scoped></style>

<script>
import { getStudents } from './helper'

export default {
  name: 'Students',
  data() {
    return {
      datasource: []
    }
  },
  created() {
    getStudents()
      .then(res => this.datasource = res.data)
      .catch(() => this.datasource = [])
  }
}
</script>