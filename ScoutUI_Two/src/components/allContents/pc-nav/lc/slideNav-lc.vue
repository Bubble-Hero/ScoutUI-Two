<template>
    <!--...bootstrap....-->
    <div class="row" style="margin: 0;">
      <div class="col-xs-6 col-sm-3">

        <div class="sortBox">
          <div class="sortBox01  color01">
            <i class="iconfont">&#xe519;</i>
            <p>
              <span class="sortSpan01">总客户量</span>
              <span class="sortSpan02 sortSpan02Big">***<span class="sortSpan03">人</span></span>
            </p>
          </div>
          <div class="sortBox02">
            <i class="iconfont">&#xe519;</i>
            <span>总客户量</span>
          </div>
        </div>

      </div>
      <div class="col-xs-6 col-sm-3">

        <div class="sortBox">
          <div class="sortBox01  color02">
            <i class="iconfont">&#xe607;</i>
            <p>
              <span class="sortSpan01">总商家数</span>
              <span class="sortSpan02">***<span class="sortSpan03">个</span></span>
            </p>
          </div>
          <div class="sortBox02">
            <i class="iconfont">&#xe607;</i>
            <span>总商家数</span>
          </div>
        </div>

      </div>

      <!-- Add the extra clearfix for only the required viewport -->
      <div class="clearfix visible-xs-block"></div>



      <div class="col-xs-6 col-sm-3">

        <div class="sortBox">
          <div class="sortBox01  color03">
            <i class="iconfont">&#xe6eb;</i>
            <p>
              <span class="sortSpan01">总商品量</span>
              <span class="sortSpan02">***<span class="sortSpan03">个</span></span>
            </p>
          </div>
          <div class="sortBox02">
            <i class="iconfont">&#xe6eb;</i>
            <span>总商品量</span>
          </div>
        </div>

      </div>
      <div class="col-xs-6 col-sm-3">

        <div class="sortBox">
          <div class="sortBox01  color04">
            <i class="iconfont">&#xe63a;</i>
            <p>
              <span class="sortSpan01">合作伙伴</span>
              <span class="sortSpan02">**<span class="sortSpan03">个</span></span>
            </p>
          </div>
          <div class="sortBox02">
            <div class="sortBox02Parent">

            </div>
            <span style="font-size: 15px">特别合作伙伴</span>
          </div>
        </div>

      </div>
    </div>

</template>

<script>
  import $ from "jquery"
  export default {
    name: "CardComponents",
    data(){
      return{
        user:[]
      }
    },
    mounted(){
      //---------sort翻转------------
      $('.sortBox').each(function(){
        $(this).hover(
          function(){
            $(this).css({transform:'rotateY(-180deg)',transition: 'all 0.8s'})
          },
          function(){
            $(this).css({transform:'rotateY(0deg)',transition: 'all 0.4s'})
          }
        );
      })

    }



  }
</script>

<style scoped>
  @media (min-width: 768px) and (max-width: 1000px) {
    .sortSpan03{display: none;}
  }
  @media(max-width: 420px){
    .sortSpan03{display: none;}
  }


  .title{
    margin: 40px 0 15px 20px;
  }
  .title h2{
    font-size: 35px;
    color: rgba(255,255,255,.8);

  }
  .title span{
    font-size: 20px;
    margin-left: 10px;
    color: rgba(255,255,255,.6);

  }
  .col-xs-6{
  }
  .sortBox{
    display: flex;
    flex-wrap: wrap;
    position: relative;
    transform-style: preserve-3d;
    margin: 12px 1%;
  }
  .sortBox01{
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px 20px 10px 20px;
    border-radius: 7px;
  }
  .iconfont{
    font-size:45px;
    color: white;
  }
  .sortBox01 p{
    display: flex;
    white-space: pre-wrap;
    flex-direction: column;
    margin-left: 12px;
  }
  .sortSpan01{
    display: block;
    font-size: 14px;
    color: rgba(255,255,255,.6);
  }
  .sortSpan02{
    display: block;
    font-size: 25px;
    color: white;
  }

  .sortSpan03{
    padding: 1px 6px;
    font-size: 10px;
    color: #848484;
    background: rgba(255,255,255,.8);
    border-radius: 5px;
    margin-left: 6px;
  }

  .sortBox02{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #edebeb;
    padding: 20px;
    position: absolute;
    top: 0;
    transform-style: preserve-3d;
    transform: rotateY(-180deg) translateZ(1px);
    border-radius: 7px;
  }
  .sortBox02Parent img{
    margin: 2px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .sortBox02 i{
    font-size: 30px;
    color:#22a7f0 ;
  }
  .sortBox02 i:hover{
    color: #fa2a00;
    font-weight: 600;
  }
  .sortBox02 span{
    font-size: 20px;
    color:#22a7f0 ;
  }
  .color01{
    background: #d9544f;
  }
  .color02{
    background: #41a5ca;
  }
  .color03{
    background: #16a085;
  }
  .color04{
    background: #4b5f7a;
  }
</style>
