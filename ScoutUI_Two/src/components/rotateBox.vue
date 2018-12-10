<template>
  <div class="rotage-box">
    <div class="wrap">
      <div class="box1 box">nodeJs</div>
      <div class="box2 box">ScoutUI</div>
      <div class="box3 box">VUE</div>
      <div class="box4 box">Webpack</div>
      <div class="box5 box">Node</div>
      <div class="box6 box">
        <router-link to="/index">
        <img src="../../static/img/LOGO-transparent.png" width="80" height="80">
      </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "rotateBox"
    }
</script>

<style lang="scss" scoped>
  @-webkit-keyframes boxspin{
    0%{
      -webkit-transform:rotateX(0deg) rotateY(0deg) rotate(0deg);
      -webkit-transform-origin:center center
    }
    to{
      -webkit-transform:rotateX(180deg) rotateY(180deg) rotate(180deg);
      -webkit-transform-origin:center center
    }
  }
  .rotage-box .wrap {
    height: 100%;
    position: relative;
    -webkit-transform-style: preserve-3d;
    -webkit-perspective: 0;
    -moz-perspective: 0;
    -webkit-animation: boxspin 5s ease infinite;
    -moz-animation: boxspin 5s ease infinite;
  }
  .rotage-box {
    min-width: 100px;
    min-height: 100px;
    padding: 25px;
    position: absolute;
    right: 100px;
    bottom: 50px;
    z-index: 9999;
  }
  .rotage-box .box {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -40px 0 0 -40px;
    line-height: 80px;
    text-align: center;
    font-size: 13.33333333px;
    color: #fff;
  }
  .rotage-box .box1 {
    -webkit-transform: rotatey(90deg) translatez(-40px);
    -moz-transform: rotatey(90deg) translatez(-40px);
    background: rgba(128,0,128,.5);
  }
  .rotage-box .box2 {
    -webkit-transform: rotatey(90deg) translatez(40px);
    -moz-transform: rotatey(90deg) translatez(40px);
    background: rgba(255,0,255,.5);
  }
  .rotage-box .box3 {
    -webkit-transform: rotatex(90deg) translatez(40px);
    -moz-transform: rotatex(90deg) translatez(40px);
    background: rgba(255,153,204,.5);
  }
  .rotage-box .box4 {
    -webkit-transform: rotatex(90deg) translatez(-40px);
    -moz-transform: rotatex(90deg) translatez(-40px);
    background: rgba(0,204,255,.5);
  }
  .rotage-box .box5 {
    -webkit-transform: translatez(-40px);
    -moz-transform: translatez(-40px);
    background: rgba(153,204,255,.5);
  //background: rgba(0,255,255,.5);
  }
  .rotage-box .box6 {
    -webkit-transform: translatez(40px);
    -moz-transform: translatez(40px);
    background: rgba(153,204,255,.1);

  }
</style>
