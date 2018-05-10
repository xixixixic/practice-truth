<template>
  <div id="app">
    <input type="button" value="显示弹窗" @click="showToast">
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
      }
    },
    methods: {
      showToast () {
        this.$toast('我是弹出消息')
      }
    },
    mounted () {
    }
  }
</script>
