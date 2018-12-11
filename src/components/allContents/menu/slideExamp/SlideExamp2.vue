<template>
<div class="hindBox">
  <!--header-->
  <div class="header11">
     <p class="my">
       <a href=""><i class="iconfont">&#xe63c;</i></a>
       商品详情
     </p>
     <div class="rightSearch">
          <i class="iconfont" style="color: #666666; margin-right: 0;">&#xe62b;</i>
     </div>
  </div>
  <!--遮罩层-->
  <div class="hindPage">
    <div class="close"><i class="iconfont" style="color: white; margin-right: 1.3rem;font-size: 2.3rem;">&#xe509;</i></div>
    <h1>分享到社交网络</h1>
    <div class="more2">
      <a href="javascript:;"><i class="iconfont" style="color: #ff7d7c;">&#xe658;</i><span>新浪微博</span></a>
      <a href="javascript:;"><i class="iconfont" style="color: #70cf95;">&#xe717;</i><span>朋友圈</span></a>
      <a href="javascript:;"><i class="iconfont" style="color: #6fcf95;">&#xe5e3;</i><span>微信好友</span></a>
      <a href="javascript:;"><i class="iconfont" style="color: #69d1ed;">&#xe6d3;</i><span>QQ好友</span></a>
      <a href="javascript:;"><i class="iconfont" style="color: #555555;">&#xe657;</i><span>举报</span></a>
      <a href="javascript:;"><i class="iconfont" style="color: #555555;">&#xe6cf;</i><span>社会公约</span></a>
    </div>
  </div>
</div>
</template>
<script>
    import $ from "jquery"
    export default {
        name: "SlideExamp2",
      mounted() {
        //点击右上角三个点点显示遮罩层菜单  下面字体模糊（毛玻璃效果）
        $(".rightSearch").click(function(){
          $(".hindPage").fadeIn(300).css({
            display:"block"
          });
          $(".header11").css({
            "-webkit-filter":"blur(.1rem)"
          })
        });
        //点击close关闭分享遮罩层
        $(".close").click(function(){
          $(".header11").css({
            "-webkit-filter":"blur(0rem)"
          })
          $(".hindPage").css({
            display:"none"
          });
        })
      }
    }
</script>
<style scoped>
  .hindBox{
    position: relative;
    height:100% ;
    width: 40%;
  }
  .header11{
    width:100%;
    background: white;
    padding: 0rem 1.3rem;
    height:5rem;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border-bottom:0.2rem solid #e6e6e6 ;
    position: absolute;
    left: 0;
    top: 0;
    align-items: center;
  }
  .my{
    font-size: 1.7rem;
    margin: auto 0;

  }
  /*遮罩层*/
  .hindPage{
    width: 100%;
    height:450px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(66,66,66,.5);
    z-index: 2;
    display: none;
    /*visibility:collapse;*/
  }
  .close{
    width: 100%;
    height: 5rem;
    display:  -webkit-flex;
    justify-content: flex-end;
    align-items: center;
  }
  .more2{
    display:  -webkit-flex;
    flex-wrap: wrap;
    margin-top: 3rem;
  }

  .hindPage h1{
    font-size: 1.8rem;
    color: white;
    text-align: center;
    font-weight: 100;
    margin-top: 2.3rem;
  }
  .more2 a{
    display: block;
    text-align: center;
    width: 25%;
    height: 8rem;
  }
  .more2 span{
    display: block;
    color: white;
    font-size: 1.3rem;
    text-align: center;
  }
  .more2 i{
    font-size:3rem ;
    color: red;
  }
</style>
