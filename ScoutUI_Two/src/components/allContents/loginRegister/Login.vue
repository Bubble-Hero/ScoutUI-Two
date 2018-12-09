<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>登录注册组件</h1>
      </div>


      <!----------------------------------------组件介绍框-->
      <div class="introBox">
        <h1>登录组件</h1>
        <div class="introBoxContent">
          <h2>用途：用于手机登录注册页面，可以点击切换验证码登录和密码登录两种登录形式。</h2>
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
        <div class="introBoxContent" style="height: 400px;width: 50%;">
          <!--------------------------------下方是效果组件展示区-->
          <login-compon></login-compon>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LoginCompon from "./LoginSubCompon/loginCompon";
  export default {
    name: "Login",
    components: {LoginCompon},
    data(){
      return{
        data1:"<div class=\"all\">\n" +
          "    <header>\n" +
          "      <p>\n" +
          "        <router-link to=\"\">\n" +
          "          <i class=\"iconfont\" style=\"color: #88dad3;\">&#xe66b;</i>\n" +
          "        </router-link>\n" +
          "      </p>\n" +
          "      <p>帮助</p>\n" +
          "    </header>\n" +
          "    <div class=\"section-tel\">\n" +
          "      <div class=\"area\">\n" +
          "        <p class=\"eightsix\">+86</p>\n" +
          "        <i class=\"iconfont\">&#xe63b;</i>\n" +
          "      </div>\n" +
          "      <div class=\"tel\"><input id=\"t1\" type=\"text\" placeholder=\"请输入手机号\"/></div>\n" +
          "    </div>\n" +
          "    <router-view></router-view>\n" +
          "  </div>" ,
        data2:""+
          "css代码：\n" +
          "<style scoped>\n" +
          "  .all{\n" +
          "    /*margin:40px auto;*/\n" +
          "    padding: 30px 66px;\n" +
          "  }\n" +
          "  .logining{\n" +
          "    position: fixed;\n" +
          "    background-color: rgba(0,0,0,.2);\n" +
          "    height: 100%;\n" +
          "    width: 100%;\n" +
          "    z-index: 100000;\n" +
          "    display: flex;\n" +
          "  }\n" +
          "  .loading{\n" +
          "    margin: auto;\n" +
          "    display: flex;\n" +
          "    background-color: rgba(0,0,0,0.3);\n" +
          "    flex-direction: column;\n" +
          "    justify-content: space-between;\n" +
          "    width: 7rem;\n" +
          "    height: 8rem;\n" +
          "    text-align: center;\n" +
          "    border-radius: .8rem;\n" +
          "    color: #fff;\n" +
          "    padding: .5rem;\n" +
          "\n" +
          "  }\n" +
          "  .loading span{\n" +
          "    margin: auto;font-size: 1.2rem;\n" +
          "  }\n" +
          "  .all{\n" +
          "    background-color: #fff;\n" +
          "  }\n" +
          "\n" +
          "  .type img{\n" +
          "    width: 5.6rem;\n" +
          "    height: 5.6rem;\n" +
          "    border-radius: 50%;\n" +
          "    margin: auto 0;\n" +
          "  }\n" +
          "  header{\n" +
          "    height: 5rem;\n" +
          "    background:#fff;\n" +
          "    display: flex;\n" +
          "    justify-content: space-between;\n" +
          "  }\n" +
          "  header p{\n" +
          "    width: 5rem;\n" +
          "    text-align: center;\n" +
          "    font-size: 1.4rem;\n" +
          "    color: #10bba9;\n" +
          "    margin: auto 0;\n" +
          "  }\n" +
          "  section{\n" +
          "    background: #fff;\n" +
          "    position: relative;\n" +
          "  }\n" +
          "  .section-content {\n" +
          "    background: #fff;\n" +
          "    padding-top: 4rem;\n" +
          "    margin: 0 2rem;\n" +
          "\n" +
          "  }\n" +
          "\n" +
          "  section .tip span{\n" +
          "    color: #1bbfb3;\n" +
          "  }\n" +
          "  .eightsix{\n" +
          "    font-size: 1.2rem;\n" +
          "    white-space: nowrap;\n" +
          "  }\n" +
          "  section h2{\n" +
          "    height: 8rem;\n" +
          "    text-align: center;\n" +
          "    font-size: 1.2rem;\n" +
          "    background: #fff;\n" +
          "    letter-spacing:0.2rem ;\n" +
          "  }\n" +
          "  .section-tel{\n" +
          "    height: 5.6rem;\n" +
          "    line-height: 5.6rem;\n" +
          "    background: #fff;\n" +
          "    border-bottom: 1px solid #dfdfdf;\n" +
          "    display: flex;\n" +
          "    justify-content:space-between;\n" +
          "  }\n" +
          "  .area{\n" +
          "    display: flex;\n" +
          "    justify-content: space-between;\n" +
          "    color: #575757;\n" +
          "    align-items: center;\n" +
          "  }\n" +
          "  .area i{\n" +
          "    margin-left: .5rem;\n" +
          "    font-size: 1.2rem;\n" +
          "    margin-top: .3rem;\n" +
          "  }\n" +
          "  .tel{\n" +
          "    width: 96%;\n" +
          "    height: 5.6rem;\n" +
          "  }\n" +
          "  .tel input{\n" +
          "    width: 100%;\n" +
          "    height: 100%;\n" +
          "    padding-left: 1.2rem;\n" +
          "    color: #111;\n" +
          "    font-size: 1.6rem;\n" +
          "    height: 2.6rem;\n" +
          "    border:none\n" +
          "  }\n" +
          "  \n" +
          "  section .con p{\n" +
          "    color: #bababa;\n" +
          "    height: 3.8rem;\n" +
          "    line-height: 3.8rem;\n" +
          "    font-size: 1.4rem;\n" +
          "  }\n" +
          "  section .con button{\n" +
          "    width:100%;\n" +
          "    height: 4.6rem;\n" +
          "    line-height: 4.6rem;\n" +
          "    outline: none;\n" +
          "    border-radius: 3rem;\n" +
          "    border: none;\n" +
          "    background: #b1f2ee;\n" +
          "    color: #fff;\n" +
          "    font-size: 1.6rem;\n" +
          "    margin: 1.5rem 0;\n" +
          "  }\n" +
          "  .type img{\n" +
          "    width: 5.6rem;\n" +
          "    height: 5.6rem;\n" +
          "    border-radius: 50%;\n" +
          "    margin: auto 0;\n" +
          "  }\n" +
          "  section .tip{\n" +
          "    color: #8c8c8c;\n" +
          "  }\n" +
          "  section .tip span{\n" +
          "    color: #1bbfb3;\n" +
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
