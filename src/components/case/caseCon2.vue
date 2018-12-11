<template>
    <div class="row">
      <ul>
        <li>
          <div class="col-md-4">
            <router-link to="/caseDetail">
            <div class="con">
              <img src="../../assets/img/a1.png"/>
            </div>
            <div class="mask">
              <div class="maskcon">
                <h2>美团App</h2>
                <p>外卖网|外卖订餐|快餐外卖</p>
              </div>
            </div>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link to="/caseDetail">
            <div class="con">
              <img src="../../../static/img/a2.png"/>
            </div>
            <div class="mask">
              <div class="maskcon">
                <h2>堆糖App</h2>
                <p>美好生活研究所</p>
              </div>
            </div>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link to="/caseDetail">
            <div class="con">
              <img src="../../../static/img/a3.png"/>
            </div>
            <div class="mask">
              <div class="maskcon">
                <h2>荔枝App</h2>
                <p>用声音在一起,直播听音乐相声评书</p>
              </div>
            </div>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link to="/caseDetail">
            <div class="con">
              <img src="../../../static/img/a4.png"/>
            </div>
            <div class="mask">
              <div class="maskcon">
                <h2>考研帮App</h2>
                <p>让考研简单不孤单</p>
              </div>
            </div>
            </router-link>
          </div>
        </li>
        <li>
          <div class="col-md-4">
            <router-link to="/caseDetail">
            <div class="con">
              <img src="../../../static/img/a5.jpg"/>
            </div>
            <div class="mask">
              <div class="maskcon">
                <h2>每日优鲜App</h2>
                <p>让每个人随时随地享受食物的美好</p>
              </div>
            </div>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link to="/caseDetail">
            <div class="con">
              <img src="../../../static/img/a6.jpg"/>
            </div>
            <div class="mask">
              <div class="maskcon">
                <h2>链家App</h2>
                <p>连接每个家的故事</p>
              </div>
            </div>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link to="/caseDetail">
            <div class="con">
              <img src="../../../static/img/a7.jpg"/>
            </div>
            <div class="mask">
              <div class="maskcon">
                <h2>金山词霸App</h2>
                <p>在线词典_在线翻译</p>
              </div>
            </div>
            </router-link>
          </div>
          <div class="col-md-4">
            <router-link to="/caseDetail">
            <div class="con">
              <img src="../../../static/img/a8.png"/>
            </div>
            <div class="mask">
              <div class="maskcon">
                <h2>京东App</h2>
                <p>多快好省,只为品质生活</p>
              </div>
            </div>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "caseCon2",
    }
</script>

<style scoped>
  .row{width: 100%}
  .row ul{

  }
  .row ul li{
    width: 100%;
    list-style: none;
    height: 525px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
  }
  .row ul li a{
    width: 25%;
  }
  .col-md-4{
      width: 20%;
      height:525px;
    flex: none;
    /*background: #fff;*/
    border-radius: 5px;
    position: relative;
    overflow: hidden;
   box-shadow: -4px 4px 5px 2px #e9e8f082;

 }
  .col-md-4:hover .mask{
    transform: translateY(650px);
    transition: all 0.5s;
  }
  .con{display: flex;}
  .con img{
    width: 90%;
    height:525px;
    margin: auto
  }
  .mask{
     position: absolute;
     top: -650px;
     left: 0;
     width: 100%;
     height: 650px;
     background: #000;
     opacity: 0.7;
    display: flex;
   }
  .maskcon{
    margin:90% auto;
  }
  .mask h2{
    text-align: center;
    line-height:0.5;
    color: #fff;

  }
  .mask p{
    color: #fff;
    line-height:4;
  }
</style>
