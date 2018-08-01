<template>
  <div id="app">
    <input type="button" value="显示弹窗" @click="showToast">
    <input type="button" value="使用插件的方法" @click="usePluginFunc">
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    data () {
      return {}
    },
    methods: {
      showToast () {
        this.$toast('我是弹出消息')
      },
      async usePluginFunc () {
        this.$test2()
        let url = 'aup2mgr/api/codeItem/companyType'
        let res = await this.post(url)
        console.log(res.data)
      },
      post (url, param) {
        return axios({
          method: 'post',
          url: url,
          data: param
        })
      }
    },
    mounted () {
    }
  }
</script>
