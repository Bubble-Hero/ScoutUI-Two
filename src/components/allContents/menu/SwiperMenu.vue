<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>菜单组件</h1>
      </div>


      <!----------------------------------------组件介绍框3-->
      <div class="introBox">
        <h1>轮播菜单</h1>
        <div class="introBoxContent">
          <h2>用途：用于展示商品，三层嵌套，基于swiper。</h2>
        </div>
      </div>
      <!--代码展示框2-->
      <div class="codeBox introBox">
        <h1>代码展示</h1>
        <div class="introBoxContent" style="height: 300px;overflow: auto;">
          <!--------------------------------下方是代码展示区-->
          <script type="syntaxhighlighter" class="brush:html"><![CDATA[
{{data1}}
          ]]></script>
          <script type="syntaxhighlighter" class="brush:js"><![CDATA[
{{data2}}
          ]]></script>
          <script type="syntaxhighlighter" class="brush:css"><![CDATA[
{{data3}}
          ]]></script>

          <!--------------------------------上方是代码展示区-->
        </div>
      </div>
      <!--效果展示框2-->
      <div class="showBox introBox">
        <h1>效果展示</h1>
        <!--效果展示盒子，放完效果将内联高度删除-->
        <div class="introBoxContent" style="height: 400px;width: 50%;">
          <!--------------------------------下方是效果组件展示区-->
          <second></second>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Second from "./swiperlist/second";
  export default {
    name: "SwiperMenu",
    components: {Second},
    data(){
      return{
          data1:"<div class=\"nearnav-li\">\n" +
            "        <div class=\"swiper-container\">\n" +
            "            <div class=\"swiper-wrapper buf4 nav-ul\">\n" +
            "              <div v-for=\"(bb,index) in items[0]\" class=\"secondNav\"><a class=\"secondNav-a\">{{bb.title}}</a></div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"swiper-container childSwiper\">\n" +
            "          <div class=\"swiper-wrapper buf3\" style=\"height: 100%;\">\n" +
            "            <div class=\"swiper-slide\">\n" +
            "              <ul class=\"life-ul\">\n" +
            "                <li v-for=\"(cc,index) in items[1]\">\n" +
            "                  <router-link to=\"\">\n" +
            "                  <div class=\"left-picture\">\n" +
            "                    <img :src=\"cc.pic1\" alt=\"\">\n" +
            "                  </div>\n" +
            "                  <div class=\"right-other\">\n" +
            "                    <div class=\"other-top\">\n" +
            "                      <p>{{cc.p1}}</p>\n" +
            "                      <span>{{cc.span1}}</span>\n" +
            "                    </div>\n" +
            "                    <div class=\"other-cen\">\n" +
            "                      <img :src=\"cc.pic2\" alt=\"\">\n" +
            "                      <span>{{cc.span2}}</span>\n" +
            "                      <span>{{cc.span3}}</span>\n" +
            "                    </div>\n" +
            "                    <div class=\"sale\">{{cc.sale}}</div>\n" +
            "                    <div class=\"last\">\n" +
            "                      <img v-for=\"(iss,tss) in cc.pic3\" :src=\"iss\" alt=\"\">\n" +
            "                      <p>{{cc.p2}}</p>\n" +
            "                    </div>\n" +
            "                  </div>\n" +
            "                  </router-link>\n" +
            "                  </li>\n" +
            "              </ul>\n" +
            "            </div>\n" +
            "            <div class=\"swiper-slide\">\n" +
            "              <ul class=\"life-ul\">\n" +
            "                <li v-for=\"(cc,index) in items[2]\">\n" +
            "                  <router-link to=\"\">\n" +
            "                    <div class=\"left-picture\">\n" +
            "                      <img :src=\"cc.pic1\" alt=\"\">\n" +
            "                    </div>\n" +
            "                    <div class=\"right-other\">\n" +
            "                      <div class=\"other-top\">\n" +
            "                        <p>{{cc.p1}}</p>\n" +
            "                        <span>{{cc.span1}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"other-cen\">\n" +
            "                        <img :src=\"cc.pic2\" alt=\"\">\n" +
            "                        <span>{{cc.span2}}</span>\n" +
            "                        <span>{{cc.span3}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"sale\">{{cc.sale}}</div>\n" +
            "                      <div class=\"last\">\n" +
            "                        <img v-for=\"(iss,tss) in cc.pic3\" :src=\"iss\" alt=\"\">\n" +
            "                        <p>{{cc.p2}}</p>\n" +
            "                      </div>\n" +
            "                    </div>\n" +
            "                  </router-link>\n" +
            "                </li>\n" +
            "              </ul>\n" +
            "            </div>\n" +
            "            <div class=\"swiper-slide\">\n" +
            "              <ul class=\"life-ul\">\n" +
            "                <li v-for=\"(cc,index) in items[3]\">\n" +
            "                  <router-link to=\"\">\n" +
            "                    <div class=\"left-picture\">\n" +
            "                      <img :src=\"cc.pic1\" alt=\"\">\n" +
            "                    </div>\n" +
            "                    <div class=\"right-other\">\n" +
            "                      <div class=\"other-top\">\n" +
            "                        <p>{{cc.p1}}</p>\n" +
            "                        <span>{{cc.span1}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"other-cen\">\n" +
            "                        <img :src=\"cc.pic2\" alt=\"\">\n" +
            "                        <span>{{cc.span2}}</span>\n" +
            "                        <span>{{cc.span3}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"sale\">{{cc.sale}}</div>\n" +
            "                      <div class=\"last\">\n" +
            "                        <img v-for=\"(iss,tss) in cc.pic3\" :src=\"iss\" alt=\"\">\n" +
            "                        <p>{{cc.p2}}</p>\n" +
            "                      </div>\n" +
            "                    </div>\n" +
            "                  </router-link>\n" +
            "                </li>\n" +
            "              </ul>\n" +
            "            </div>\n" +
            "            <div class=\"swiper-slide\">\n" +
            "              <ul class=\"life-ul\">\n" +
            "                <li v-for=\"(cc,index) in items[4]\">\n" +
            "                  <router-link to=\"\">\n" +
            "                    <div class=\"left-picture\">\n" +
            "                      <img :src=\"cc.pic1\" alt=\"\">\n" +
            "                    </div>\n" +
            "                    <div class=\"right-other\">\n" +
            "                      <div class=\"other-top\">\n" +
            "                        <p>{{cc.p1}}</p>\n" +
            "                        <span>{{cc.span1}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"other-cen\">\n" +
            "                        <img :src=\"cc.pic2\" alt=\"\">\n" +
            "                        <span>{{cc.span2}}</span>\n" +
            "                        <span>{{cc.span3}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"sale\">{{cc.sale}}</div>\n" +
            "                      <div class=\"last\">\n" +
            "                        <img v-for=\"(iss,tss) in cc.pic3\" :src=\"iss\" alt=\"\">\n" +
            "                        <p>{{cc.p2}}</p>\n" +
            "                      </div>\n" +
            "                    </div>\n" +
            "                  </router-link>\n" +
            "                </li>\n" +
            "              </ul>\n" +
            "            </div>\n" +
            "            <div class=\"swiper-slide\">\n" +
            "              <ul class=\"life-ul\">\n" +
            "                <li v-for=\"(cc,index) in items[5]\">\n" +
            "                  <router-link to=\"/\">\n" +
            "                    <div class=\"left-picture\">\n" +
            "                      <img :src=\"cc.pic1\" alt=\"\">\n" +
            "                    </div>\n" +
            "                    <div class=\"right-other\">\n" +
            "                      <div class=\"other-top\">\n" +
            "                        <p>{{cc.p1}}</p>\n" +
            "                        <span>{{cc.span1}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"other-cen\">\n" +
            "                        <img :src=\"cc.pic2\" alt=\"\">\n" +
            "                        <span>{{cc.span2}}</span>\n" +
            "                        <span>{{cc.span3}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"sale\">{{cc.sale}}</div>\n" +
            "                      <div class=\"last\">\n" +
            "                        <img v-for=\"(iss,tss) in cc.pic3\" :src=\"iss\" alt=\"\">\n" +
            "                        <p>{{cc.p2}}</p>\n" +
            "                      </div>\n" +
            "                    </div>\n" +
            "                  </router-link>\n" +
            "                </li>\n" +
            "              </ul>\n" +
            "            </div>\n" +
            "            <div class=\"swiper-slide\">\n" +
            "              <ul class=\"life-ul\">\n" +
            "                <li v-for=\"(cc,index) in items[6]\">\n" +
            "                  <router-link to=\"\">\n" +
            "                    <div class=\"left-picture\">\n" +
            "                      <img :src=\"cc.pic1\" alt=\"\">\n" +
            "                    </div>\n" +
            "                    <div class=\"right-other\">\n" +
            "                      <div class=\"other-top\">\n" +
            "                        <p>{{cc.p1}}</p>\n" +
            "                        <span>{{cc.span1}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"other-cen\">\n" +
            "                        <img :src=\"cc.pic2\" alt=\"\">\n" +
            "                        <span>{{cc.span2}}</span>\n" +
            "                        <span>{{cc.span3}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"sale\">{{cc.sale}}</div>\n" +
            "                      <div class=\"last\">\n" +
            "                        <img v-for=\"(iss,tss) in cc.pic3\" :src=\"iss\" alt=\"\">\n" +
            "                        <p>{{cc.p2}}</p>\n" +
            "                      </div>\n" +
            "                    </div>\n" +
            "                  </router-link>\n" +
            "                </li>\n" +
            "              </ul>\n" +
            "            </div>\n" +
            "            <div class=\"swiper-slide\">\n" +
            "              <ul class=\"life-ul\">\n" +
            "                <li v-for=\"(cc,index) in items[7]\">\n" +
            "                  <router-link to=\"\">\n" +
            "                    <div class=\"left-picture\">\n" +
            "                      <img :src=\"cc.pic1\" alt=\"\">\n" +
            "                    </div>\n" +
            "                    <div class=\"right-other\">\n" +
            "                      <div class=\"other-top\">\n" +
            "                        <p>{{cc.p1}}</p>\n" +
            "                        <span>{{cc.span1}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"other-cen\">\n" +
            "                        <img :src=\"cc.pic2\" alt=\"\">\n" +
            "                        <span>{{cc.span2}}</span>\n" +
            "                        <span>{{cc.span3}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"sale\">{{cc.sale}}</div>\n" +
            "                      <div class=\"last\">\n" +
            "                        <img v-for=\"(iss,tss) in cc.pic3\" :src=\"iss\" alt=\"\">\n" +
            "                        <p>{{cc.p2}}</p>\n" +
            "                      </div>\n" +
            "                    </div>\n" +
            "                  </router-link>\n" +
            "                </li>\n" +
            "              </ul>\n" +
            "            </div>\n" +
            "            <div class=\"swiper-slide\">\n" +
            "              <ul class=\"life-ul\">\n" +
            "                <li v-for=\"(cc,index) in items[8]\">\n" +
            "                  <router-link to=\"\">\n" +
            "                    <div class=\"left-picture\">\n" +
            "                      <img :src=\"cc.pic1\" alt=\"\">\n" +
            "                    </div>\n" +
            "                    <div class=\"right-other\">\n" +
            "                      <div class=\"other-top\">\n" +
            "                        <p>{{cc.p1}}</p>\n" +
            "                        <span>{{cc.span1}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"other-cen\">\n" +
            "                        <img :src=\"cc.pic2\" alt=\"\">\n" +
            "                        <span>{{cc.span2}}</span>\n" +
            "                        <span>{{cc.span3}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"sale\">{{cc.sale}}</div>\n" +
            "                      <div class=\"last\">\n" +
            "                        <img v-for=\"(iss,tss) in cc.pic3\" :src=\"iss\" alt=\"\">\n" +
            "                        <p>{{cc.p2}}</p>\n" +
            "                      </div>\n" +
            "                    </div>\n" +
            "                  </router-link>\n" +
            "                </li>\n" +
            "              </ul>\n" +
            "            </div>\n" +
            "            <div class=\"swiper-slide\">\n" +
            "              <ul class=\"life-ul\">\n" +
            "                <li v-for=\"(cc,index) in items[9]\">\n" +
            "                  <router-link to=\"\">\n" +
            "                    <div class=\"left-picture\">\n" +
            "                      <img :src=\"cc.pic1\" alt=\"\">\n" +
            "                    </div>\n" +
            "                    <div class=\"right-other\">\n" +
            "                      <div class=\"other-top\">\n" +
            "                        <p>{{cc.p1}}</p>\n" +
            "                        <span>{{cc.span1}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"other-cen\">\n" +
            "                        <img :src=\"cc.pic2\" alt=\"\">\n" +
            "                        <span>{{cc.span2}}</span>\n" +
            "                        <span>{{cc.span3}}</span>\n" +
            "                      </div>\n" +
            "                      <div class=\"sale\">{{cc.sale}}</div>\n" +
            "                      <div class=\"last\">\n" +
            "                        <img v-for=\"(iss,tss) in cc.pic3\" :src=\"iss\" alt=\"\">\n" +
            "                        <p>{{cc.p2}}</p>\n" +
            "                      </div>\n" +
            "                    </div>\n" +
            "                  </router-link>\n" +
            "                </li>\n" +
            "              </ul>\n" +
            "            </div>\n" +
            "          </div>\n" +
            "        </div>\n" +
            "      </div>\n",
        data2:""+
            "js代码：\n" +
            "import Swiper from \"swiper\"\n" +
            "  export default {\n" +
            "    name: \"NearList\",\n" +
            "    props:[\"items\"],\n" +
            "    methods:{\n" +
            "      initSwiper(){\n" +
            "        new Swiper('.s3',{\n" +
            "          observer:true,\n" +
            "          observeParents:true,\n" +
            "        })\n" +
            "      }\n" +
            "\n" +
            "    },\n" +
            "    mounted(){\n" +
            "     // console.log(this.items[9])\n" +
            "      this.$nextTick(()=>{\n" +
            "        //初始化\n" +
            "        $(\".cli\").eq(0).addClass('active');\n" +
            "        $('.nearnav-li').eq(0).show();\n" +
            "        //第一个页面第一次显示的时候 给第一个li的文字添加样式\n" +
            "        $(\".secondNav-a\").eq(0).addClass(\"changeStyle\")\n" +
            "\n" +
            "        new Swiper('.childSwiper',{\n" +
            "          slidesPerView: 'auto',\n" +
            "          centeredSlides: true,\n" +
            "          preventLinksPropagation: false,   // 阻止点击事件冒泡(防止手动快速来回滑动后自动滑动紊乱)\n" +
            "          // observer:true,                //修改swiper自己或子元素时，自动初始化swiper\n" +
            "          // observeParents:true,        //修改swiper的父元素时，自动初始化swiper\n" +
            "          on: {\n" +
            "            transitionStart: function () {\n" +
            "              ss(this.activeIndex)       //导航栏同步滑动 底线与字体颜色的同步改变\n" +
            "            }\n" +
            "          }\n" +
            "        })\n" +
            "        //点导航栏点击，页面同步\n" +
            "        $(\".secondNav-a\").click(function () {\n" +
            "          $(this).addClass(\"changeStyle\")\n" +
            "          $(\".secondNav-a\").not($(this)).removeClass(\"changeStyle\")\n" +
            "          // 页面滑动\n" +
            "          let width= $(\"header\")[0].offsetWidth\n" +
            "\n" +
            "          let index=$(\".changeStyle\").parent().index()\n" +
            "          //导航智能滑动\n" +
            "          if(index>2){\n" +
            "            $(\".nav-ul\").animate({\n" +
            "              scrollLeft:(index-2)*80+\"px\"\n" +
            "            },100)\n" +
            "          }\n" +
            "          if(index>0&&index<=2){\n" +
            "            $(\".nav-ul\").animate({\n" +
            "              scrollLeft:\"0px\"\n" +
            "            },100)\n" +
            "          }\n" +
            "          //页面同步\n" +
            "          $(\".buf3\").css({//\"translate3d(-375px,0px,0px)\",\n" +
            "            transform:function(){\n" +
            "              let transX=index*width*-1;\n" +
            "              return \"translate3d(\"+transX+\"px,0px,0px)\"    //拼接字符串\n" +
            "            },\n" +
            "            transitionDuration:\"300ms\"\n" +
            "          })\n" +
            "        })\n" +
            "        //滑动页面，导航栏同步\n" +
            "        function ss(num){\n" +
            "          $(\".secondNav\").eq(num).find(\".secondNav-a\").addClass(\"changeStyle\")\n" +
            "          $(\".secondNav\").eq(num).siblings().find(\".secondNav-a\").removeClass(\"changeStyle\")\n" +
            "          if(num>2){\n" +
            "              $(\".nav-ul\").animate({\n" +
            "                scrollLeft:(num-2)*80+\"px\"\n" +
            "              },200)\n" +
            "          }\n" +
            "          if(num>0&&num<=2){\n" +
            "            $(\".nav-ul\").animate({\n" +
            "              scrollLeft:\"0px\"\n" +
            "            },200)\n" +
            "          }\n" +
            "        }\n" +
            "      })\n" +
            "    }\n" +
            "  }\n",
        data3:""+
            "css代码：\n" +
            "<style lang=\"scss\" scoped>\n" +
            "  @import'../../../../../static/css/swiper.css';\n" +
            "  ::-webkit-scrollbar{\n" +
            "    display:none;\n" +
            "  }\n" +
            "  .secondNav{\n" +
            "    flex:1;\n" +
            "    text-align: center;\n" +
            "  }\n" +
            "  .secondNav:last-child{\n" +
            "    margin-right: 2rem;\n" +
            "  }\n" +
            "  .changeStyle{\n" +
            "    background: #ffe9e6;\n" +
            "    color: #f94024;\n" +
            "  }\n" +
            "  .nearnav-li{\n" +
            "    display: none;\n" +
            "    position: relative;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul{\n" +
            "    padding: .5rem 1rem;\n" +
            "  }\n" +
            "  .nearnav-li .nav-ul{\n" +
            "    width: 100%;\n" +
            "    overflow-x: auto;\n" +
            "    overflow-y: hidden;\n" +
            "    line-height: 2rem;\n" +
            "    display: flex;\n" +
            "    div{                                         //改li\n" +
            "      white-space: nowrap;\n" +
            "      margin-right: .8rem;\n" +
            "      font-size: 1.2rem;\n" +
            "      a{\n" +
            "        display: block;\n" +
            "        border-radius: 2rem;\n" +
            "        padding:.4rem 1rem;\n" +
            "      }\n" +
            "    }\n" +
            "\n" +
            "  }\n" +
            "  .nearnav-li .nav-ul div:first-child{                     //改li\n" +
            "    margin-left: 1rem;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li{\n" +
            "    display: flex;\n" +
            "    border-bottom: 1px solid #eee;\n" +
            "    padding: 1.2rem 0;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a{\n" +
            "    display: flex;\n" +
            "    width: 100%;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a .left-picture{\n" +
            "    width: 7.8rem;\n" +
            "    height: 5.8rem;\n" +
            "    border: 1px solid #cec3c1;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a .left-picture img{\n" +
            "    width: 7.8rem;\n" +
            "    height: 5.8rem;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a .right-other{\n" +
            "    flex: 1;\n" +
            "    width: 100%;\n" +
            "    padding-left: .9rem;\n" +
            "    /*background: #f00;*/\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a .right-other .other-top{\n" +
            "    position: relative;\n" +
            "    display: flex;\n" +
            "    width: 100%;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a .right-other .other-top p{\n" +
            "    width: 12rem;\n" +
            "    white-space: nowrap;\n" +
            "    overflow: hidden;\n" +
            "    text-overflow: ellipsis;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a .right-other .other-top span{\n" +
            "    display: inline-block;\n" +
            "    position: absolute;\n" +
            "    width: 4.1rem;\n" +
            "    height: 1.6rem;\n" +
            "    right: 0;\n" +
            "    background: #f4f4f6;\n" +
            "    text-align: center;\n" +
            "    border-bottom-left-radius: .9rem;\n" +
            "    color: #727274;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a .right-other .other-cen{\n" +
            "    display: flex;\n" +
            "    align-items: center;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a .right-other .other-cen img{\n" +
            "    width: 5rem;\n" +
            "    height: .9rem;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a .right-other .other-cen span{\n" +
            "    padding-left: .7rem;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a .right-other .sale{\n" +
            "    width: 5.6rem;\n" +
            "    text-align: center;\n" +
            "    line-height: 2.3rem;\n" +
            "    border: 1px solid #ffad70;\n" +
            "    color: #f75b0e;\n" +
            "    margin-top: .4rem;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a .right-other .last{\n" +
            "    display: flex;\n" +
            "    padding-top: .4rem;\n" +
            "  }\n" +
            "  .nearnav-li .life-ul li a .right-other .last img{\n" +
            "    width: 1.5rem;\n" +
            "    height: 1.5rem;\n" +
            "    margin-top: .4rem;\n" +
            "    margin-right: .2rem;\n" +
            "  }\n" +
            "</style>"
      }
    }
  }
</script>

<style scoped>
  /*背景模拟盒子*/
  .myBodyBox{
    width: 100%;
    /*height: 100%;*/
    background-size: 100% 100%;
  }

  /*我的内容盒子*/
  .contentBox{
    width: 100%;
    height: 100%;
    padding:22px 50px;
  }

  /*标题盒子*/
  .headerBox{
    width: 100%;
    height: 58px;
    background-color: hsla(0,0%,100%,.8);
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 22px;
    padding: 0 20px;
  }
  .headerBox h1{
    font-size: 16px;
    /*font-weight: 100;*/
    text-align: left;
    line-height: 58px;
  }

  /*组件介绍盒子*/
  .introBox{
    height: auto;
    background-color: hsla(0,0%,100%,.8);
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .introBox h1{
    font-size: 16px;
    line-height: 50px;
    padding: 0 20px;
  }
  .introBoxContent{
    height: auto;
    background-color: hsla(0,0%,100%,.5);
    padding: 10px;
  }
  .introBoxContent h2{
    background-color: hsla(0,0%,100%,.9);
    font-size: 14px;
    line-height: 20px;
    padding: 10px;
  }

  /*代码文本域盒子*/
  textarea{
    width: 100%;
    border:none;
    height: 100%;
  }
</style>
