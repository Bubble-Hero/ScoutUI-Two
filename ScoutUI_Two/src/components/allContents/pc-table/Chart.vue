<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>列表组件</h1>
      </div>


      <!----------------------------------------组件介绍框2-->
      <div class="introBox">
        <h1>幻灯片</h1>
        <div class="introBoxContent">
          <h2>用途：幻灯片组件，用于循环播放元素图像或文本幻灯片（如轮播）。</h2>
        </div>
      </div>
      <!--代码展示框2-->
      <div class="codeBox introBox">
        <h1>代码展示</h1>
        <div class="introBoxContent" style="max-height: 350px;overflow: auto">
          <!--------------------------------下方是代码展示区-->
          <script type="syntaxhighlighter" class="brush:html"><![CDATA[
{{data1}}
          ]]></script>
          <!--------------------------------上方是代码展示区-->
        </div>
      </div>
      <!--效果展示框2-->
      <div class="showBox introBox">
        <h1>效果展示</h1>
        <!--效果展示盒子，放完效果将内联高度删除-->
        <div class="introBoxContent" style="height: 350px;">
          <!--------------------------------下方是效果组件展示区-->
          <chart-lc></chart-lc>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ChartLc from "./lc/chart-lc";
  export default {
    name: "Chart",
    components: {ChartLc},
    data(){
      return{
        data1:"<div>\n" +
          "      <div id=\"myCarousel\" class=\"carousel slide\">\n" +
          "        <!-- 轮播（Carousel）指标 -->\n" +
          "        <ol class=\"carousel-indicators\">\n" +
          "          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n" +
          "          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n" +
          "          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n" +
          "        </ol>\n" +
          "        <!-- 轮播（Carousel）项目 -->\n" +
          "        <div class=\"carousel-inner\">\n" +
          "          <div class=\"item active\">\n" +
          "            <img src=\"../../../../../static/img/bbg.png\" alt=\"First slide\">\n" +
          "          </div>\n" +
          "          <div class=\"item\">\n" +
          "            <img src=\"../../../../../static/img/bg2.jpg\" alt=\"Second slide\">\n" +
          "          </div>\n" +
          "          <div class=\"item\">\n" +
          "            <img src=\"../../../../../static/img/bg3.jpg\" alt=\"Third slide\">\n" +
          "          </div>\n" +
          "        </div>\n" +
          "        <!-- 轮播（Carousel）导航 -->\n" +
          "        <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n" +
          "          <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n" +
          "          <span class=\"sr-only\">Previous</span>\n" +
          "        </a>\n" +
          "        <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n" +
          "          <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n" +
          "          <span class=\"sr-only\">Next</span>\n" +
          "        </a>\n" +
          "      </div>\n" +
          "    </div>"
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
