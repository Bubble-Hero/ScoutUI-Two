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
          <h2>用途：用于后台表单验证。</h2>
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
          <script type="syntaxhighlighter" class="brush:js"><![CDATA[
{{data2}}
          ]]></script>
          <script type="syntaxhighlighter" class="brush:css"><![CDATA[
{{data3}}
          ]]></script>
          <!--------------------------------上方是代码展示区-->
        </div>
      </div>
      <!--效果展示框2-->
      <div class="showBox introBox">
        <h1>效果展示</h1>
        <!--效果展示盒子，放完效果将内联高度删除-->
        <div class="introBoxContent" style="height: 500px;width: 100%;">
          <!--------------------------------下方是效果组件展示区-->
          <input-examp></input-examp>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import InputExamp from "./inputBox/InputExamp";
  export default {
    name: "Input",
    components: {InputExamp},
    data(){
      return{
        data1:"<div class=\"RecentBox col-md-6\">\n" +
          "    <span class=\"cover l\">\n" +
          "      <div class=\"loading\"></div>\n" +
          "    </span>\n" +
          "    <div class=\"RecentBox-header\" style=\"display: flex;align-items: center;justify-content: space-between;\">\n" +
          "      <h3><strong>Text  </strong> Inputs</h3>\n" +
          "      <div>\n" +
          "        <a href=\"#\" class=\"fresh1\"><i class=\"glyphicon glyphicon-refresh\"></i></a>\n" +
          "        <a href=\"#\" class=\"remove1\"><i class=\"glyphicon glyphicon-remove\"></i></a>\n" +
          "      </div>\n" +
          "    </div>\n" +
          "    <div class=\"RecentBox-content\">\n" +
          "      <form class=\"form-horizontal\" id=\"form1\">\n" +
          "        <div class=\"form-group\">\n" +
          "          <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Normal input field</label>\n" +
          "          <div class=\"col-sm-10\">\n" +
          "            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"ID\" v-model=\"name\">\n" +
          "          </div>\n" +
          "        </div>\n" +
          "        <div class=\"form-group\">\n" +
          "          <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Password input field</label>\n" +
          "          <div class=\"col-sm-10\">\n" +
          "            <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\" @keyup=\"Nerr\" @blur=\"loginCheck\"v-model=\"psd\">\n" +
          "            <span class=\"status status1\"></span>\n" +
          "          </div>\n" +
          "        </div>\n" +
          "        <div class=\"form-group\">\n" +
          "          <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">New Password</label>\n" +
          "          <div class=\"col-sm-10\">\n" +
          "            <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" v-model=\"newPsd\" placeholder=\"Password\" @keyup=\"Oninput\" @blur=\"Oninput\">\n" +
          "            <span class=\"status status2\"></span>\n" +
          "          </div>\n" +
          "        </div>\n" +
          "        <div class=\"form-group\">\n" +
          "          <label for=\"inputPassword3\" class=\"col-sm-2 control-label\">confirm Password</label>\n" +
          "          <div class=\"col-sm-10\">\n" +
          "            <input type=\"password\" class=\"form-control\" id=\"inputPassword5\" v-model=\"confirmPsd\" placeholder=\"Password\" @keyup=\"checkNewpsd\" @blur=\"checkNewpsd\">\n" +
          "            <span class=\"status status3\"></span>\n" +
          "          </div>\n" +
          "        </div>\n" +
          "        <label class=\"sr-only\" for=\"inputHelpBlock\">Input with help text</label>\n" +
          "        <input type=\"text\" id=\"inputHelpBlock\" class=\"form-control\" aria-describedby=\"helpBlock\">\n" +
          "        <span id=\"helpBlock\" class=\"help-block\">\n" +
          "                    A block of help text that breaks onto a new line and may extend beyond one line.</span>\n" +
          "        <textarea class=\"form-control\" rows=\"3\" placeholder=\"remarks\"></textarea>\n" +
          "      </form>\n" +
          "\n" +
          "    </div>\n" +
          "    <div class=\"RecentBox-footer\">\n" +
          "      <input class=\"btn btn-default\" type=\"submit\" value=\"Submit\" @click=\"updateMessage\">\n" +
          "      <input class=\"btn btn-default\" type=\"submit\" value=\"Reset\" @click=\"resetMessage\">\n" +
          "    </div>\n" +
          "  </div>\n",
        data2:""+
          "js代码：\n" +
          "export default {\n" +
          "    name: \"InputExamp\",\n" +
          "    data(){\n" +
          "      return{\n" +
          "        name:'',\n" +
          "        psd:'',\n" +
          "        newPsd:'',\n" +
          "        confirmPsd:'',\n" +
          "        status:false\n" +
          "      }\n" +
          "    },\n" +
          "    methods:{\n" +
          "      Nerr(){\n" +
          "        $(\".status\").html(\"\")\n" +
          "      },\n" +
          "      loginCheck(){      //后端接口\n" +
          "        this.$http.post(\"http://bgs09143010.gotoip1.com/MeiYuan-webapp-php/loginCheck.php\", {\n" +
          "          \"username\":this.name,\n" +
          "          \"userpass\":this.psd\n" +
          "        }, {\n" +
          "          emulateJSON: true\n" +
          "        }).then((res) => {\n" +
          "          if(res.data==this.name){\n" +
          "            $(\".status1\").html(\"√\")\n" +
          "            $(\".status1\").css({color:\"mediumspringgreen\"})\n" +
          "            this.status=true\n" +
          "          }else{\n" +
          "            $(\".status1\").html(\"×\")\n" +
          "            $(\".status1\").css({color:\"red\"})\n" +
          "            this.status=false\n" +
          "          }\n" +
          "        })\n" +
          "      },\n" +
          "      Oninput(){\n" +
          "        if(this.newPsd.length>6){\n" +
          "          $(\".status2\").html(\"√\")\n" +
          "          $(\".status2\").css({color:\"mediumspringgreen\"})\n" +
          "          this.status=true\n" +
          "        }else{\n" +
          "          $(\".status2\").html(\"×\")\n" +
          "          $(\".status2\").css({color:\"red\"})\n" +
          "          this.status=false\n" +
          "        }\n" +
          "      },\n" +
          "      checkNewpsd(){\n" +
          "        if(this.newPsd==this.confirmPsd){\n" +
          "          $(\".status3\").html(\"√\")\n" +
          "          $(\".status3\").css({color:\"mediumspringgreen\"})\n" +
          "          this.status=true\n" +
          "        }else{\n" +
          "          $(\".status3\").html(\"×\")\n" +
          "          $(\".status3\").css({color:\"red\"})\n" +
          "          this.status=false\n" +
          "        }\n" +
          "      },\n" +
          "      updateMessage(){\n" +
          "        if(this.status==true){     //后端接口\n" +
          "          this.$http.post(\"http://bgs09143010.gotoip1.com/Backstage-php/updateUserpsd.php\", {\n" +
          "            \"username\":this.name,\n" +
          "            \"userpass\":this.newPsd\n" +
          "          }, {\n" +
          "            emulateJSON: true\n" +
          "          }).then((res) => {\n" +
          "            if(res.data==1){\n" +
          "              alert(\"修改成功\")\n" +
          "              $(\"#form1\").find(\"input\").val(\"\")\n" +
          "              $(\"#form1\").find(\".status\").html(\"\")\n" +
          "            }else{\n" +
          "              alert(\"修改失败\")\n" +
          "            }\n" +
          "          })\n" +
          "        }\n" +
          "      },\n" +
          "      resetMessage(){\n" +
          "        $(\"#form1\").find(\"input\").val(\"\")\n" +
          "        $(\"#form1\").find(\".status\").html(\"\")\n" +
          "      }\n" +
          "    }\n" +
          "\n" +
          "  }\n",
        data3:""+
          "css代码：\n" +
          "<style scoped>\n" +
          "  .RecentBox{\n" +
          "    float: left;\n" +
          "    border-radius: 5px;\n" +
          "    background:linear-gradient(to right,rgba(176,135,114,.2),rgba(158,124,121,.2));\n" +
          "    margin-right: 1%;\n" +
          "    position: relative;\n" +
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
