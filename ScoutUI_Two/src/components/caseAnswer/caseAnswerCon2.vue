<template>
  <div>
    <div class="anchor">
      <h3 id="MarketingCloud_营销云">MarketingCloud 营销云</h3>
      <a href="#MarketingCloud_营销云">#</a>
    </div>
    <div class="ivu-row" style="margin-left: -16px; margin-right: -16px;">
      <div class="ivu-col ivu-col-span-10"
           style="padding-left: 16px; padding-right: 16px;">
        <p>Marketing Cloud营销云是一体化数据营销产品，提供360度客群特征分析服务，用大数据全面构建人群画像。</p>
        <p><a href="https://www.talkingdata.com/product-MarketingCloud.jsp?languagetype=zh_cn" target="_blank">立即访问</a></p>
      </div><!--v-component--> <div class="ivu-col ivu-col-span-14" style="padding-left: 16px; padding-right: 16px;">
      <div class="ivu-carousel">
        <button class="left ivu-carousel-arrow ivu-carousel-arrow-hover">
          <i class="ivu-icon ivu-icon-chevron-left"></i><!--v-component-->
        </button>
        <div class="ivu-carousel-list">
          <div class="ivu-carousel-track" style="width: 1638px; transform: translate3d(0px, 0px, 0px); transition: transform 500ms ease 0s;">
            <div class="ivu-carousel-item" style="width: 546px; height: auto; left: 0px;"><div class="demo-case-img"> <img src="/dist/b87a413b52a2214950166811dd1aca4a.png"> </div></div><!--v-component--> <div class="ivu-carousel-item" style="width: 546px; height: auto; left: 0px;"><div class="demo-case-img"> <img src="/dist/f100d5f1eb363157f3b4657bd2f82cf5.png"> </div></div><!--v-component--> <div class="ivu-carousel-item" style="width: 546px; height: auto; left: 0px;"><div class="demo-case-img"> <img src="/dist/536d470d2bb6a15d31c3eb221d8fecd9.png"> </div></div><!--v-component-->
          </div>
        </div>
        <button class="right ivu-carousel-arrow ivu-carousel-arrow-hover">
          <i class="ivu-icon ivu-icon-chevron-right"></i><!--v-component-->
        </button>
        <ul class="ivu-carousel-dots ivu-carousel-dots-outside">
          <!--v-for-start--><li class="ivu-carousel-active">
          <button></button>
        </li><li>
          <button></button>
        </li><li>
          <button></button>
        </li><!--v-for-end-->
        </ul>
      </div><!--v-component-->
    </div><!--v-component-->
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"
  import "swiper/dist/js/swiper.min"
    export default {
        name: "caseAnswerCon2",
      mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          loop:true
        })
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
    left: 96px;
  }
  .swiper-button-next, .swiper-container-rtl .swiper-button-prev{
    right: 96px;
  }
</style>
