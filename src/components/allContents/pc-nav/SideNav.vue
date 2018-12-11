<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>导航组件</h1>
      </div>

      <!----------------------------------------组件介绍框1-->
      <div class="introBox">
        <h1>侧边栏导航</h1>
        <div class="introBoxContent">
          <h2>用途：大多用于pc端左侧边栏页面分类，有下拉，划过变色等功能。</h2>
        </div>
      </div>
      <!--代码展示框1-->
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
      <!--效果展示框1-->
      <div class="showBox introBox">
        <h1>效果展示</h1>
        <!--效果展示盒子，放完效果将内联高度删除-->
        <div class="introBoxContent" style="height: 800px;">
          <!--------------------------------下方是效果组件展示区-->
          <left-components></left-components>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import LeftComponents from "./sideBox/LeftComponents";
  export default {
    name: "SideNav",
    components: {LeftComponents},
    data(){
      return{
        data1:"<div class=\"nav\">\n" +
          "    <ul class=\"one\" >\n" +
          "      <li class=\"first\" data-toggle=\"collapse\" data-target=\"#demo\">\n" +
          "        <div>\n" +
          "          <span>NAVIGATION</span>\n" +
          "          <i class=\"glyphicon glyphicon-menu-down\"></i>\n" +
          "        </div>\n" +
          "      </li>\n" +
          "    </ul>\n" +
          "\n" +
          "    <ul id=\"demo\" class=\"collapse in two\">\n" +
          "\n" +
          "      <li v-for=\"(is,ts) in list\" style=\"position: relative;\" class=\"show\">\n" +
          "        <a class=\"sec\">\n" +
          "          <i :class=\"is.i1\"></i>\n" +
          "          <p class=\"dis\">\n" +
          "            <span>{{is.span}}</span>\n" +
          "            <i :class=\"is.i2\"></i>\n" +
          "          </p>\n" +
          "        </a>\n" +
          "        <div class=\"xiao\" style=\"\"></div>\n" +
          "        <ul style=\"display: none;\" class=\"coo\">\n" +
          "          <li v-for=\"(iss,tss) in is.ulli\" class=\"geta\">\n" +
          "            <a href=\"\">\n" +
          "              <i :class=\"iss.i3\"></i>\n" +
          "              <span>{{iss.spp}}</span>\n" +
          "            </a>\n" +
          "          </li>\n" +
          "        </ul>\n" +
          "      </li>\n" +
          "    </ul>\n" +
          "\n" +
          "    <ul class=\"one\">\n" +
          "      <li class=\"first\">\n" +
          "        <div data-toggle=\"collapse\" data-target=\"#demo1\">\n" +
          "          <span>ORDERS SUMMARY</span>\n" +
          "          <i class=\"glyphicon glyphicon-menu-down\"></i>\n" +
          "        </div>\n" +
          "        <div id=\"demo1\" class=\"collapse\">\n" +
          "          <div class=\"chart1\">\n" +
          "              <p>THIS WEEK SALES</p>\n" +
          "              <p>THIS WEEK BALANCE</p>\n" +
          "          </div>\n" +
          "        </div>\n" +
          "      </li>\n" +
          "      <li class=\"first\">\n" +
          "        <div data-toggle=\"collapse\" data-target=\"#demo2\">\n" +
          "          <span>GENERAL SETTINGS</span>\n" +
          "          <i class=\"glyphicon glyphicon-menu-down\"></i>\n" +
          "        </div>\n" +
          "        <div id=\"demo2\" class=\"collapse\">\n" +
          "          <p>switch ON</p>\n" +
          "          <p>switch OFF</p>\n" +
          "        </div>\n" +
          "      </li>\n" +
          "    </ul>\n" +
          "\n" +
          "  </div>\n",
        data2:""+
          "js代码：\n" +
          "import $ from \"jquery\";\n" +
          "    export default {\n" +
          "        name: \"LeftComponents\",\n" +
          "        data(){\n" +
          "          return{\n" +
          "            list:[\n" +
          "              {\n" +
          "                \"i1\":\"glyphicon glyphicon-fire\",\n" +
          "                \"span\":\"Dashboard\"\n" +
          "              },\n" +
          "              {\n" +
          "                \"i1\":\"glyphicon glyphicon-align-justify\",\n" +
          "                \"span\":\"Forms\",\n" +
          "                \"i2\":\"glyphicon glyphicon-plus\",\n" +
          "                \"ulli\":[\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"common element\"},\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"validation\"},\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"Form Wizard\"}\n" +
          "                  ]\n" +
          "              },\n" +
          "              {\n" +
          "                \"i1\":\"glyphicon glyphicon-pencil\",\n" +
          "                \"span\":\"Interface\",\n" +
          "                \"i2\":\"glyphicon glyphicon-plus\",\n" +
          "                \"ulli\":[\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"UI Element\"},\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"typography\"},\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"Tiles\"}\n" +
          "                ]\n" +
          "              },\n" +
          "              {\"i1\":\"glyphicon glyphicon-tint\",\n" +
          "                \"span\":\"Buttons & Icons\"\n" +
          "              },\n" +
          "              {\"i1\":\"glyphicon glyphicon-th\",\n" +
          "                \"span\":\"Grid Layout\"\n" +
          "              },\n" +
          "              {\"i1\":\"glyphicon glyphicon-th-large\",\n" +
          "                \"span\":\"Tables\",\n" +
          "                \"i2\":\"glyphicon glyphicon-plus\",\n" +
          "                \"ulli\":[\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"Bootstrap Tables\"},\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"DataTables\"}\n" +
          "                ]\n" +
          "              },\n" +
          "              {\"i1\":\"glyphicon glyphicon-sd-video\",\n" +
          "                \"span\":\"Example Pages mails\",\n" +
          "                \"i2\":\"glyphicon glyphicon-plus\",\n" +
          "                \"ulli\":[\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"Login Pages\"},\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"Calendar\"},\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"Page 404\"},\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"Page 500\"},\n" +
          "                  {\"i3\":\"glyphicon glyphicon-play\",\"spp\":\"Page Offline\"}\n" +
          "                ]\n" +
          "              },\n" +
          "              {\"i1\":\"glyphicon glyphicon-expand\",\n" +
          "                \"span\":\"Widgets\"\n" +
          "              },\n" +
          "              {\"i1\":\"glyphicon glyphicon-stats\",\n" +
          "                \"span\":\"Charts & Graphs\"\n" +
          "              }\n" +
          "            ]\n" +
          "          }\n" +
          "        },\n" +
          "        mounted(){\n" +
          "\n" +
          "\n" +
          "            $(function(){\n" +
          "              $('.show').eq(0).children('.xiao').animate({left:\"0\"})\n" +
          "              //hover的时候改变字体颜色\n" +
          "              $('.geta').hover(function(){\n" +
          "                $(this).children('a').css({\n" +
          "                  \"color\":\"#418208\"\n" +
          "                })\n" +
          "                $(this).children('a').children('i').css({\n" +
          "                  \"color\":\"#418208\"\n" +
          "                })\n" +
          "                $(this).siblings().children('a').css({\n" +
          "                  \"color\":\"#fff\"\n" +
          "                })\n" +
          "                $(this).siblings().children('a').children('i').css({\n" +
          "                  \"color\":\"#fff\"\n" +
          "                })\n" +
          "              },function(){\n" +
          "                $(this).children('a').css({\n" +
          "                  \"color\":\"#fff\"\n" +
          "                })\n" +
          "                $(this).children('a').children('i').css({\n" +
          "                  \"color\":\"#fff\"\n" +
          "                })\n" +
          "              })\n" +
          "              //点击下拉菜单\n" +
          "              $('.sec').click(function(){\n" +
          "                $(this).siblings(\".coo\").toggle(300)\n" +
          "                $(this).parent().siblings(\"li\").children(\".coo\").slideUp(300)\n" +
          "                //改变遮罩层的left\n" +
          "                $(this).siblings('.xiao').animate({\n" +
          "                  left:'0px'\n" +
          "                })\n" +
          "                $(this).parent().siblings(\"li\").children(\".xiao\").not($('.xiao')[0]).animate({left:'-250px'})\n" +
          "                //切换iconfont\n" +
          "                // $(this).children('p').children('i').attr(\"class\",\"glyphicon glyphicon-minus\")\n" +
          "              })\n" +
          "            })\n" +
          "\n" +
          "        }\n" +
          "    }\n",
        data3:""+
          "css代码：\n" +
          "<style scoped>\n" +
          "  @media screen and (max-width: 960px){\n" +
          "    .nav{\n" +
          "      width: 45px!important;\n" +
          "    }\n" +
          "    .dis{\n" +
          "      display: none;\n" +
          "    }\n" +
          "    .one{\n" +
          "      display: none;\n" +
          "    }\n" +
          "    .xiao{\n" +
          "      width: 45px!important;\n" +
          "    }\n" +
          "  }\n" +
          "\n" +
          "  html,body{\n" +
          "    height: 100%;\n" +
          "  }\n" +
          "  *{\n" +
          "    margin: 0;\n" +
          "    padding: 0;\n" +
          "  }\n" +
          "  ul li{\n" +
          "    list-style: none;\n" +
          "  }\n" +
          "  .nav{\n" +
          "    /*position: fixed;*/\n" +
          "    background: #cccccc;\n" +
          "    color: #fff;\n" +
          "    width: 250px;\n" +
          "    height: 100%;\n" +
          "  }\n" +
          "  .nav .one li{\n" +
          "    list-style: none;\n" +
          "    padding-left: 15px;\n" +
          "    cursor: pointer;\n" +
          "  }\n" +
          "  .nav ul li a{\n" +
          "    text-decoration: none;\n" +
          "  }\n" +
          "  .nav .one .first{\n" +
          "    width: 100%;\n" +
          "    line-height: 45px;\n" +
          "  }\n" +
          "  .nav .one .first i{\n" +
          "    float: right;\n" +
          "    width: 45px;\n" +
          "    height: 45px;\n" +
          "    line-height: 45px;\n" +
          "    text-align: center;\n" +
          "  }\n" +
          "  .nav .one .first div{\n" +
          "    color: #aa7864;\n" +
          "  }\n" +
          "  .chart1 p{\n" +
          "    font-size: 12px;\n" +
          "    color: #fff;\n" +
          "    width: 100%;\n" +
          "  }\n" +
          "  .nav .two li:hover{\n" +
          "    cursor: pointer;\n" +
          "  }\n" +
          "  .nav .two li{\n" +
          "    z-index: 10000!important;\n" +
          "  }\n" +
          "  .nav .two li .sec{\n" +
          "    display: flex;\n" +
          "    height: 45px;\n" +
          "    color: #fff;\n" +
          "  }\n" +
          "  .nav .two li .sec i{\n" +
          "    line-height: 45px;\n" +
          "  }\n" +
          "  .nav .two li .sec i:nth-of-type(1){\n" +
          "    width: 45px;\n" +
          "    height: 45px;\n" +
          "    text-align: center;\n" +
          "  }\n" +
          "  .nav .two li .sec .dis{\n" +
          "    line-height: 45px;\n" +
          "    flex: 1;\n" +
          "  }\n" +
          "  .nav .two li .sec .dis i{\n" +
          "    float: right;\n" +
          "  }\n" +
          "  .nav .two li .coo{\n" +
          "    padding-left: 40px;\n" +
          "    width: 100%;\n" +
          "  }\n" +
          "  .nav .two li .coo li{\n" +
          "    line-height: 30px;\n" +
          "  }\n" +
          "  .nav .two li .coo li a{\n" +
          "    font-size: 12px;\n" +
          "    color: #fff;\n" +
          "  }\n" +
          "  .nav .two li .coo li a i{\n" +
          "    font-size: 10px;\n" +
          "    color: #fff;\n" +
          "  }\n" +
          "  #demo2 p{\n" +
          "    color: #fff;\n" +
          "  }\n" +
          "  .xiao{\n" +
          "    position: absolute;\n" +
          "    width: 250px;\n" +
          "    height: 45px;\n" +
          "    background: linear-gradient(90deg,rgba(0,0,0,.2),rgba(0,0,0,0));\n" +
          "    top: 0;\n" +
          "    left: -250px;\n" +
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
    overflow: hidden;
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
