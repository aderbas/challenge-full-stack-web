<template>
  <div>
    <md-dialog-confirm
      :md-active.sync="active"
      :md-content="text"
      md-title="Confirmação"
      md-confirm-text="Sim"
      md-cancel-text="Não"
      @md-confirm="onConfirm" />    
  </div>
</template>

<script>
export default {
  name: 'ConfirmDialog',
  data() {
    return {
      active: false
    }
  },
  props: {
    text: String,
    onConfirm: Function
  },
  methods: {
    open() {
      this.active = true
    }
  }
}
</script>