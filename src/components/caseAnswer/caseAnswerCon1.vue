<template>
    <div>
      <div class="anchor">
        <h3 id="App_统计分析（重构中）">美团后台管理系统</h3>
        <a href="#App_统计分析（重构中）">#</a>
      </div>
      <div class="ivu-row" style="margin-left: -16px; margin-right: -16px;">
        <div class="ivu-col ivu-col-span-10"
             style="padding-left: 16px; padding-right: 16px;">
          <p>美团后台管理系统是一体化数据产品，实现换肤及连接实时更新数据功能。</p>
        </div><!--v-component-->
        <div class="ivu-col ivu-col-span-14" style="padding-left: 16px; padding-right: 16px;">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../../static/img/x11.png"/></div>
            <div class="swiper-slide"><img src="../../../static/img/x12.png"/></div>
            <div class="swiper-slide"><img src="../../../static/img/x13.png"/></div>
          </div>
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div><!--v-component-->
      </div>
    </div>
</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"
  import "swiper/dist/js/swiper.min"
    export default {
        name: "caseAnswerCon1",
      mounted(){
        var swiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      },
    }
</script>

<style scoped>
  .anchor a {
    opacity: 0;
    font-size: 24px;
    -webkit-transition: opacity .2s ease-in-out;
    transition: opacity .2s ease-in-out;
    margin-left: 5px;
    position: relative;
    top: 2px;
  }
  .ivu-row {
    margin-left: 0;
    margin-right: 0;
    height: auto;
    zoom: 1;
    display: block;
    position: relative;
  }
  .ivu-col-span-10{
    height: 40px;
  }
  .ivu-col-span-10 p{
    line-height: 20px;
    font-size: 14px;
  }
  .swiper-container{
    width: 90%;
  }
  img{width: 80%;
  margin: 0 auto}
  .swiper-button-prev, .swiper-container-rtl .swiper-button-next{
    left: 108px;
  }
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
    right: 108px;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
