<template>
<div class="shareToBox">
     <!--...footer...-->
     <footer>
          <input type="text" placeholder="评论一下"/>
          <div class="share">
            <p class="footeriShare cur" @click="goTop">
              <i class="iconfont footeri">&#xe6d4;</i>
              <span>分享</span>
            </p>
            <p class="cur">
              <i class="iconfont footeri">&#xe5e3;</i>
              <span>评论</span>
            </p>
            <p class="cur">
              <i class="iconfont footeri">&#xe637;</i>
              <span>收藏</span>
            </p>
          </div>
        </footer>

     <!--..shareTo...-->
     <div class="shareTo">
          <p>分享到</p>
          <div class="shareToi">
            <a href="javascript:void(0)">
              <i class="iconfont shareToi01">&#xe61c;</i>
              <span>微信好友</span>
            </a>
            <a href="javascript:void(0)">
              <i class="iconfont shareToi02">&#xe5e3;</i>
              <span>朋友圈</span>
            </a>
            <a href="javascript:void(0)">
              <i class="iconfont shareToi03">&#xe6d3;</i>
              <span>QQ</span>
            </a>
            <a href="javascript:void(0)">
              <i class="iconfont shareToi04">&#xe658;</i>
              <span>微博</span>
            </a>
            <a href="javascript:void(1)">
              <i class="iconfont shareToi05">&#xe648;</i>
              <span>github</span>
            </a>
            <a href="javascript:void(1)">
              <i class="iconfont shareToi06">&#xe719;</i>
              <span>更多</span>
            </a>
          </div>
          <div class="off"  @click="goBottom">取消</div>
        </div>

</div>
</template>

<script>
  import $ from "jquery"
  export default {
    name: "SlideExamp3",
    methods: {

      goTop(){
        //  点击分享
        $(".shareTo").stop().slideToggle("slow")
      },
      goBottom(){
        //  点击分享
        $(".shareTo").stop().slideToggle("slow")
      }
    }
  }
</script>

<style scoped>
.shareToBox{
  position: relative;
  height: 43rem;
  width: 40%;
}
.cur{
  cursor: pointer;
}
  /*...footer..*/
  footer{
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: .8rem 1.2rem;
    background: #fafafa;
    border-top: .1rem solid #f4f4f4;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  footer input{
    width: 20.4rem;
    height: 3.4rem;
    border: .1rem solid #e3e3e3;
    border-radius:.6rem ;
    color: #cdcdcd;
    font-size: 1.4rem;
    text-indent: .6rem;
  }
  .share{
    width: 100%;
    display:flex ;
    justify-content: space-between;
    padding: 0  1.2rem;
  }
  .share span{
    font-size: 1.2rem;
    color: #848484;
  }
  .share p{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .footeri{
    font-size: 1.4rem;
    color: #838383;
    text-align: center;
  }
  /*....shareTo....*/
  .shareTo{
    width: 94%;
    margin: 3%;
    margin-bottom: 1rem;
    background: #daf0ee;
    border-radius: .8rem;
    z-index: 3;
    position: absolute;
    left: 0;
    bottom: 0;
    display: none;
    cursor: pointer;
  }
  .shareTo p{
    width: 100%;
    height: 5.6rem;
    line-height: 5.6rem;
    text-align: center;
    font-size: 1.4rem;
    color: #272727;
    font-weight: bold;
  }
  .shareToi{
    display: flex;
    flex-wrap: wrap;
    padding: .5rem 0;
  }
  .shareToi a{
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .shareToi a i{
    font-size:3.2rem ;
    text-align: center;
  }
  .shareToi a span{
    font-size: 1.2rem;
    text-align: center;
    margin:.8rem;
  }
  .off{
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    font-size: 1.3rem;
    color: #8f8b8b;
    border-top: .1rem solid #cecccc;
  }
  .shareToi01{
    color: #45c77c;
  }
  .shareToi02{
    color: #1ae871;
  }
  .shareToi03{
    color: #30cff1;
  }
  .shareToi04{
    color: #edc00e;
  }
  .shareToi05{
    color: #565348;
  }
  .shareToi06{
    color: #18dba6;
  }
</style>
