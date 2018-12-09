<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>导航组件</h1>
      </div>

      <!----------------------------------------组件介绍框1-->
      <div class="introBox">
        <h1>分类导航</h1>
        <div class="introBoxContent">
          <h2>用途：用于pc端后台管路系统主页面的分类，起到美观和重点展示的效果。</h2>
        </div>
      </div>
      <!--代码展示框1-->
      <div class="codeBox introBox">
        <h1>代码展示</h1>
        <div class="introBoxContent" style="max-height: 300px;overflow: auto">
          <!--------------------------------下方是代码展示区-->
          <script type="syntaxhighlighter" class="brush:html"><![CDATA[
{{data1}}
          ]]></script>
          <script type="syntaxhighlighter" class="brush:css"><![CDATA[
{{data2}}
          ]]></script>
          <!--------------------------------上方是代码展示区-->
        </div>
      </div>
      <!--效果展示框1-->
      <div class="showBox introBox">
        <h1>效果展示</h1>
        <!--效果展示盒子，放完效果将内联高度删除-->
        <div class="introBoxContent" style="height: 200px;">
          <!--------------------------------下方是效果组件展示区-->
          <slide-nav-lc></slide-nav-lc>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import SlideNavLc from "./lc/slideNav-lc";
  export default {
    name: "SlideNav",
    components: {SlideNavLc},
    data(){
      return{
        data1:"" +
          "    <div class=\"row\" style=\"margin: 0;\">\n" +
          "      <div class=\"col-xs-6 col-sm-3\">\n" +
          "\n" +
          "        <div class=\"sortBox\">\n" +
          "          <div class=\"sortBox01  color01\">\n" +
          "            <i class=\"iconfont\">&#xe519;</i>\n" +
          "            <p>\n" +
          "              <span class=\"sortSpan01\">总客户量</span>\n" +
          "              <span class=\"sortSpan02 sortSpan02Big\">56<span class=\"sortSpan03\">人</span></span>\n" +
          "            </p>\n" +
          "          </div>\n" +
          "          <div class=\"sortBox02\">\n" +
          "            <i class=\"iconfont\">&#xe519;</i>\n" +
          "            <span>总客户量</span>\n" +
          "          </div>\n" +
          "        </div>\n" +
          "\n" +
          "      </div>\n" +
          "      <div class=\"col-xs-6 col-sm-3\">\n" +
          "\n" +
          "        <div class=\"sortBox\">\n" +
          "          <div class=\"sortBox01  color02\">\n" +
          "            <i class=\"iconfont\">&#xe607;</i>\n" +
          "            <p>\n" +
          "              <span class=\"sortSpan01\">总商家数</span>\n" +
          "              <span class=\"sortSpan02\">8012<span class=\"sortSpan03\">个</span></span>\n" +
          "            </p>\n" +
          "          </div>\n" +
          "          <div class=\"sortBox02\">\n" +
          "            <i class=\"iconfont\">&#xe607;</i>\n" +
          "            <span>总商家数</span>\n" +
          "          </div>\n" +
          "        </div>\n" +
          "\n" +
          "      </div>\n" +
          "\n" +
          "      <!-- Add the extra clearfix for only the required viewport -->\n" +
          "      <div class=\"clearfix visible-xs-block\"></div>\n" +
          "\n" +
          "\n" +
          "\n" +
          "      <div class=\"col-xs-6 col-sm-3\">\n" +
          "\n" +
          "        <div class=\"sortBox\">\n" +
          "          <div class=\"sortBox01  color03\">\n" +
          "            <i class=\"iconfont\">&#xe6eb;</i>\n" +
          "            <p>\n" +
          "              <span class=\"sortSpan01\">总商品量</span>\n" +
          "              <span class=\"sortSpan02\">50106<span class=\"sortSpan03\">个</span></span>\n" +
          "            </p>\n" +
          "          </div>\n" +
          "          <div class=\"sortBox02\">\n" +
          "            <i class=\"iconfont\">&#xe6eb;</i>\n" +
          "            <span>总商品量</span>\n" +
          "          </div>\n" +
          "        </div>\n" +
          "\n" +
          "      </div>\n" +
          "      <div class=\"col-xs-6 col-sm-3\">\n" +
          "\n" +
          "        <div class=\"sortBox\">\n" +
          "          <div class=\"sortBox01  color04\">\n" +
          "            <i class=\"iconfont\">&#xe63a;</i>\n" +
          "            <p>\n" +
          "              <span class=\"sortSpan01\">合作伙伴</span>\n" +
          "              <span class=\"sortSpan02\">8<span class=\"sortSpan03\">个</span></span>\n" +
          "            </p>\n" +
          "          </div>\n" +
          "          <div class=\"sortBox02\">\n" +
          "            <div class=\"sortBox02Parent\">\n" +
          "\n" +
          "            </div>\n" +
          "            <span style=\"font-size: 15px\">特别合作伙伴</span>\n" +
          "          </div>\n" +
          "        </div>\n" +
          "\n" +
          "      </div>\n" +
          "    </div>\n"+
          "\n",
        data2:""+
          "<style scoped>\n" +
          "  @media (min-width: 768px) and (max-width: 1000px) {\n" +
          "    .sortSpan03{display: none;}\n" +
          "  }\n" +
          "  @media(max-width: 420px){\n" +
          "    .sortSpan03{display: none;}\n" +
          "  }\n" +
          "\n" +
          "\n" +
          "  .title{\n" +
          "    margin: 40px 0 15px 20px;\n" +
          "  }\n" +
          "  .title h2{\n" +
          "    font-size: 35px;\n" +
          "    color: rgba(255,255,255,.8);\n" +
          "\n" +
          "  }\n" +
          "  .title span{\n" +
          "    font-size: 20px;\n" +
          "    margin-left: 10px;\n" +
          "    color: rgba(255,255,255,.6);\n" +
          "\n" +
          "  }\n" +
          "  .col-xs-6{\n" +
          "  }\n" +
          "  .sortBox{\n" +
          "    display: flex;\n" +
          "    flex-wrap: wrap;\n" +
          "    position: relative;\n" +
          "    transform-style: preserve-3d;\n" +
          "    margin: 12px 1%;\n" +
          "  }\n" +
          "  .sortBox01{\n" +
          "    width: 100%;\n" +
          "    box-sizing: border-box;\n" +
          "    display: flex;\n" +
          "    flex-direction: row;\n" +
          "    justify-content: flex-start;\n" +
          "    padding: 20px 20px 10px 20px;\n" +
          "    border-radius: 7px;\n" +
          "  }\n" +
          "  .iconfont{\n" +
          "    font-size:45px;\n" +
          "    color: white;\n" +
          "  }\n" +
          "  .sortBox01 p{\n" +
          "    display: flex;\n" +
          "    white-space: pre-wrap;\n" +
          "    flex-direction: column;\n" +
          "    margin-left: 12px;\n" +
          "  }\n" +
          "  .sortSpan01{\n" +
          "    display: block;\n" +
          "    font-size: 14px;\n" +
          "    color: rgba(255,255,255,.6);\n" +
          "  }\n" +
          "  .sortSpan02{\n" +
          "    display: block;\n" +
          "    font-size: 25px;\n" +
          "    color: white;\n" +
          "  }\n" +
          "\n" +
          "  .sortSpan03{\n" +
          "    padding: 1px 6px;\n" +
          "    font-size: 10px;\n" +
          "    color: #848484;\n" +
          "    background: rgba(255,255,255,.8);\n" +
          "    border-radius: 5px;\n" +
          "    margin-left: 6px;\n" +
          "  }\n" +
          "\n" +
          "  .sortBox02{\n" +
          "    width: 100%;\n" +
          "    height: 100%;\n" +
          "    box-sizing: border-box;\n" +
          "    display: flex;\n" +
          "    flex-direction: column;\n" +
          "    justify-content: center;\n" +
          "    align-items: center;\n" +
          "    background: #edebeb;\n" +
          "    padding: 20px;\n" +
          "    position: absolute;\n" +
          "    top: 0;\n" +
          "    transform-style: preserve-3d;\n" +
          "    transform: rotateY(-180deg) translateZ(1px);\n" +
          "    border-radius: 7px;\n" +
          "  }\n" +
          "  .sortBox02Parent img{\n" +
          "    margin: 2px;\n" +
          "    width: 25px;\n" +
          "    height: 25px;\n" +
          "    border-radius: 50%;\n" +
          "  }\n" +
          "  .sortBox02 i{\n" +
          "    font-size: 30px;\n" +
          "    color:#22a7f0 ;\n" +
          "  }\n" +
          "  .sortBox02 i:hover{\n" +
          "    color: #fa2a00;\n" +
          "    font-weight: 600;\n" +
          "  }\n" +
          "  .sortBox02 span{\n" +
          "    font-size: 20px;\n" +
          "    color:#22a7f0 ;\n" +
          "  }\n" +
          "  .color01{\n" +
          "    background: #d9544f;\n" +
          "  }\n" +
          "  .color02{\n" +
          "    background: #41a5ca;\n" +
          "  }\n" +
          "  .color03{\n" +
          "    background: #16a085;\n" +
          "  }\n" +
          "  .color04{\n" +
          "    background: #4b5f7a;\n" +
          "  }\n" +
          "</style>\n"
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
