<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>基础组件</h1>
      </div>

      <!----------------------------------------组件介绍框1-->
      <div class="introBox">
        <h1>顶部组件</h1>
        <div class="introBoxContent">
          <h2>用途：用于移动端顶部，具体用于概括本页面所属分类。</h2>
        </div>
      </div>
      <!--代码展示框1-->
      <div class="codeBox introBox">
        <h1>代码展示</h1>
        <div class="introBoxContent" style="height: 300px;overflow: auto;">
          <!--------------------------------下方是代码展示区-->
          <script type="syntaxhighlighter" class="brush:html" ><![CDATA[
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
        <div class="introBoxContent"style="height: 400px;width: 50%;">
          <!--------------------------------下方是效果组件展示区-->
          <header01-lc></header01-lc>
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
        <div class="introBoxContent" style="height: 400px;width: 50%;">
          <!--------------------------------下方是效果组件展示区-->
          <header02-lc></header02-lc>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header01Lc from "./lc-elements/header01-lc";
  import Header02Lc from "./lc-elements/header02-lc";
  export default {
    name: "Header",
    components: {Header02Lc, Header01Lc},
    data(){
      return{
          data1:"" +
            "<header>\n" +
            "      <router-link to=\"/find\"><i class=\"iconfont xxxxx\">&#xxxxx;</i></router-link>\n" +
            "      <span>xxxxx</span>\n" +
            "      <p><i class=\"iconfont xxxxx\">&#xxxxx;</i></p>\n" +
            "</header>",
        data2:""+
            "<style lang=\"scss\" scoped>\n" +
            "  header{\n" +
            "    width: 100%;\n" +
            "    line-height: 5rem;\n" +
            "    //margin-top: 40px;\n" +
            "    display: flex;\n" +
            "    justify-content: space-between;\n" +
            "    align-items: center;\n" +
            "    background: #f9f9f9;\n" +
            "    border-bottom: 1px solid #bdbdbd;\n" +
            "    z-index: 2;\n" +
            "    padding: 0 1.2rem;\n" +
            "  }\n" +
            "  .headeri{\n" +
            "    font-size: 2.4rem;\n" +
            "    color: #292929;\n" +
            "    height: 100%;\n" +
            "    line-height: 5rem;\n" +
            "  }\n" +
            "  header span{\n" +
            "    color: black;\n" +
            "    font-size: 1.6rem;\n" +
            "  }\n" +
            "\n" +
            "  </style>",
        data3:"" +
          "<header>\n" +
          "    <router-link to=\"/find\"><i class=\"iconfont headeri\">&#xxxxx;</i></router-link>\n" +
          "    <span>xxxxxx</span>\n" +
          "    <p><i class=\"iconfont headeri\">&#xxxxx;</i></p>\n" +
          "  </header>",
          data4:""+
          "<style lang=\"scss\" scoped>\n" +
          "  header{\n" +
          "    width: 100%;\n" +
          "    line-height: 5rem;\n" +
          "    //margin-top: 40px;\n" +
          "    display: flex;\n" +
          "    justify-content: space-between;\n" +
          "    align-items: center;\n" +
          "    background: #f9f9f9;\n" +
          "    border-bottom: 1px solid #bdbdbd;\n" +
          "    z-index: 2;\n" +
          "    padding: 0 1.2rem;\n" +
          "  }\n" +
          "  .headeri{\n" +
          "    font-size: 2.4rem;\n" +
          "    color: #292929;\n" +
          "    height: 100%;\n" +
          "    line-height: 5rem;\n" +
          "  }\n" +
          "  header span{\n" +
          "    color: black;\n" +
          "    font-size: 1.6rem;\n" +
          "  }"
      }
    },
    mounted(){
     // SyntaxHighlighter.all()
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
