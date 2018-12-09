<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>列表组件</h1>
      </div>


      <!----------------------------------------组件介绍框2-->
      <div class="introBox">
        <h1>表单</h1>
        <div class="introBoxContent">
          <h2>用途：用于pc端后台管路系统的表单，用来判断和输入数据。</h2>
        </div>
      </div>
      <!--代码展示框2-->
      <div class="codeBox introBox">
        <h1>代码展示</h1>
        <div class="introBoxContent" style="max-height: 400px;overflow: auto">
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
          <input-lc></input-lc>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InputLc from "./lc/input-lc";
  export default {
    name: "Input",
    components: {InputLc},
    data(){
      return{
        data:"" +
          "<div class=\"input-group mb-3\">\n" +
          "      <div class=\"input-group-prepend\">\n" +
          "        <span class=\"input-group-text\" id=\"basic-addon1\">@</span>\n" +
          "      </div>\n" +
          "      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\" aria-describedby=\"basic-addon1\">\n" +
          "    </div>\n" +
          "\n" +
          "    <div class=\"input-group mb-3\">\n" +
          "      <input type=\"text\" class=\"form-control\" placeholder=\"Recipient's username\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n" +
          "      <div class=\"input-group-append\">\n" +
          "        <span class=\"input-group-text\" id=\"basic-addon2\">@example.com</span>\n" +
          "      </div>\n" +
          "    </div>\n" +
          "\n" +
          "    <label for=\"basic-url\">Your vanity URL</label>\n" +
          "    <div class=\"input-group mb-3\">\n" +
          "      <div class=\"input-group-prepend\">\n" +
          "        <span class=\"input-group-text\" id=\"basic-addon3\">https://example.com/users/</span>\n" +
          "      </div>\n" +
          "      <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\">\n" +
          "    </div>\n" +
          "\n" +
          "    <div class=\"input-group mb-3\">\n" +
          "      <div class=\"input-group-prepend\">\n" +
          "        <span class=\"input-group-text\">$</span>\n" +
          "      </div>\n" +
          "      <input type=\"text\" class=\"form-control\" aria-label=\"Amount (to the nearest dollar)\">\n" +
          "      <div class=\"input-group-append\">\n" +
          "        <span class=\"input-group-text\">.00</span>\n" +
          "      </div>\n" +
          "    </div>\n" +
          "\n" +
          "    <div class=\"input-group\">\n" +
          "      <div class=\"input-group-prepend\">\n" +
          "        <span class=\"input-group-text\">With textarea</span>\n" +
          "      </div>\n" +
          "      <textarea class=\"form-control\" aria-label=\"With textarea\"></textarea>\n" +
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
