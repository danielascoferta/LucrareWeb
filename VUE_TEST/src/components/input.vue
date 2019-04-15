<template>
  <div>
    Variabila x:<input  v-model="x">
    Variabila y:<input  v-model="y">
  </div>
</template>

<script>
export default {
  name: 'input',
  data () {
      return{
        x: this.$store.state['x'],
        y: this.$store.state['y']
      }
  },
  watch: {
    x: function (val) {
      this.x = parseInt(val)
      this.$store.commit('setX', val)
    },
     y: function (val) {
      this.y = parseInt(val)
      this.$store.commit('setY', val)
    }
  }
}
</script>

<style scoped>
</style>