<template>
    <div class="row">
      <ul>
        <li>
          <div class="col-md-4">
            <router-link to="/caseDetail">
            <div class="con">
              <img src="../../assets/img/a1.png"/>
            </div>
            <div class="mask"></div>
            </router-link>
          </div>
          <div class="col-md-4">
            <div class="con">
              <img src="../../../static/img/a2.png"/>
            </div>
            <div class="mask"></div>
          </div>
          <div class="col-md-4">
            <div class="con">
              <img src="../../../static/img/a3.png"/>
            </div>
            <div class="mask"></div>
          </div>
          <div class="col-md-4">
            <div class="con">
              <img src="../../../static/img/a4.png"/>
            </div>
            <div class="mask"></div>
          </div>
        </li>
        <li>
          <div class="col-md-4">
            <div class="con">
              <img src="../../assets/img/a1.png"/>
            </div>
            <div class="mask"></div>
          </div>
          <div class="col-md-4">
            <div class="con">
              <img src="../../assets/img/a1.png"/>
            </div>
            <div class="mask"></div>
          </div>
          <div class="col-md-4">
            <div class="con">
              <img src="../../assets/img/a1.png"/>
            </div>
            <div class="mask"></div>
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
   box-shadow: 2px 2px 1px #FFC3FD;

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
     opacity: 0.5;
   }

</style>
