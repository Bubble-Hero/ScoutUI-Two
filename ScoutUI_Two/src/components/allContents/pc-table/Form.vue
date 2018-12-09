<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>列表组件</h1>
      </div>


      <!----------------------------------------组件介绍框2-->
      <div class="introBox">
        <h1>表格</h1>
        <div class="introBoxContent">
          <h2>用途：表格组件用于记录表状数据，使结构清晰</h2>
        </div>
      </div>
      <!--代码展示框2-->
      <div class="codeBox introBox">
        <h1>代码展示</h1>
        <div class="introBoxContent">
          <!--------------------------------下方是代码展示区-->
          <script type="syntaxhighlighter" class="brush:html"><![CDATA[
{{data}}
          ]]></script>
          <!--------------------------------上方是代码展示区-->
        </div>
      </div>
      <!--效果展示框2-->
      <div class="showBox introBox">
        <h1>效果展示</h1>
        <!--效果展示盒子，放完效果将内联高度删除-->
        <div class="introBoxContent" style="height: 300px;">
          <!--------------------------------下方是效果组件展示区-->
          <form-lc></form-lc>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FormLc from "./lc/form-lc";
  export default {
    name: "Form",
    components: {FormLc},
    data(){
      return{
        data:"" +
          "<div class=\"panel panel-default\">\n" +
          "        <!-- Default panel contents -->\n" +
          "        <div class=\"panel-heading\">Panel heading</div>\n" +
          "        <div class=\"panel-body\">\n" +
          "          <p>...</p>\n" +
          "        </div>\n" +
          "\n" +
          "        <!-- List group -->\n" +
          "        <ul class=\"list-group\">\n" +
          "          <li class=\"list-group-item\">Cras justo odio</li>\n" +
          "          <li class=\"list-group-item\">Dapibus ac facilisis in</li>\n" +
          "          <li class=\"list-group-item\">Morbi leo risus</li>\n" +
          "          <li class=\"list-group-item\">Porta ac consectetur ac</li>\n" +
          "          <li class=\"list-group-item\">Vestibulum at eros</li>\n" +
          "        </ul>\n" +
          "      </div>"
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
