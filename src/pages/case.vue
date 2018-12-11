<template>
    <div class="row">
      <!-----头部------->

      <header>
      </header>
      <div class="logo">
        <!--<img src="../../assets/img/LOGO-transparent.png" >-->
        <router-link tag="p" to="/index" style="cursor: pointer">Scout<b style="">UI</b></router-link>
      </div>
      <!------banner----->
      <div class="banner"></div>
      <section>
        <ul class="nav">
          <li class="am-active am1">
            <router-link to="/case/caseCon1">响应式</router-link>
          </li>
          <li class="am-active am2">
            <router-link to="/case/caseCon2">移动站</router-link>
          </li>
        </ul>
          <router-view></router-view>
      </section>
    </div>
</template>

<script>
  import $ from "jquery"
    export default {
        name: "case",
      mounted(){
        $(".am-active").click(function () {
          $(this).css({background:"#17b6ad",color:"white"})
          $(this).siblings().css({"background":"#f2f2f2",color:"#17b6ad"})
        });
      }
    }
</script>

<style scoped>
  .logo{
    width: 10rem;
    height: 7rem;
    position: absolute;
    left: 3%;
    top: 22%;
    z-index: 136;
    font-size: 4.8rem;
    color: #fff;
  }
  .row{
    background:#fff;
  }
  .banner{width: 100%;
  height:300px;
  background:url("../assets/img/backimg4.jpg")}
  section{
    width:90%;
  margin: auto;
 }
  .nav{
    width: 100%;
    height: 50px;
    line-height:50px;
    display: flex;
    list-style: none;
    margin: 20px;

  }
  .nav li{
    width:10%;
    margin-right: 5%;
    text-align: center;
    color: #17b6ad;
    }

  a{
    width: 100%;
    text-decoration: none;
  display: block}
  .link-exact-active{
    background:#17b6ad ;
    color: #fff;
  }
  /*.nav li a{*/
    /*text-decoration: none;*/
    /*color: #17b6ad;*/
    /*display: block;*/
    /*border: 1px solid #F2F2E7}*/
  /*.nav li a:hover{background:#F2F2E7}*/
  .am-nav {
    margin-bottom: 0;
    padding: 0;
    list-style: none;
  }
  .am1{
    background: #17b6ad;
    color: #fff;
  }
</style>
