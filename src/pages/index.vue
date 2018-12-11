<template>
  <div class="all">
    <div class="swiper-container">
      <div class="swiper-wrapper buf">
        <div class="swiper-slide index-one">
          <h1>
            ScoutUI
          </h1>
          <h2>scoutUI一套基于vue2.0的组件库</h2>
          <a class="down" href="../../static/sourceCode.rar" download="">
            <i class="iconfont">&#xe625;</i>
            <span>
                   立即下载
                </span>
          </a>
          <div class="site-version">
            <span>当前版本：<cite class="site-showv">2.1.5</cite></span>
            <span><a class="log" @click="goLog">更新日志</a></span>
            <span>下载量：<em class="site-showdowns">300</em></span>
          </div>
          <div class="f-box">
            <router-link to="/compo" class="btn"><i class="iconfont">&#xe62d;</i>组件库</router-link>
            <router-link to="/case" class="btn"><i class="iconfont">&#xe697;</i><i class="iconfont"></i>实例</router-link>
            <router-link to="/team" class="btn"><i class="iconfont">&#xeb40;</i>团队</router-link>
            <a class="btn" href="https://github.com/Bubble-Hero" target="_blank"><i class="iconfont">&#xef45;</i>GITHUB</a>
          </div>
          <rotate-box></rotate-box>
          <copyright></copyright>
        </div>
        <div class="swiper-slide index-two">
          <case-detail></case-detail>
          <rotate-box></rotate-box>
        </div>
        <div class="swiper-slide index-three">
          <div class="butt">
            <router-link to="/index/logwebapp">
              <input type="button" value="移动端">
            </router-link>
            <router-link to="/index/logpc">
              <input type="button" value="pc端">
            </router-link>
          </div>
          <router-view></router-view>
        </div>

      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
  import Swiper from "swiper"
  import Copyright from "../components/footer-copyright/copyright";
  import RotateBox from "../components/rotateBox";
  import CaseDetail from "./caseDetail";
  import Logpc from "../components/log/logpc";

    export default {
        name: "index",
      components: {Logpc, CaseDetail, RotateBox, Copyright},
      methods:{
          swipers(){
            var swiper = new Swiper('.swiper-container',{
              direction : 'vertical',
              followFinger : false,
              speed:800,
              mousewheel:true,
              pagination : {
                el:'.swiper-pagination',
                clickable: true
              }
            });
          },
        goLog(){
            let sw=document.body.offsetHeight
          //  alert(document.body.offsetHeight)
          $(".buf").css({//"translate3d(-375px,0px,0px)",
            transform:function(){
              let transY=sw*-2
              return "translate3d(0px,"+transY+"px,0px)"    //拼接字符串
            },
            transitionDuration:"1000ms"
          })
          $($(".swiper-pagination-bullet")[2]).addClass("swiper-pagination-bullet-active")
          $($(".swiper-pagination-bullet")[2]).siblings().removeClass("swiper-pagination-bullet-active")
        }
        // down(){
        //   var url = "http://bgs09143010.gotoip1.com/bb.rar";
        //   window.open(url);
        // }
      },
      mounted(){
          this.swipers()
      }
    }
</script>

<style lang="scss" scoped>
  .all{
    height: 100%;
  }
  .swiper-wrapper{
    width: 100% !important;
    transition-delay:.3s;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
    margin:auto;
  }
  .swiper-slide {
    width: 100% !important;
    text-align: center;
    height: 100%;
    font-size: 18px;
    background: #fff;
    flex-direction: column;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    /*-webkit-justify-content: center;*/
    /*justify-content: center;*/
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
  }
  .index-one {
    //  background-image: linear-gradient(120deg,#155799,#159957);
    background: url("../../static/img/bbg.png");
    background-size: cover;
    .down{
      border: 1px solid #ccc;
      border-color: rgba(255, 255, 255, .2);
      padding: 1.4rem 2.2rem;
      color:#fffdef;
      font-size: 2rem;
      align-items: center;
      transition: border-radius .5s;
      i{
        font-size: 2.5rem;margin-right: .5rem;position: relative;top:.2rem;
      }
    }
    .down:hover{
      border-color: rgba(255, 255, 255, .3);
      color: #fff;
      background-color: rgba(255, 255, 255, .05);
      border-radius: 2.8rem;
      cursor: pointer;
    }
    h1 {
      color: #fff;
      font-size: 6rem;
      margin-top: 15rem;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 2.8rem;
      margin-bottom: 1rem;
    }
    .f-box {
      display: flex;flex-direction: row-reverse;
      padding-bottom:34rem;
      i{
        font-size: 1.8rem;
      }
    }
    .btn {
      padding: .5rem 1rem;
      border: 1px solid #c2c2c2;
      border-color: rgba(255, 255, 255, .2);
      font-size: 1.3rem;
      margin-left:2rem;
      color: #ccc;
      height: 3.3rem;
      i{
        position: relative;
        top:.2rem;
        margin-right: .3rem;
      }
    }
    .btn:hover {
      color: #fff;
      border-color: rgba(255, 255, 255, .3);
      background-color: rgba(255, 255, 255, .05);
    }
    .site-version {
      position: relative;
      margin-top: 15px;
      margin-bottom: 1.5rem;
      color: #eee;
      font-size: 12px;
      .log{
        color:#fff;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .site-version span {
      padding: 0 3px;
    }
  }
  .index-two{
    background: url("../../static/img/bg7.jpg");
    background-size: cover;
  }
  .index-three{
    background: url("../../static/img/bg5.jpg");
    background-size: cover;
  }
</style>
<style lang="scss">
  .swiper-pagination{
  .swiper-pagination-bullet-active{
    background-color:#28c0ac!important;
    }
  }
  .swiper-pagination-bullet {
    width: .8rem;height:.8rem;
  }
  .butt{
    text-align: left;
    margin-top: 4rem;
    input{
      width: 10rem;
      line-height: 2rem;
      background: none;
      border: 1px solid rgba(255,255,255,.4);
    }
  }

</style>
