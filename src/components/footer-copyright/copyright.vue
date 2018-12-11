<template>
  <div class="layui-footer footer footer-index">
    <div class="layui-main">
      <p><span>© 2018 </span><a href="/">ScoutUI.com</a> MIT license</p>
      <p>
        <a href="http://bgs09143010.gotoip1.com" target="_blank">案例</a>
        <a href="http://www.mobiletrain.org/" target="_blank">支持</a>
        <!--<a href="javascript:;" site-event="contactInfo">联系</a>-->
        <a href="https://github.com/Bubble-Hero" target="_blank" rel="nofollow">GitHub</a>
        <a href="https://github.com/Bubble-Hero" target="_blank" rel="nofollow">码云</a>
        <a href="https://github.com/Bubble-Hero" target="_blank">公众号</a>
        <a href="http://www.miitbeian.gov.cn/" target="_blank" rel="nofollow">赣ICP备13006272号-2</a>
      </p>
      <p class="site-union">
        <a href="http://www.mobiletrain.org/" target="_blank" rel="nofollow">
        <span>提供 CDN 赞助</span>
          <img src="../../../static/img/qf.png" alt="qianfeng"></a>
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "copyright"
    }
</script>

<style lang="scss" scoped>
  .footer {
    line-height: 30px;
    text-align: center;
    color: #a1a1a1;
    font-weight: 300;
    background: transparent;
    font-size: 1.1rem;
    margin-bottom: 5rem;
      a {
      padding: 0 5px;
        color: #b1b1b1;
    }
    a:hover{
      color: #eee;
    }
    img{
      display: inline-block;width: 60px;;
    }
    p{
    display: flex;
    flex-direction: row-reverse;
    justify-content:center;
    align-items: center;
    }
  }
</style>
