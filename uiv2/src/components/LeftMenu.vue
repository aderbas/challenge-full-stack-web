<template>
  <md-list>
    <md-list-item v-for="it in menu" :key="it.label">
      <span class="md-list-item-text">
        <router-link :to="{path: it.path}">{{ it.label }}</router-link>
      </span>
    </md-list-item>
  </md-list>
</template>


<style scoped lang="scss">
  .md-list{
    border-top: 1px solid #CCC;
    .md-list-item{
      border-bottom: 1px solid #CCC;
    }
  }
</style>

<script>
export default {
  name: 'LeftMenu',
  data(){
    return {
      menu: [
        {
          label: 'Alunos',
          path: '/app/students'
        }
      ]
    }
  }
}
</script>