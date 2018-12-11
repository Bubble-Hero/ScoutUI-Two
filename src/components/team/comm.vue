<template>
  <div style="height: 100%">
    <div class="nora">
      <div class="comm">
        <div class="title">
          <router-link to="/index">
            <img src="../../../static/img/LOGO-transparent.png" alt="">
          </router-link>
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
            <li v-for="(p,index) in list">
              <img :src="p.img" alt="">
              <div class="left">
                <div class="argu">
                  <span>{{p.span4}}</span>
                  <p>{{p.p}}</p>
                </div>
                <div class="name">
                  <span>{{p.span1}}</span>
                  <span>{{p.span2}}</span>
                  <a href="">
                    <i class="iconfont">&#xe61a;</i>
                    <span>{{p.span3}}</span>
                  </a>
                  <a href="" class="posi">
                    <i class="iconfont">&#xe5e3;</i>
                    <span>{{p.span5}}</span>
                  </a>
                </div>
              </div>

            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="arr">
          <p class="tit" style="background: #333;color: #fff;">本周热议</p>
          <ul>
            <li v-for="(c,i) in lis">
              <p>{{c.p}}</p>
              <a href="">
                <i class="iconfont">&#xe5e3;</i>
                <span>{{c.span}}</span>
              </a>
            </li>

          </ul>
        </div>
        <div class="atten">
          <img src="../../../static/img/ewm.jpg" alt="">
          <p>扫码关注ScoutUI公众号</p>
        </div>
      </div>
    </div>
    <copyright></copyright>
  </div>
</template>

<script>
    import Copyright from "../footer-copyright/copyright";
    export default {
        name: "comm",
      components: {Copyright},
      data(){
           return{
            list:[
              {
                "img":"../../../static/img/n-t-1.png",
                "p":"表格实现部分复选框不能选中的一种实现方式（in tablePlug）",
                "span1":"岁月小偷",
                "span2":"2018-11-22",
                "span3":"80",
                "span4":"分享",
                "span5":"23"
              },
              {
                "img":"../../../static/img/n-x-3.png",
                "p":"scoutui 常见表单排版,水平+垂直排版",
                "span1":"Jasmine_w",
                "span2":"2018-12-06",
                "span3":"6",
                "span4":"提问",
                "span5":"34"
              },
              {
                "img":"../../../static/img/n-x-1.png",
                "p":" 使用第三方全屏JS插件后，layer全部被遮挡的问题",
                "span1":"Jasmine_w",
                "span2":"2天前",
                "span3":"12",
                "span4":"提问",
                "span5":"45"
              },
              {
                "img":"../../../static/img/n-x-2.png",
                "p":" 表单多选 怎么改变name和value",
                "span1":"Jasmine_w",
                "span2":"1天前",
                "span3":"56",
                "span4":"提问",
                "span5":"56"
              },
              {
                "img":"../../../static/img/n-x-3.png",
                "p":"scoutui 常见表单排版,水平+垂直排版",
                "span1":"Jasmine_w",
                "span2":"2018-12-06",
                "span3":"6",
                "span4":"提问",
                "span5":"34"
              }
            ],
            lis:[
              {
                "p":"百思不得其解, view问题",
                "span":"23"
              },
              {
                "p":"ScoutUI提供的iframe的是传统的开发,不是跟单页版的一样吧",
                "span":"43"
              },
              {
                "p":"求解决这个问题",
                "span":"16"
              },
              {
                "p":"ScoutUI开关渲染一直不出来啊",
                "span":"4"
              },
              {
                "p":"ScoutUI下载文件一直有问题，求解",
                "span":"8"
              }
            ]
          }
        }
    }
</script>

<style lang="scss" scoped>
  .nora{
    margin-top: 30rem;
    display: flex;
    margin-right: 9rem;
    .comm{
      margin-left: 9rem;
      /*background: red;*/
      width: 100%;
      //margin-bottom: 20rem;
      //overflow: hidden;
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
          /*padding-top: 3rem;*/

          li{
            display: flex;
            padding: 1.5rem 0;
            padding-left: 2.5rem;
            border-bottom: 1px #ccc dashed;
            img{
              width: 4.5rem;
              height: 4.5rem;
              border-radius: 50%;
            }
            .left{
              padding-top: .7rem;
              position: relative;
              .argu{
                display: flex;
                /*background: blue;*/
                height: 2rem;
                span{
                  display: inline-block;
                  width: 3rem;
                  height: 1.5rem;
                  line-height: 1.5rem;
                  border-radius: .4rem;
                  border: 1px solid #17b6ad;
                  margin-left: 1.5rem;
                  color: #17b6ad;
                  margin-top: .2rem;
                  text-align: center;
                }
                p{
                  line-height: 2rem;
                  height: 2rem;
                  padding-left: 1rem;
                  color: dimgray;
                }

              }
              .name{
                display: flex;
                height: 2rem;
                line-height: 2rem;
                /*padding-top: .2rem;*/
                padding-left: 1.5rem;
                span{
                  padding-right: 2rem;
                }
              }
            }
          }
        }
      }
    }
    .right{
      width: 34rem;
      height: 50rem;
      margin-left: 5rem;
      .arr{

        p{
          text-align: left;
          padding-left: 2rem;
          line-height: 4rem;
          font-size: 1.4rem;
          border-bottom: 1px solid #ccc;
        }
        ul{
          padding-top: 1.5rem;
          border: 1px solid #ccc;
          border-top: 0;
          li{
            display: flex;
            padding-right: .5rem;
            p{
              border-bottom: 0;
              width: 78%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 3rem;
            }
            a{
              //padding-top: 1.3rem;
              margin-left: 3rem;
            }
          }
        }
      }
      .atten{
        width: 34rem;
        height: 20rem;
        /*background: red;*/
        border: 1px solid #ccc;
        margin-top: 3rem;
        /*margin-left: 1rem;*/
        img{
          margin: 2rem auto;
          margin-bottom: 1rem;
        }
        p{
          font-size: 1.4rem;
          text-align: center;
        }
      }
    }
  }
</style>
