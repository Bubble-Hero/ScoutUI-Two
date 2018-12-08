<template>
    <div class="comm">
      <div class="title">
        <img src="../../../static/img/LOGO-transparent.png" alt="">
        <p>Scout<span>UI</span>社区</p>
        <ul>
          <li>
            <i class="iconfont">&#xe5e3;</i>
            <span>交流</span>
          </li>
          <li>
            <i class="iconfont">&#xe63d;</i>
            <span>专区</span>
          </li>
        </ul>
      </div>
      <div class="inter">
        <ul>
          <li>
            <img src="../../../static/img/n-t-1.png" alt="">
            <span>分享</span>
            <p> 表格实现部分复选框不能选中的一种实现方式（in tablePlug）</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "comm"
    }
</script>

<style lang="scss" scoped>
  .comm{
    margin-left: 9rem;
    background: red;
    width: 60rem;
    margin-bottom: 20rem;
    .title{
      display: flex;
      padding-left: 3rem;
      background: #333;
      img{
        width: 3.5rem;
        height: 3.5rem;
        margin-top: .3rem;
      }
      p{
        line-height: 4rem;
        font-size: 2rem;
        color: #17b6ad;
        span{
          color: #641385;
        }
      }
      ul{
        display: flex;
        padding-left: 3rem;
        li{
          color: #fff;

          padding: 0 1.5rem;
          padding-top: 1.4rem;
        }
      }
    }
    .inter{
      width: 100%;
      ul{
        line-height: 6rem;
        padding-top: 3rem;
        padding-left: 2.5rem;
        li{
          display: flex;
          img{
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 50%;
          }
          span{
            width: 3rem;
            height: 1.5rem;
            line-height: 1.5rem;
            border-radius: .4rem;
            border: 1px solid #17b6ad;
            margin-left: 1.5rem;
            color: #17b6ad;
          }
          p{
            line-height: 2rem;
            height: 2rem;
            padding-left: 1rem;
            color: dimgray;
          }
        }
      }
    }
  }
</style>
