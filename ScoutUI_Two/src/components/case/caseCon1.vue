<template>
  <div class="row">
    <ul>
      <li>
        <div class="col-md-6">
          <router-link to="/caseAnswer/caseAnswerCon1">
          <div class="con">
            <img src="../../assets/img/x1.png"/>
          </div>
          <div class="mask">
            <h2>美团响应式后台管理系统</h2>
          </div>
          </router-link>
        </div>
        <div class="col-md-6">
          <div class="con">
            <img src="../../../static/img/x2.png"/>
          </div>
          <div class="mask">
            <h2>Ms Li后台管理系统</h2>
          </div>
        </div>
      </li>
      <li>
        <div class="col-md-6">
          <div class="con">
            <img src="../../../static/img/x3.jpg"/>
          </div>
          <div class="mask">
            <h2>Ms Han后台管理系统</h2>
          </div>
        </div>
        <div class="col-md-6">
          <router-link to="/caseAnswer/caseAnswerCon2">
          <div class="con">
            <img src="../../../static/img/x4.jpg"/>
          </div>
          <div class="mask">
            <h2>Ms Wang后台管理系统</h2>
          </div>
          </router-link>
        </div>
      </li>
      <li>
        <div class="col-md-6">
          <div class="con">
            <img src="../../../static/img/x5.png"/>
          </div>
          <div class="mask">
            <h2>帝爵钻戒响应式</h2>
          </div>
        </div>
        <div class="col-md-6">
          <div class="con">
            <img src="../../../static/img/x6.jpg"/>
          </div>
          <div class="mask">
            <h2>amaze后台管理系统</h2>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  import $ from 'jquery'
    export default {
        name: "caseCon1",
      mounted() {
        $(".con").hover(function () {
          $(this).find(".mask").css({"top": "0px","opacity":"0.5"})
        }, function () {
          $(this).find(".mask").animate({"top": "-400px","opacity":"0"})
        })

      }
    }
</script>

<style scoped>
  .row{
    width: 100%;
    height: 400px;
  }
  .row ul{list-style: none;
  padding: 0}
  .row ul li{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 45px;
  }
  .col-md-6{
    position: relative;
    width: 48%;
    height: 400px;
    background:linear-gradient(to bottom,#fff,#f2f2f2);
    overflow: hidden;
    box-shadow:6px 7px 4px #e2dee0;
    border-radius: 5px;
  }
  .col-md-6:hover .mask{
    transform: translateY(400px);
    transition: all 0.5s;
  }
  .con img{
    width: 100%;
    height: 400px;
  }
  .mask{
    position: absolute;
    top: -400px;
    left: 0;
    width: 100%;
    height: 400px;
    background: #000;
    opacity: 0.7;
    display: flex;
  }
  .mask h2{
    text-align: center;
    line-height: 2;
    color: #fff;
    margin: auto;
  }
</style>
