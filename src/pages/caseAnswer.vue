<template>
  <div class="wrapper">
    <div class="wrapper-container">
      <div class="ivu-row">
        <div class="wrapper-navigate ivu-col ivu-col-span-4">
          <div class="navigate" _v-6db9881e="">
              <ul _v-6db9881e="" class="ivu-menu ivu-menu-light ivu-menu-vertical" style="width: auto;">
              <li _v-6db9881e="" class="ivu-menu-item ivu-menu-item-active ivu-menu-item-selected">实践案例</li>
              </ul>
          </div><!--v-component-->
        </div><!--v-component-->
        <div class="ivu-col ivu-col-span-20">
        <div class="wrapper-content ivu-article">
          <article>
            <h1>实践案例</h1>
            <p>Scoutui是由
              <a href="https://www.talkingdata.com/" target="_blank">QianFeng</a>
              开发的，面向中后台业务的一整套前端解决方案，包含了工程构建、主题定制、
              多语言等功能，极大提升了开发效率。</p>
            <p>从 2018 年下旬开始，QianFeng 的众多新项目开始使用 Scoutui，
              部分核心项目已逐步开始使用 Scoutui 重构。</p>
            <p>iView 已逐步成为
            TalkingData 的设计和开发规范。</p>
            <div class="anchor">
              <h2 id="最佳实践">最佳实践</h2>
               <a href="#最佳实践">#</a>
            </div>
            <router-view></router-view>
            </article>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "caseAnswer"
    }
</script>


<style scoped>
  .wrapper {
    width: 100%;
    padding: 1px;
  }
  .wrapper-container {
    background: #fff;
    width: 90%;
    margin: 30px auto 20px;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.1);
  }
  .ivu-row {
    margin-left: 0;
    margin-right: 0;
    height: auto;
    zoom: 1;
    display: block;
    position: relative;
  }
  .ivu-col-span-4 {
    display: block;
    width: 16.66666667%;
    float: left;
    -ms-flex: 0 0 auto;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
  }
  .navigate .ivu-menu-item{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .navigate{
    font-size: 14px;
    padding: 15px 0;
  }
  .navigate ul li{
    text-align: center;
    font-size: 20px;
  }
  .navigate ul li:hover{background: #e0e8ff}
  .ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title {
    padding: 14px 24px;
    position: relative;
    cursor: pointer;
    z-index: 1;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }
  .ivu-menu-light {
    background: #fff;
  }
  .ivu-menu {
    display: block;
    margin: 0;
    padding: 0;
    color: #657180;
    position: relative;
    list-style: none;
    font-size: 14px;
    outline: 0;
  }
  .ivu-menu, .ivu-menu-item {
    list-style: none;
    font-size: 14px;
    outline: 0;
    display: block;
  }
  .ivu-col-span-20 {
    display: block;
    width: 83.33333333%;
    float: left;
    -ms-flex: 0 0 auto;
    -webkit-box-flex: 0;
    flex: 0 0 auto
  }
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    color: #39f;
    border-right: 2px solid #39f;
    z-index: 2;
  }

  .wrapper-content {
    padding: 20px 25px;
    position: relative;
  }
  .wrapper-content blockquote, .wrapper-content h1, .wrapper-content h2 {
    margin: 12px 0;
    display: inline-block;
  }
  .ivu-article p {
    margin: 5px;
    font-size: 14px;
  }
  a {
    -webkit-text-decoration-skip: objects;
    color: #39f;
    background: 0 0;
    cursor: pointer;
    -webkit-transition: color .2s ease;
    transition: color .2s ease;
  }
  .ivu-article p {
    margin: 5px;
    font-size: 14px;
  }
  .anchor{
    line-height: 2;
  }
  .anchor a {
    opacity: 0;
    font-size: 24px;
    -webkit-transition: opacity .2s ease-in-out;
    transition: opacity .2s ease-in-out;
    margin-left: 5px;
    position: relative;
    top: 2px;
  }
  .ivu-article h3 {
    font-size: 16px;
    font-weight: 400;
  }
  .wrapper-content h3 {
    margin: 8px 0;
    display: inline-block;
  }
</style>
