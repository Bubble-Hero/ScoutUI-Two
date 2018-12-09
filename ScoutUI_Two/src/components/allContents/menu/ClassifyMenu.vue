<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>菜单组件</h1>
      </div>


      <!----------------------------------------组件介绍框3-->
      <div class="introBox">
        <h1>分类菜单</h1>
        <div class="introBoxContent">
          <h2>用途：用于移动端种类的分组，便于清晰地了解详情。</h2>
        </div>
      </div>
      <!--代码展示框2-->
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
      <!--效果展示框2-->
      <div class="showBox introBox">
        <h1>效果展示</h1>
        <!--效果展示盒子，放完效果将内联高度删除-->
        <div class="introBoxContent" style="min-height: 300px;">
          <!--------------------------------下方是效果组件展示区-->
          <classify-menu-lc></classify-menu-lc>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import ClassifyMenuLc from "./lc/ClassifyMenu-lc";
  export default {
    name: "ClassifyMenu",
    components: {ClassifyMenuLc},
    data(){
      return{
        data1:"" +
          "\n" +
          "  <div id=\"fenlei\">\n" +
          "    <ul>\n" +
          "      <li>\n" +
          "        <a href=\"\">\n" +
          "          <i><img src=\"../../../../../static/img/ershoufang.gif\"/></i>\n" +
          "          <span>二手房</span>\n" +
          "        </a>\n" +
          "      </li>\n" +
          "      <li>\n" +
          "        <a href=\"xinfang.html\">\n" +
          "          <i><img src=\"../../../../../static/img/xinfang.gif\"/></i>\n" +
          "          <span>新房</span>\n" +
          "        </a>\n" +
          "      </li>\n" +
          "      <li>\n" +
          "        <a href=\"\">\n" +
          "          <i><img src=\"../../../../../static/img/zufang.gif\"/></i>\n" +
          "          <span>租房</span>\n" +
          "        </a>\n" +
          "      </li>\n" +
          "      <li>\n" +
          "        <a href=\"\">\n" +
          "          <i><img src=\"../../../../../static/img/haiwai.gif\"/></i>\n" +
          "          <span>海外</span>\n" +
          "        </a>\n" +
          "      </li>\n" +
          "      <li>\n" +
          "        <a href=\"\">\n" +
          "          <i><img src=\"../../../../../static/img/zhuangxiu.gif\"/></i>\n" +
          "          <span>装修</span>\n" +
          "        </a>\n" +
          "      </li>\n" +
          "    </ul>\n" +
          "    <ul>\n" +
          "      <li>\n" +
          "        <a href=\"\">\n" +
          "          <i><img src=\"../../../../../static/img/ershoufang.gif\"/></i>\n" +
          "          <span>帮我找房</span>\n" +
          "        </a>\n" +
          "      </li>\n" +
          "      <li>\n" +
          "        <a href=\"baike.html\">\n" +
          "          <i><img src=\"../../../../../static/img/haiwai.gif\"/></i>\n" +
          "          <span>百科</span>\n" +
          "        </a>\n" +
          "      </li>\n" +
          "      <li>\n" +
          "        <a href=\"\">\n" +
          "          <i><img src=\"../../../../../static/img/xinfang.gif\"/></i>\n" +
          "          <span>找小区</span>\n" +
          "        </a>\n" +
          "      </li>\n" +
          "      <li>\n" +
          "        <a href=\"\">\n" +
          "          <i><img src=\"../../../../../static/img/zhuangxiu.gif\"/></i>\n" +
          "          <span>查成交</span>\n" +
          "        </a>\n" +
          "      </li>\n" +
          "      <li>\n" +
          "        <a href=\"jingji.html\">\n" +
          "          <i><img src=\"../../../../../static/img/zufang.gif\"/></i>\n" +
          "          <span>找经纪人</span>\n" +
          "        </a>\n" +
          "      </li>\n" +
          "    </ul>\n" +
          "  </div>\n" +
          "\n",
        data2:""+
          "<style scoped>\n" +
          "  .con-section{\n" +
          "    width: 100%;\n" +
          "    /*height: 100%;*/\n" +
          "    padding: 0 20px 50px;\n" +
          "    border-bottom: 1px solid #17b6ad;\n" +
          "  }\n" +
          "  ul li h1{\n" +
          "    width: 100%;\n" +
          "    line-height: 40px;\n" +
          "    font-size: 22px;\n" +
          "    background: #fff;\n" +
          "    margin: 20px 0 10px;\n" +
          "  }\n" +
          "  ul li p{\n" +
          "    font-size: 14px;\n" +
          "    line-height: 24px;\n" +
          "    margin-bottom: 20px;\n" +
          "    margin-right: 140px;\n" +
          "  }\n" +
          "  .ullipLast{\n" +
          "    font-size: 13px;\n" +
          "    line-height: 20px;\n" +
          "    margin-bottom: 12px;\n" +
          "  }\n" +
          "  .case{\n" +
          "    line-height: 20px;\n" +
          "    margin: 0;\n" +
          "    display: flex;\n" +
          "    font-size: 16px;\n" +
          "    justify-content: space-between;\n" +
          "  }\n" +
          "  .code{\n" +
          "    width:49%;\n" +
          "    height: 497px;\n" +
          "    border:1px solid #dddddd }\n" +
          "  .code-header{\n" +
          "    padding: 5px 10px;\n" +
          "    border-bottom: 1px solid #dddddd;\n" +
          "    border-top-left-radius: 3px;\n" +
          "    border-top-right-radius: 3px;\n" +
          "    background:#f6f6f6\n" +
          "  }\n" +
          "  .code-body{\n" +
          "    width: 100%;\n" +
          "    height: 450px;\n" +
          "    overflow: auto;\n" +
          "    margin:auto\n" +
          "  }\n" +
          "  .right{\n" +
          "    width: 85%;\n" +
          "    height: 450px;\n" +
          "    overflow: auto;\n" +
          "    margin:auto\n" +
          "  }\n" +
          "  textarea{\n" +
          "    width: 100%;\n" +
          "    border:none;\n" +
          "    height: 100%;\n" +
          "  }\n" +
          "  .btn-default{\n" +
          "    color: #17b6ad;\n" +
          "    background-color: #fff;\n" +
          "    border-color: #ccc;\n" +
          "  }\n" +
          "  .btn{\n" +
          "\n" +
          "    display: inline-block;\n" +
          "    padding: 6px 12px;\n" +
          "    margin-bottom: 0;\n" +
          "    font-size: 14px;\n" +
          "    font-weight: 400;\n" +
          "    line-height: 1.42857143;\n" +
          "    text-align: center;\n" +
          "    white-space: nowrap;\n" +
          "    vertical-align: middle\n" +
          "  }\n" +
          "  .case .result{\n" +
          "    width:49%;\n" +
          "    height: 497px;\n" +
          "    border:1px solid #dddddd }\n" +
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
