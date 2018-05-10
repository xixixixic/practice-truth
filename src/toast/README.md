一. 先写一个普通的vue组件

文件位置 `/src/toast/toast.vue`

    <template>
      <div>我是弹窗</div>
    </template>
    
二. 在我们需要使用的页面引入组件,方便看效果和错误

    <template>
      <div id="app">
          <toast></toast>
      </div>
    </template>
    
    <script>
      import toast from './toast/toast'
      export default {
        components: {toast},
      }
    </script>

#插图 1

可以看到,已经显示出一个静态的弹出层了,接下来我们就来看看如何实现动态弹出.  

我们先在 `/src/toast/` 目录下面,新建一个`index.js`, 然后在index.js里面,敲入以下代码(由于该代码耦合比较严重,所以就不拆开一行一行讲解了,改成行内注释)

文件位置 `/src/toast/index.js`

