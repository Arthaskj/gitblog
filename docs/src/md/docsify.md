## Docsify博客系统

docsify是一个博客框架，相比于其他博客框架，他是在运行时对md文件进行处理，所以更改过的文件马上就能被渲染，十分方便，结合[自动部署ci系统](src/md/ci/gitee)，只需要进行push操作就可以进行博客的实时部署。
对于如何使用Docsify可以直接到官网进行查询[Docsify快速开始](https://docsify.js.org/#/zh-cn/quickstart)，这里我只进行相关配置的介绍。

```html
<!--
 * @Author: 柯军
 * @Date: 2017-10-26 16:15:00
 * @Description:
 -->
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <title>Arthaskj-Blog</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="keywords" content="arthaskj,arthas,kejun,blog,kj,jke">
  <meta name="description" content="arthaskj blog">
  <link rel="icon" href="./assets/brother_l.jpg" type="image/x-icon" />
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <link rel="stylesheet" href="lib/css/vue.css">
    
    <!-- 这些功能引入的话会大大影响加载速度，非必要不需要添加 -->
  <!-- 做图引入 -->
<!--  <link rel="stylesheet" href="lib/css/mermaid.min.css">-->
<!--  <script src="lib/js/mermaid.min.js"></script>-->
  <!-- 公式引入 -->
<!--  <link href="lib/css/katex.min.css" rel="stylesheet">-->
<!--  <script src="lib/js/katex.min.js"></script>-->

<!-- <link rel="stylesheet" href="lib/css/gitalk.css"> -->



</head>
<script type="module" src="./index.js"></script>

<body>
  <div id="app">正在加载，请稍后。。。</div>
  <script>
    window.$docsify = {
      search: {
        maxAge: 86400000, // 过期时间，单位毫秒，默认一天
        paths: 'auto',
        placeholder: '输入查询内容...',
        noData: '未找到结果!',
        depth: 6          // 搜索标题的最大程级, 1 - 6
      },
      // 代码块点击复制
      copyCode: {
        buttonText : '复制',
        errorText  : '复制失败',
        successText: '复制成功'
      },
      logo: './assets/trash_m.jpg', //侧边栏出现的图标
      name: 'Arthaskj',
      repo: 'https://github.com/****/gitblog/', //在右上角添加github图标

      loadSidebar: true, //显示侧边栏
      alias: {
        '/.*/_sidebar.md': '/_sidebar.md',
        '/.*/_navbar.md': '/_navbar.md'
      },
      subMaxLevel: 2,
      autoHeader: true, //自动显示标题

      maxLevel: 4, //目录最多展示4级
      coverpage: './_coverpage.md', //展示封面
      // loadNavbar: true,//加载导航栏
      // mergeNavbar: true,//小屏幕导航栏移动到侧边栏
      auto2top: true, //跳转页面自动返回顶部
      notFoundPage: 'my404.md', //自定义404页面
      requestHeaders: {
        'cache-control': 'max-age=600',
      },
		
      formatUpdated: '{YYYY}/{MM}/{DD} {HH}:{mm}:{ss}', //格式化时间{docsify-updated}
      plugins: [
        function(hook) {
            // 底部版权和备案信息添加
          var footer = [
            '<hr/>',
            '<footer style="text-align: center;">',
            `<span><a href="https://github.com/***/gitblog/" target="_blank">KJ-Blog</a> &copy;2017-${new Date().getFullYear()}</span><br />`,
            '<div><a href="http://www.beian.miit.gov.cn">***</a></div>'+
            '</footer>'
          ].join('')

          hook.afterEach(function(html) {
            return html + footer
          })
        },
        function(hook) {
            // 顶部信息添加
          var content = [
            `> 作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;者: Arthaskj`,
            `<br />`,
            `更新时间: {docsify-updated}`,
            '<br /><span id="busuanzi_container_page_pv">当前页访问量: <span id="busuanzi_value_page_pv" style="font-weight: bold;"></span>次 &nbsp;   </span>',
            '<br /><span id="busuanzi_container_site_pv">本站总访问量: <span id="busuanzi_value_site_pv" style="font-weight: bold;"></span>次 &nbsp;   </span>',
            '\n',
          ].join('');

          hook.beforeEach(function(html) {
            return content + html;
          })
        },
        function(hook) {
            // 浏览量记录
          hook.doneEach(function() {
            fetch(`/api/controller/entil?host=${window.location.host}&hash=${window.location.hash.replace('#','arthas')}`)
            .then(res => res.json()).then(res => {
              const { pv, sv } = res.data;
              document.querySelector('#busuanzi_value_page_pv').innerHTML = pv;
              document.querySelector('#busuanzi_value_site_pv').innerHTML = sv;
            })
          })
        }
      ],
    }
  </script>
  <!-- vue引入 -->
<!--  <script src="lib/js/vue.js"></script>-->
<script src="//cdn.jsdelivr.net/npm/vue@2/dist/vue.min.js"></script>
  <!-- <script src="//unpkg.com/docsify"></script> -->
  <script src="lib/js/docsify.min.js"></script>
  <script src="lib/js/emoji.js"></script>
  <!--搜索功能-->
  <script src="lib/js/search.js"></script>
  <!--复制代码-->
  <script src="lib/js/docsify-copy-code.min.js"></script>
  <!--分页导航-->
  <script src="lib/js/docsify-pagination.min.js"></script>

<!-- 本来打算使用gitalk来作为博客的评论系统，但是国内效果并不是很好~所以最后可能会自己写一个组件 -->
<!-- <script src="lib/js/gitalk.min.js"></script>
<script src="lib/js/gitalklib.min.js"></script>
<script>
  const gitalk = new Gitalk({
    clientID: '***',
    clientSecret: '***',
    repo: 'gitblog',
    owner: 'Arthaskj',
    admin: ['Arthaskj'],
    // facebook-like distraction free mode
    distractionFreeMode: true
  })
</script> -->
</body>

</html>

```





