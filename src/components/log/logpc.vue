<template>
  <div class="log">
    <h3>更新日志</h3>
    <ul>
      <p>0.0.1<span>2018-11-27</span></p>
      <li>1、着手研发阶段</li>
    </ul>
    <ul>
      <p>1.0.0<span>2018-11-28</span></p>
      <li>1、修改pc组件显示方式</li>
      <li>2、添加了侧边栏组件</li>
    </ul>
    <ul>
      <p>1.1.0<span>2018-11-30</span></p>
      <li>1、改变了组件里的布局问题</li>
      <li>2、解决了头部和侧边栏组件里的小图标问题</li>
    </ul>
    <ul>
      <p>1.2.1<span>2018-12-1</span></p>
      <li>1、修复组件点击滑动后不能自动播放问题</li>
      <li>2、添加分享组件。</li>
      <li>3、解决 webpack 编译失败的问题。</li>
      <li>4、解决组件隐藏后页面元素仍有事件响应问题</li>
      <li>5、解决页面内容布局问题（原来存在整个容器的内容都会滚动的问题）</li>
    </ul>
    <ul>
      <p>2.0.0<span>2018-12-4</span></p>
      <li>1、重新布局pc端Scoutui组件页面</li>
      <li>2、解决组件字体颜色设置问题</li>
      <li>3、解决组件左侧内容过多时定位问题</li>
      <li>4、解决 组件高度不随内容响应问题</li>
    </ul>
    <ul>
      <p>2.1.0<span>2018-12-5</span></p>
      <li>1、修复swiperlist组件无样式bug。</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "logpc"
    }
</script>

<style lang="scss" scoped>
  .log{
    width: 80%;
    height: 80%;
    background: rgba(255,255,255,.4);
    overflow: auto;
    padding:3rem 4rem;
    margin-top: 2rem;
    h3{
      line-height: 2.5rem;
      text-align: left;
    }

    ul{
      margin-top: 2rem;
      p{
        text-align: left;
        line-height: 3rem;
        span{
          padding-left: 2.5rem;
          font-size: 1.3rem;
        }
      }
      li{
        text-align: left;
        line-height: 2.5rem;
        //font-size: 1.3rem;
      }
    }
  }
</style>
