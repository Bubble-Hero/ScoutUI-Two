<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>基础组件</h1>
      </div>


      <!----------------------------------------组件介绍框2-->
      <div class="introBox">
        <h1>底部组件</h1>
        <div class="introBoxContent">
          <h2>用途：用于移动端底部，具体用于概括主页面所属分类。</h2>
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
        <div class="introBoxContent" style="height: 200px;width: 50%;">
          <!--------------------------------下方是效果组件展示区-->
          <footer01-lc></footer01-lc>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Footer01Lc from "./lc-elements/footer01-lc";
  export default {
    name: "Footer",
    components: {Footer01Lc},
    data(){
      return{
        data1:"<div class=\"navigation\">\n" +
          "  <router-link class=\"nav\"><i class=\"navIcon iconfont\">&#xe604;</i>首页</router-link>\n" +
          "  <router-link class=\"nav\"><i class=\"navIcon iconfont\">&#xe645;</i>附近</router-link>\n" +
          "  <router-link class=\"nav\"><i class=\"navIcon iconfont\">&#xe6cd;</i>发现</router-link>\n" +
          "  <router-link class=\"nav\"><i class=\"navIcon iconfont\">&#xe6cf;</i>订单</router-link>\n" +
          "  <router-link class=\"nav\"><i class=\"navIcon iconfont\">&#xe8da;</i>我的</router-link>\n" +
          "</div>\n" +
          "\n" +
          "",
        data2:"<style scoped>\n" +
          "  .navigation{\n" +
          "    margin-top: 100px;\n" +
          "    padding: 8px;\n" +
          "    display:flex;/*设置五个导航条的内容由列排列变为行排列*/\n" +
          "    height: 8vh;\n" +
          "    font-size: 1rem;\n" +
          "    background-color: #fff;\n" +
          "    position: relative;\n" +
          "    z-index: 10;\n" +
          "    border: 1px solid #eee;\n" +
          "  }\n" +
          "  .footernav{\n" +
          "    display: flex;/*这个和下面的 flex-direction属性设置将图片与文字平行排布*/\n" +
          "    flex-direction: column;\n" +
          "    flex: 1;/*设置五个导航条的内容等分*/\n" +
          "    line-height: 1.5rem;\n" +
          "    text-align: center;\n" +
          "    margin: 0 auto;\n" +
          "    color:#555;\n" +
          "  }\n" +
          "  .navIcon{\n" +
          "    margin:0 auto;\n" +
          "    font-size: 2.4rem;\n" +
          "    color:#333;\n" +
          "  }\n" +
          "  .router-link-active .navIcon{\n" +
          "    font-size: 2.5rem;\n" +
          "    color:#28c0ac;\n" +
          "  }\n" +
          "  .router-link-active{\n" +
          "    margin-top: .8em;\n" +
          "    color:#28c0ac;\n" +
          "    font-size: 1.1rem;\n" +
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
