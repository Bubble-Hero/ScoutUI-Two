<template>
  <div class="side">
    <div class="logo">
      <!--<img src="../../assets/img/LOGO-transparent.png" >-->
      <p>Scout<b style=";">UI</b></p>
    </div>
    <!--。。。。；移动端。。。。。。。-->
    <h4>移动端组件 </h4>
      <span class="liTitle">基础组件<img src="../../static/img/side01.png"></span>
    <ul class="slideUL">
      <router-link tag="li" to="/compo">顶部组件</router-link>
      <router-link tag="li" to="/compo/footer">底部组件</router-link>
    </ul>
      <span class="liTitle">菜单组件<img src="../../static/img/side01.png"></span>
    <ul class="slideUL">
      <router-link tag="li" to="/compo/goodlistmenu">商品列表菜单</router-link>
      <router-link tag="li" to="/compo/slideupmenu">上拉菜单</router-link>
      <router-link tag="li" to="/compo/swiperMenu">轮播菜单</router-link>
      <router-link tag="li" to="/compo/classifyMenu">分类菜单</router-link>
      <router-link tag="li" to="/compo/navMenu">导航菜单</router-link>
    </ul>
      <span class="liTitle">登录注册组件<img src="../../static/img/side01.png"></span>

    <ul class="slideUL">
      <router-link tag="li" to="/compo/Login">登录组件</router-link>
      <router-link tag="li" to="/compo/Register">注册组件</router-link>
    </ul>
    <!--。。。。。pc端。。。。。-->
    <h4> PC 端组件 </h4>
      <span class="liTitle">导航组件<img src="../../static/img/side01.png"></span>
    <ul class="slideUL">
      <li>Menu 导航</li>
      <li>侧边栏导航</li>
      <li>下拉导航</li>
    </ul>
      <span class="liTitle">列表组件<img src="../../static/img/side01.png"></span>
    <ul class="slideUL">
      <li>表格</li>
      <li>表单</li>
      <li>图表</li>
    </ul>
      <span class="liTitle">**组件<img src="../../static/img/side01.png"></span>

    <ul class="slideUL">
      <li>***</li>
      <li>***</li>
      <li>***</li>
      <li>***</li>
    </ul>

  </div>
</template>

<script>
  import $ from "jquery"
    export default {
        name: "CompoSide",
      mounted(){
        $(".liTitle").stop().click(function(){
          $(this).next().stop().toggle(400);
          if(($(this).find("img").attr("src"))=="../../static/img/side01.png"){
            $(this).find("img").attr("src","../../static/img/side02.png")
          } else{
            $(this).find("img").attr("src","../../static/img/side01.png")
          }
        });
      }
    }
</script>

<style scoped>
  body,img{
    margin: 0;
  }

  li{
    cursor: pointer;
    list-style: none;
  }
  .side span:hover{
    color:#17b6ad;
  }

  .liTitle{
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
  }
  .side li:hover{
    background:rgba(38,83,87,.7);
    color:#17b6ad;
  }
  .slideUL{
    padding: 0;
  }
  .s-m-b{
    margin-bottom: 30px;
  }
  .side{
    width: 230px;
    height: 100%;
    background: rgba(0,0,0,.4);
    padding: 66px 0 40px;
    position: fixed;
    left: 0;
    top: 0;
    overflow-y: scroll;
    border:0;
  }

  ::-webkit-scrollbar {
    width: 2px;
    background:transparent ;
  }

  .logo{
    width: 228px;

    /*color: ;*/
    background:rgba(0,0,0,.1) ;
    position: fixed;
    left: 0;
    top: 0;
    padding: 10px 16px ;
  }

  .side p{
    margin: 0;
    line-height: 46px;
    font-size: 30px;
    color: white;

  }
  .side h4{
    height: 40px;
    line-height: 40px;
    padding-left: 16px;
    font-size: 14px;
    color: #edebeb;
    font-weight: 600;
  }
  .side span{
    display: block;
    font-size: 14px;
    color: #cccccc;
    padding:0 20px;
    display: flex;
    justify-content: space-between;

  }
  .side ul{
    margin: 0;
  }
  .side li{
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #cccccc;
    padding-left:40px;
  }
</style>
