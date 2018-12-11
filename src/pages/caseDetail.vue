<template>
  <div class="all">
    <div class="layout">
      <div class="screen_half" id="sysIOS">
        <div class="screen_phone" style="right: -18%;">
          <div class="videoBox">
            <img src="../../static/img/IphoneXR.png" class="ios" @click="videoPause">
            <VIDEO src="../../static/mp4/MeiTuan.mp4" class="MP4" controls="controls">
              <!--<source src="../../static/mp4/MeiTuan.mp4" type="video/mp4">-->
            </VIDEO>
          </div>
          <a href="http://bgs09143010.gotoip1.com" class="goAPP" target="_blank">前往WebAPP</a>
        </div>
        <div class="txt">
          最新版本： 3.1.0　　[
          <a href="###" target="_blank">
            <strong>Android下载</strong>] [</a>
          <a href="https://itunes.apple.com/cn/app/yan-se-fen-xiang-yin-le-shi/id1147477270?mt=8"
             target="_blank"><strong>AppStore</strong>]</a><br>
          [MD5:B6F124CA76EFD3464DCD51D09D8DFC40]<br>各大应用市场均有下载
        </div>
        <div class="mask" style="right: 0px;"></div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from "jquery"
    export default {
        name: "caseDetail",
      methods:{
        videoPause(){
          if($(".MP4")[0].paused){
            $(".MP4")[0].play()
          }else{
            $(".MP4")[0].pause()
          }
        }
      },
      mounted(){
          $(".screen_half").hover(function () {
            $(this).find(".mask").css({ "transform":"translateX(1000px)",
            "transition":"all 0.8s"})
            $(this).find(".txt").css({ "transform":"translateX(-150px)",
              "transition":"all 0.8s"})
            $(this).find(".screen_phone").css({ "transform":"translateX(-380px)",
              "transition":"all 0.8s"})
            $(".MP4")[0].play()
          },function () {
            $(this).find(".mask").css({"transform":"translateX(0px)",
              "transition":"all 0.8s"})
            $(this).find(".txt").css({ "transform":"translateX(35%)",
              "transition":"all 0.8s"})
            $(this).find(".screen_phone").css({ "transform":"translateX(-5%)",
              "transition":"all 0.8s"})
            $(".MP4")[0].pause()
          })
      }
    }
</script>

<style lang="scss" scoped>
  #app{
    width: 100%;
    height: 100%;
   background: url("../assets/img/bg1.png");
  }
  .all{
    width: 100%;
    font: normal 12px/26px Tahoma;
    background: #EEE url(../assets/img/bg1.png) no-repeat center center;
    background-size: cover;
    height: 100%;
    overflow: hidden
  }
  .layout {
    width: 100%;
    position: relative;
    height:800px;
    overflow: hidden;
  }
  #sysIOS{
    right: 0;
  }
  .screen_half {
    width: 90%;
    position: absolute;
    height: 100%;
  }
  .screen_half .txt{
    width: 306px;
    line-height: 25px;
    position: absolute;
    left: 45%;
    top: 40%;
    margin-top: -90px;
    color: #666;
    padding-top: 150px;
    background-repeat: no-repeat;
    text-align: center;
  }
  #sysIOS	.txt {
    background-image: url(../assets/img/txt_ios.png);
    left: 38%;
    margin-left: -300px;
  }
  #sysIOS	.screen_phone {
  //  background: url(../assets/img/ios.png);
    right: -166px;
  }
  .screen_phone {
    width: 332px;
    height: 586px;
    position: absolute;
    top: 30%;
    margin-top:-15%;
  }
  #sysIOS .mask {
    background: url("../assets/img/mask_r.png") no-repeat;
    background-size:100% 100%;

  }
  .mask {
    width: 100%;
    max-width: 960px;
    position: absolute;
    height: 800px;
    top: 0;
    right: 0;
  }
  .ios{
    width: 100%;
   // height: 100%;
    position: relative;
    z-index: 2;
  }
  .videoBox{
    position: relative;
  }
  .MP4{
    margin: 0 auto;
    width: 304px;
    position: absolute;
    top: 17px;
    left: 14px;
    height: 632px;
    z-index: 1;
  }
  .goAPP{
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
    transition: color .5s;
    font-size: 20px;
    text-align: center;
  }
  .goAPP:hover{
    color:#28c0ac;
  }
</style>
