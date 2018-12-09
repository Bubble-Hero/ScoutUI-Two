<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>菜单组件</h1>
      </div>


      <!----------------------------------------组件介绍框3-->
      <div class="introBox">
        <h1>分享菜单</h1>
        <div class="introBoxContent">
          <h2>用途：点击右侧图标，弹出分享菜单，可分享到各种社交网络等,提供毛玻璃效果，和上划效果。</h2>
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
          <script type="syntaxhighlighter" class="brush:js"><![CDATA[
{{data2}}
          ]]></script>
          <script type="syntaxhighlighter" class="brush:css"><![CDATA[
{{data3}}
          ]]></script>
          <!--------------------------------上方是代码展示区-->
        </div>
      </div>
      <!--效果展示框1-->
      <div class="showBox introBox">
        <h1>效果展示</h1>
        <!--效果展示盒子，放完效果将内联高度删除-->
        <div class="introBoxContent" style="min-height: 500px;">
          <!--------------------------------下方是效果组件展示区-->
          <slide-examp2></slide-examp2>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>
      <!--代码展示框2-->
      <div class="codeBox introBox">
        <h1>代码展示</h1>
        <div class="introBoxContent" style="height: 300px;overflow: auto;">
          <!--------------------------------下方是代码展示区-->
          <script type="syntaxhighlighter" class="brush:html"><![CDATA[
{{data4}}
          ]]></script>
          <script type="syntaxhighlighter" class="brush:js"><![CDATA[
{{data5}}
          ]]></script>
          <script type="syntaxhighlighter" class="brush:css"><![CDATA[
{{data6}}
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
          <slide-examp3></slide-examp3>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SlideExamp2 from "./slideExamp/SlideExamp2";
  import SlideExamp3 from "./slideExamp/SlideExamp3";
  export default {
    name: "NavMenu",
    components: {SlideExamp3, SlideExamp2},
    data(){
      return{
        data1:"<div class=\"hindBox\">\n" +
          "  <!--header-->\n" +
          "  <div class=\"header11\">\n" +
          "     <p class=\"my\">\n" +
          "       <a href=\"\"><i class=\"iconfont\">&#xe63c;</i></a>\n" +
          "       xxxxxx\n" +
          "     </p>\n" +
          "     <div class=\"rightSearch\">\n" +
          "          <i class=\"iconfont\" style=\"color: #666666; margin-right: 0;\">&#xe62b;</i>\n" +
          "     </div>\n" +
          "  </div>\n" +
          "  <!--遮罩层-->\n" +
          "  <div class=\"hindPage\">\n" +
          "    <div class=\"close\"><i class=\"glyphicon glyphicon-remove\" style=\"color: white; margin-right: 1.3rem;font-size: 2.3rem;\"></i></div>\n" +
          "    <h1>分享到xxxxxxx</h1>\n" +
          "    <div class=\"more2\">\n" +
          "      <a href=\"javascript:;\"><i class=\"iconfont\" style=\"color: #ff7d7c;\">&#xe658;</i><span>新浪xxx</span></a>\n" +
          "      <a href=\"javascript:;\"><i class=\"iconfont\" style=\"color: #70cf95;\">&#xe717;</i><span>朋友圈xx</span></a>\n" +
          "      <a href=\"javascript:;\"><i class=\"iconfont\" style=\"color: #6fcf95;\">&#xe5e3;</i><span>微信好友xx</span></a>\n" +
          "      <a href=\"javascript:;\"><i class=\"iconfont\" style=\"color: #69d1ed;\">&#xe6d3;</i><span>QQ好友xx</span></a>\n" +
          "      <a href=\"javascript:;\"><i class=\"iconfont\" style=\"color: #555555;\">&#xe657;</i><span>举报xx</span></a>\n" +
          "      <a href=\"javascript:;\"><i class=\"iconfont\" style=\"color: #555555;\">&#xe6cf;</i><span>社会公约xx</span></a>\n" +
          "    </div>\n" +
          "  </div>\n" +
          "</div>\n",
        data2:""+
          "js代码：\n" +
          "import $ from \"jquery\"\n" +
          "    export default {\n" +
          "        name: \"SlideExamp2\",\n" +
          "      mounted() {\n" +
          "        //点击右上角三个点点显示遮罩层菜单  下面字体模糊（毛玻璃效果）\n" +
          "        $(\".rightSearch\").click(function(){\n" +
          "          $(\".hindPage\").fadeIn(300).css({\n" +
          "            display:\"block\"\n" +
          "          });\n" +
          "          $(\".header11\").css({\n" +
          "            \"-webkit-filter\":\"blur(.1rem)\"\n" +
          "          })\n" +
          "        });\n" +
          "        //点击close关闭分享遮罩层\n" +
          "        $(\".close\").click(function(){\n" +
          "          $(\".header11\").css({\n" +
          "            \"-webkit-filter\":\"blur(0rem)\"\n" +
          "          })\n" +
          "          $(\".hindPage\").css({\n" +
          "            display:\"none\"\n" +
          "          });\n" +
          "        })\n" +
          "      }\n" +
          "    }\n" ,
        data3:""+
          "<style scoped>\n" +
          "  .hindBox{\n" +
          "    position: relative;\n" +
          "    height:100% ;\n" +
          "  }\n" +
          "  .header11{\n" +
          "    width:100%;\n" +
          "    background: white;\n" +
          "    padding: 0rem 1.3rem;\n" +
          "    height:5rem;\n" +
          "    display: flex;\n" +
          "    justify-content: space-between;\n" +
          "    box-sizing: border-box;\n" +
          "    border-bottom:0.2rem solid #e6e6e6 ;\n" +
          "    position: absolute;\n" +
          "    left: 0;\n" +
          "    top: 0;\n" +
          "    align-items: center;\n" +
          "  }\n" +
          "  .my{\n" +
          "    font-size: 1.7rem;\n" +
          "    margin: auto 0;\n" +
          "\n" +
          "  }\n" +
          "  /*遮罩层*/\n" +
          "  .hindPage{\n" +
          "    width: 100%;\n" +
          "    height:100%;\n" +
          "    position: absolute;\n" +
          "    top: 0;\n" +
          "    left: 0;\n" +
          "    background: rgba(66,66,66,.5);\n" +
          "    z-index: 2;\n" +
          "    display: none;\n" +
          "    /*visibility:collapse;*/\n" +
          "  }\n" +
          "  .close{\n" +
          "    width: 100%;\n" +
          "    height: 5rem;\n" +
          "    display:  -webkit-flex;\n" +
          "    justify-content: flex-end;\n" +
          "    align-items: center;\n" +
          "  }\n" +
          "  .more2{\n" +
          "    display:  -webkit-flex;\n" +
          "    flex-wrap: wrap;\n" +
          "    margin-top: 3rem;\n" +
          "  }\n" +
          "\n" +
          "  .hindPage h1{\n" +
          "    font-size: 1.8rem;\n" +
          "    color: white;\n" +
          "    text-align: center;\n" +
          "    font-weight: 100;\n" +
          "    margin-top: 2.3rem;\n" +
          "  }\n" +
          "  .more2 a{\n" +
          "    display: block;\n" +
          "    text-align: center;\n" +
          "    width: 25%;\n" +
          "    height: 8rem;\n" +
          "  }\n" +
          "  .more2 span{\n" +
          "    display: block;\n" +
          "    color: white;\n" +
          "    font-size: 1.3rem;\n" +
          "    text-align: center;\n" +
          "  }\n" +
          "  .more2 i{\n" +
          "    font-size:3rem ;\n" +
          "    color: red;\n" +
          "  }\n" +
          "</style>",
        data4:"<div class=\"shareToBox\">\n" +
          "     <!--...footer...-->\n" +
          "     <footer>\n" +
          "          <input type=\"text\" placeholder=\"评论一下\"/>\n" +
          "          <div class=\"share\">\n" +
          "            <p class=\"footeriShare\" @click=\"goTop\">\n" +
          "              <i class=\"iconfont footeri\">&#xe6d4;</i>\n" +
          "              <span>分享</span>\n" +
          "            </p>\n" +
          "            <p>\n" +
          "              <i class=\"iconfont footeri\">&#xe5e3;</i>\n" +
          "              <span>评论</span>\n" +
          "            </p>\n" +
          "            <p>\n" +
          "              <i class=\"iconfont footeri\">&#xe637;</i>\n" +
          "              <span>收藏</span>\n" +
          "            </p>\n" +
          "          </div>\n" +
          "        </footer>\n" +
          "\n" +
          "     <!--..shareTo...-->\n" +
          "     <div class=\"shareTo\">\n" +
          "          <p>分享到</p>\n" +
          "          <div class=\"shareToi\">\n" +
          "            <a href=\"javascript:void(0)\">\n" +
          "              <i class=\"iconfont shareToi01\">&#xe61c;</i>\n" +
          "              <span>微信好友</span>\n" +
          "            </a>\n" +
          "            <a href=\"javascript:void(0)\">\n" +
          "              <i class=\"iconfont shareToi02\">&#xe5e3;</i>\n" +
          "              <span>朋友圈</span>\n" +
          "            </a>\n" +
          "            <a href=\"javascript:void(0)\">\n" +
          "              <i class=\"iconfont shareToi03\">&#xe6d3;</i>\n" +
          "              <span>QQ</span>\n" +
          "            </a>\n" +
          "            <a href=\"javascript:void(0)\">\n" +
          "              <i class=\"iconfont shareToi04\">&#xe658;</i>\n" +
          "              <span>微博</span>\n" +
          "            </a>\n" +
          "            <a href=\"javascript:void(1)\">\n" +
          "              <i class=\"iconfont shareToi05\">&#xe648;</i>\n" +
          "              <span>github</span>\n" +
          "            </a>\n" +
          "            <a href=\"javascript:void(1)\">\n" +
          "              <i class=\"iconfont shareToi06\">&#xe719;</i>\n" +
          "              <span>更多</span>\n" +
          "            </a>\n" +
          "          </div>\n" +
          "          <div class=\"off\"  @click=\"goBottom\">取消</div>\n" +
          "        </div>\n" +
          "\n" +
          "</div>\n",
        data5:""+
          "js代码：\n" +
          "import $ from \"jquery\"\n" +
          "  export default {\n" +
          "    name: \"SlideExamp3\",\n" +
          "    methods: {\n" +
          "\n" +
          "      goTop(){\n" +
          "        //  点击分享\n" +
          "        $(\".shareTo\").stop().slideToggle(\"slow\")\n" +
          "      },\n" +
          "      goBottom(){\n" +
          "        //  点击分享\n" +
          "        $(\".shareTo\").stop().slideToggle(\"slow\")\n" +
          "      }\n" +
          "    }\n" +
          "  }\n",
        data6:""+
          "css代码：\n" +
          "<style scoped>\n" +
          ".shareToBox{\n" +
          "  position: relative;\n" +
          "  height: 43rem;\n" +
          "  width: 55%;\n" +
          "}\n" +
          "  /*...footer..*/\n" +
          "  footer{\n" +
          "    display: flex;\n" +
          "    flex-direction: row;\n" +
          "    width: 100%;\n" +
          "    padding: .8rem 1.2rem;\n" +
          "    background: #fafafa;\n" +
          "    border-top: .1rem solid #f4f4f4;\n" +
          "    position: absolute;\n" +
          "    left: 0;\n" +
          "    bottom: 0;\n" +
          "  }\n" +
          "  footer input{\n" +
          "    width: 20.4rem;\n" +
          "    height: 3.4rem;\n" +
          "    border: .1rem solid #e3e3e3;\n" +
          "    border-radius:.6rem ;\n" +
          "    color: #cdcdcd;\n" +
          "    font-size: 1.4rem;\n" +
          "    text-indent: .6rem;\n" +
          "  }\n" +
          "  .share{\n" +
          "    width: 100%;\n" +
          "    display:flex ;\n" +
          "    justify-content: space-between;\n" +
          "    padding: 0  1.2rem;\n" +
          "  }\n" +
          "  .share span{\n" +
          "    font-size: 1.2rem;\n" +
          "    color: #848484;\n" +
          "  }\n" +
          "  .share p{\n" +
          "    display: flex;\n" +
          "    flex-direction: column;\n" +
          "    justify-content: flex-start;\n" +
          "  }\n" +
          "  .footeri{\n" +
          "    font-size: 1.4rem;\n" +
          "    color: #838383;\n" +
          "    text-align: center;\n" +
          "  }\n" +
          "  /*....shareTo....*/\n" +
          "  .shareTo{\n" +
          "    width: 94%;\n" +
          "    margin: 3%;\n" +
          "    margin-bottom: 1rem;\n" +
          "    background: #daf0ee;\n" +
          "    border-radius: .8rem;\n" +
          "    z-index: 3;\n" +
          "    position: absolute;\n" +
          "    left: 0;\n" +
          "    bottom: 0;\n" +
          "    display: none;\n" +
          "  }\n" +
          "  .shareTo p{\n" +
          "    width: 100%;\n" +
          "    height: 5.6rem;\n" +
          "    line-height: 5.6rem;\n" +
          "    text-align: center;\n" +
          "    font-size: 1.4rem;\n" +
          "    color: #272727;\n" +
          "    font-weight: bold;\n" +
          "  }\n" +
          "  .shareToi{\n" +
          "    display: flex;\n" +
          "    flex-wrap: wrap;\n" +
          "    padding: .5rem 0;\n" +
          "  }\n" +
          "  .shareToi a{\n" +
          "    width: 25%;\n" +
          "    display: flex;\n" +
          "    flex-direction: column;\n" +
          "    justify-content: center;\n" +
          "  }\n" +
          "  .shareToi a i{\n" +
          "    font-size:3.2rem ;\n" +
          "    text-align: center;\n" +
          "  }\n" +
          "  .shareToi a span{\n" +
          "    font-size: 1.2rem;\n" +
          "    text-align: center;\n" +
          "    margin:.8rem;\n" +
          "  }\n" +
          "  .off{\n" +
          "    width: 100%;\n" +
          "    height: 5rem;\n" +
          "    line-height: 5rem;\n" +
          "    text-align: center;\n" +
          "    font-size: 1.3rem;\n" +
          "    color: #8f8b8b;\n" +
          "    border-top: .1rem solid #cecccc;\n" +
          "  }\n" +
          "  .shareToi01{\n" +
          "    color: #45c77c;\n" +
          "  }\n" +
          "  .shareToi02{\n" +
          "    color: #1ae871;\n" +
          "  }\n" +
          "  .shareToi03{\n" +
          "    color: #30cff1;\n" +
          "  }\n" +
          "  .shareToi04{\n" +
          "    color: #edc00e;\n" +
          "  }\n" +
          "  .shareToi05{\n" +
          "    color: #565348;\n" +
          "  }\n" +
          "  .shareToi06{\n" +
          "    color: #18dba6;\n" +
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
