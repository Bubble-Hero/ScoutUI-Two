<template>
  <div class="side">
    <div class="logo">
      <!--<img src="../../assets/img/LOGO-transparent.png" >-->
      <router-link tag="p" to="/index" style="cursor: pointer">Scout<b style="">UI</b></router-link>
    </div>
    <!--。。。。；移动端。。。。。。。-->
    <h4>移动端组件 </h4>
      <span class="liTitle">基础组件<img src="../../static/img/side01.png"></span>
    <ul class="slideUL">
      <router-link tag="li" to="/compo"><i class="iconfont">&#xe61e;</i>顶部组件</router-link>
      <router-link tag="li" to="/compo/footer"><i class="iconfont">&#xe553;</i>底部组件</router-link>
    </ul>
      <span class="liTitle">菜单组件<img src="../../static/img/side01.png"></span>
    <ul class="slideUL">
      <router-link tag="li" to="/compo/goodlistmenu"><i class="iconfont">&#xe64c;</i>商品列表菜单</router-link>
      <router-link tag="li" to="/compo/swiperMenu"><i class="iconfont">&#xe519;</i>轮播菜单</router-link>
      <router-link tag="li" to="/compo/classifyMenu"><i class="iconfont">&#xe642;</i>分类菜单</router-link>
      <router-link tag="li" to="/compo/navMenu"><i class="iconfont">&#xe684;</i>分享菜单</router-link>
    </ul>
      <span class="liTitle">登录注册组件<img src="../../static/img/side01.png"></span>

    <ul class="slideUL">
      <router-link tag="li" to="/compo/Login"><i class="iconfont">&#xe60f;</i>复合组件</router-link>
    </ul>
    <!--。。。。。pc端。。。。。-->
    <h4> PC 端组件 </h4>
      <span class="liTitle">导航组件<img src="../../static/img/side01.png"></span>
    <ul class="slideUL">
      <router-link tag="li" to="/compo/menunav"><i class="iconfont">&#xe6bc;</i>Menu 导航</router-link>
      <router-link tag="li" to="/compo/sidenav"><i class="iconfont">&#xe62d;</i>侧边栏导航</router-link>
      <router-link tag="li" to="/compo/slidenav"><i class="iconfont">&#xe665;</i>分类导航</router-link>
    </ul>
      <span class="liTitle">列表组件<img src="../../static/img/side01.png"></span>
    <ul class="slideUL">
      <router-link tag="li" to="/compo/form"><i class="iconfont">&#xe689;</i>表格</router-link>
      <router-link tag="li" to="/compo/input"><i class="iconfont">&#xe6cf;</i>表单</router-link>
      <router-link tag="li" to="/compo/chart"><i class="iconfont">&#xe5b9;</i>幻灯片</router-link>
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
    color:#dab4a3;
  }

  .liTitle{
    cursor: pointer;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
  }
  .side li:hover{
    background:rgba(0,0,0,.2);
    color:#e2bdaf;
  }
  .slideUL{
    padding: 0;
  }
  .slideUL i{
    margin-right:8px;
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
    background:#6f5b52 ;
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
