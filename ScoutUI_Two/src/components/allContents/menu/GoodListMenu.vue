<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>菜单组件</h1>
      </div>

      <!----------------------------------------组件介绍框1-->
      <div class="introBox">
        <h1>商品列表菜单</h1>
        <div class="introBoxContent">
          <h2>用途：用于移动端商品列表展示，包括图片，标题，数量，价格。</h2>
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
        <div class="introBoxContent" style="min-height: 200px;">
          <!--------------------------------下方是效果组件展示区-->
          <good-list-examp></good-list-examp>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>
      <!--代码展示框2-->
      <div class="codeBox introBox">
        <h1>代码展示</h1>
        <div class="introBoxContent" style="height: 300px;overflow: auto;">
          <!--------------------------------下方是代码展示区-->
          <script type="syntaxhighlighter" class="brush:html"><![CDATA[
{{data3}}
          ]]></script>
          <script type="syntaxhighlighter" class="brush:css"><![CDATA[
{{data4}}
          ]]></script>
          <!--------------------------------上方是代码展示区-->
        </div>
      </div>
      <!--效果展示框2-->
      <div class="showBox introBox">
        <h1>效果展示</h1>
        <!--效果展示盒子，放完效果将内联高度删除-->
        <div class="introBoxContent" style="min-height: 200px;">
          <!--------------------------------下方是效果组件展示区-->
          <good-list-examp2></good-list-examp2>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import GoodListExamp from "./ExampAddress/GoodListExamp";
  import GoodListExamp2 from "./ExampAddress/GoodListExamp2";
  export default {
    name: "GoodListMenu",
    components: {GoodListExamp2, GoodListExamp},
    data(){
      return{
        data1:"<div>\n" +
          "    <div class=\"orderNearByBox\">\n" +
          "      <div class=\"orderNearByBoxHeader\">\n" +
          "        <div class=\"orderNearByBoxHeaderL\">\n" +
          "          <img src=\"\" alt=\"\">\n" +
          "          <p>xxxxxxxx美食</p>\n" +
          "        </div>\n" +
          "        <div class=\"orderNearByBoxHeaderR\">\n" +
          "          <p>已评价</p>\n" +
          "        </div>\n" +
          "      </div>\n" +
          "      <div class=\"orderNearByBoxContent\">\n" +
          "        <img src=\"\" alt=\"\">\n" +
          "        <div class=\"orderNearByBoxContentR\">\n" +
          "          <h1>xxxx火锅代金券<i class=\"iconfont\">&#xe63b;</i></h1>\n" +
          "          <h2>数量：xx</h2>\n" +
          "          <h3>总价：￥xxxx</h3>\n" +
          "        </div>\n" +
          "      </div>\n" +
          "    </div>\n" +
          "    <div class=\"orderNearByBox\">\n" +
          "      <div class=\"orderNearByBoxHeader\">\n" +
          "        <div class=\"orderNearByBoxHeaderL\">\n" +
          "          <img src=\"\" alt=\"\">\n" +
          "          <p>xxxxxxxx美食</p>\n" +
          "        </div>\n" +
          "        <div class=\"orderNearByBoxHeaderR\">\n" +
          "          <p>已评价</p>\n" +
          "        </div>\n" +
          "      </div>\n" +
          "      <div class=\"orderNearByBoxContent\">\n" +
          "        <img src=\"\" alt=\"\">\n" +
          "        <div class=\"orderNearByBoxContentR\">\n" +
          "          <h1>xxxx火锅代金券<i class=\"iconfont\">&#xe63b;</i></h1>\n" +
          "          <h2>数量：xx</h2>\n" +
          "          <h3>总价：￥xxxx</h3>\n" +
          "        </div>\n" +
          "      </div>\n" +
          "    </div>\n" +
          "  </div>\n",
        data2:""+
          "<style scoped>\n" +
          "  .orderNearByBox{\n" +
          "    border:.2rem solid #f6f6f7;\n" +
          "    -webkit-border-radius: 1rem;\n" +
          "    -moz-border-radius: 1rem;\n" +
          "    border-radius: 1rem;\n" +
          "    background: #ffffff;\n" +
          "    padding: 1.3rem 1.3rem 1.6rem;\n" +
          "    box-shadow:0rem 1rem 1.8rem #fee7d2 ;\n" +
          "    margin-bottom: 3rem;\n" +
          "  }\n" +
          "  .orderNearByBox:last-child{\n" +
          "    box-shadow:0rem 1rem 1.8rem #fef1ce;\n" +
          "  }\n" +
          "  .orderNearByBoxHeader{\n" +
          "    display: flex;\n" +
          "    justify-content: space-between;\n" +
          "    margin-bottom: 2.6rem;\n" +
          "  }\n" +
          "  .orderNearByBoxHeaderL{\n" +
          "    display: flex;\n" +
          "  }\n" +
          "  .orderNearByBoxHeaderL img{\n" +
          "    width:2.2rem;\n" +
          "    height:2.2rem;\n" +
          "    -webkit-border-radius: 50%;\n" +
          "    -moz-border-radius: 50%;\n" +
          "    border-radius: 50%;\n" +
          "    margin-right: .5rem;\n" +
          "  }\n" +
          "  .orderNearByBoxHeaderL p{\n" +
          "    font-size:1.4rem ;\n" +
          "    lne-height:2.2rem;\n" +
          "  }\n" +
          "  .orderNearByBoxHeaderR p{\n" +
          "    font-size:1.3rem ;\n" +
          "    lne-height:2.2rem;\n" +
          "  }\n" +
          "  .orderNearByBoxContent{\n" +
          "    display: flex;\n" +
          "  }\n" +
          "  .orderNearByBoxContent img{\n" +
          "    width:3.2rem;\n" +
          "    height: 3.2rem;\n" +
          "    margin-right: 1rem;\n" +
          "  }\n" +
          "  .orderNearByBoxContentR h1{\n" +
          "    font-size:1.5rem ;\n" +
          "    line-height: 3.2rem;\n" +
          "    font-weight: 100;\n" +
          "  }\n" +
          "  .orderNearByBoxContentR h2{\n" +
          "    font-size:1.2rem ;\n" +
          "    line-height: 2.5rem;\n" +
          "    font-weight: 100;\n" +
          "  }\n" +
          "  .orderNearByBoxContentR h3{\n" +
          "    font-size:1.2rem ;\n" +
          "    line-height: 2.5rem;\n" +
          "    font-weight: 100;\n" +
          "  }\n" +
          "  .orderNearByBoxContentR i{\n" +
          "    font-size:1.1rem ;\n" +
          "    color: #7a7a7a;\n" +
          "    margin-left: .5rem;\n" +
          "  }\n" +
          "</style>",
        data3:"<div>\n" +
          "    <div>\n" +
          "    <div class=\"orderCollectBox\">\n" +
          "      <img src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
          "      <div class=\"orderCollectBoxR\">\n" +
          "        <h1>xxxxx外卖xxxxxx<img src=\"../../../../../static/img/cards01.jpg\" alt=\"\"></h1>\n" +
          "        <h2>\n" +
          "          <p>\n" +
          "            <i class=\"iconfont\">&#xe622;</i>\n" +
          "            <i class=\"iconfont\">&#xe622;</i>\n" +
          "            <i class=\"iconfont\">&#xe622;</i>\n" +
          "            <i class=\"iconfont\">&#xe622;</i>\n" +
          "            <i class=\"iconfont\">&#xe622;</i>\n" +
          "          </p>\n" +
          "          人均：￥xx\n" +
          "        </h2>\n" +
          "        <h3>科技xxx路&nbsp;&nbsp;立xxxx技</h3>\n" +
          "      </div>\n" +
          "    </div>\n" +
          "  </div>\n" +
          "    <div>\n" +
          "      <div class=\"orderCollectBox\">\n" +
          "        <img src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
          "        <div class=\"orderCollectBoxR\">\n" +
          "          <h1>xxxxx外卖xxxxxx<img src=\"../../../../../static/img/cards01.jpg\" alt=\"\"></h1>\n" +
          "          <h2>\n" +
          "            <p>\n" +
          "              <i class=\"iconfont\">&#xe622;</i>\n" +
          "              <i class=\"iconfont\">&#xe622;</i>\n" +
          "              <i class=\"iconfont\">&#xe622;</i>\n" +
          "              <i class=\"iconfont\">&#xe622;</i>\n" +
          "              <i class=\"iconfont\">&#xe622;</i>\n" +
          "            </p>\n" +
          "            人均：￥xx\n" +
          "          </h2>\n" +
          "          <h3>科技xxx路&nbsp;&nbsp;立xxxx技</h3>\n" +
          "        </div>\n" +
          "      </div>\n" +
          "    </div>\n" +
          "    <div>\n" +
          "      <div class=\"orderCollectBox\">\n" +
          "        <img src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
          "        <div class=\"orderCollectBoxR\">\n" +
          "          <h1>xxxxx外卖xxxxxx<img src=\"../../../../../static/img/cards01.jpg\" alt=\"\"></h1>\n" +
          "          <h2>\n" +
          "            <p>\n" +
          "              <i class=\"iconfont\">&#xe622;</i>\n" +
          "              <i class=\"iconfont\">&#xe622;</i>\n" +
          "              <i class=\"iconfont\">&#xe622;</i>\n" +
          "              <i class=\"iconfont\">&#xe622;</i>\n" +
          "              <i class=\"iconfont\">&#xe622;</i>\n" +
          "            </p>\n" +
          "            人均：￥xx\n" +
          "          </h2>\n" +
          "          <h3>科技xxx路&nbsp;&nbsp;立xxxx技</h3>\n" +
          "        </div>\n" +
          "      </div>\n" +
          "    </div>\n" +
          "  </div>\n",
        data4:""+
          "css代码：\n" +
          "<style scoped>\n" +
          "  .orderCollectBox{\n" +
          "    width: 60%;\n" +
          "    display: flex;\n" +
          "    border-top: .2rem solid #f7f7f7;\n" +
          "    padding: 1.4rem 0;\n" +
          "    background: #ffffff;\n" +
          "  }\n" +
          "  .orderCollectBox img{\n" +
          "    width:7.7rem;\n" +
          "    height: 5.8rem;\n" +
          "    margin: auto 0;\n" +
          "    margin-right: 1rem;\n" +
          "  }\n" +
          "  .orderCollectBoxR{\n" +
          "    display: flex;\n" +
          "    flex-direction: column;\n" +
          "    justify-content: space-around;\n" +
          "  }\n" +
          "  .orderCollectBoxR h1{\n" +
          "    font-size:1.5rem ;\n" +
          "    font-weight:100 ;\n" +
          "    display: flex;\n" +
          "    align-items: center;\n" +
          "  }\n" +
          "  .orderCollectBoxR h1 img{\n" +
          "    width: 1.5rem;\n" +
          "    height: 1.5rem;\n" +
          "    margin-left:1rem;\n" +
          "  }\n" +
          "  .orderCollectBoxR h2{\n" +
          "    font-size:1.2rem ;\n" +
          "    font-weight:100 ;\n" +
          "    display: flex;\n" +
          "    align-items: center;\n" +
          "  }\n" +
          "  .orderCollectBoxR h2 p{\n" +
          "    font-size:1rem ;\n" +
          "    color: #ffc94f;\n" +
          "    margin-right: .5rem;\n" +
          "  }\n" +
          "  .orderCollectBoxR h3{\n" +
          "    font-size:1.2rem ;\n" +
          "    font-weight:100 ;\n" +
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
