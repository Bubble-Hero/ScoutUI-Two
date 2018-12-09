<template>
  <div class="myBodyBox">
    <div class="contentBox">
      <!--大标题框-->
      <div class="headerBox">
        <h1>导航组件</h1>
      </div>

      <!----------------------------------------组件介绍框1-->
      <div class="introBox">
        <h1>menu组件</h1>
        <div class="introBoxContent">
          <h2>用途：用于pc端顶部导航，包括企业logo,搜索框，最新消息等，基于bootstrap@3。</h2>
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
        <div class="introBoxContent" style="height: 600px;">
          <!--------------------------------下方是效果组件展示区-->
          <top-components></top-components>
          <!--------------------------------上方是效果组件展示区-->
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import TopComponents from "./menunavBox/TopComponents";
  export default {
    name: "MenuNav",
    components: {TopComponents},
    data(){
      return{
          data1:"<div class=\"container topContainer\">\n" +
            "      <div class=\"topLeftBox\">\n" +
            "        <div class=\"topLeftBoxL\">\n" +
            "          <span class=\"glyphicon glyphicon-move\"></span>\n" +
            "          <p>MIN<i>IMAL</i></p>\n" +
            "        </div>\n" +
            "          <span class=\"glyphicon glyphicon-align-justify\"></span>\n" +
            "      </div>\n" +
            "      <div class=\"topRightBox\">\n" +
            "          <div class=\"topRightBoxInner\">\n" +
            "              <div class=\"topInnerL\">\n" +
            "                <span class=\"glyphicon glyphicon-refresh\"></span>\n" +
            "                <span class=\"glyphicon glyphicon-search\"></span>\n" +
            "                <input type=\"text\" placeholder=\"Search...\">\n" +
            "              </div>\n" +
            "              <div class=\"topInnerR\">\n" +
            "                <div class=\"topInnerRDiv\">\n" +
            "                  <div class=\"dropdown dropdownBox\">\n" +
            "                    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-tasks\"></span></button>\n" +
            "                    <ul class=\"dropdown-menu changeBg1\" role=\"menu\" aria-labelledby=\"menu1\" style=\"width: 266px;\">\n" +
            "                      <li role=\"presentation\" class=\"dropdown-header headerMeauHead\">YOU HAVE 2 NEW TASK</li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                        <div style=\"margin-bottom: 5px;\">layout</div>\n" +
            "                          <div class=\"\">\n" +
            "                            <div class=\"progress\">\n" +
            "                              <div class=\"progress-bar progress-bar-success progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n" +
            "                                <span class=\"sr-only\">40% Complete (success)</span>\n" +
            "                              </div>\n" +
            "                            </div>\n" +
            "                          </div>\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "                      <li role=\"presentation\" class=\"divider\"></li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\"><div style=\"margin-bottom: 10px;\">Scheam</div><div class=\"progress\">\n" +
            "                        <div class=\"progress-bar active progress-bar-info progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"85\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 85%\">\n" +
            "                          <span class=\"sr-only\">20% Complete</span>\n" +
            "                        </div>\n" +
            "                      </div>\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "                      <li role=\"presentation\" class=\"divider\"></li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\"><div style=\"margin-bottom: 10px;\">Forms</div><div class=\"progress\">\n" +
            "                        <div class=\"progress-bar active progress-bar-warning progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n" +
            "                          <span class=\"sr-only\">60% Complete (warning)</span>\n" +
            "                        </div>\n" +
            "                      </div></a></li>\n" +
            "                      <li role=\"presentation\" class=\"divider\"></li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\"><div style=\"margin-bottom: 10px;\">Javascript</div><div class=\"progress\">\n" +
            "                        <div class=\"progress-bar active progress-bar-danger progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n" +
            "                          <span class=\"sr-only\">80% Complete (danger)</span>\n" +
            "                        </div>\n" +
            "                      </div></a></li>\n" +
            "                      <div class=\"angle\" style=\"right: 227px;border-bottom-color:#444444 \"></div>\n" +
            "                    </ul>\n" +
            "                  </div>\n" +
            "                  <p>2</p>\n" +
            "                </div>\n" +
            "                <div class=\"topInnerRDiv\">\n" +
            "                  <div class=\"dropdown dropdownBox\">\n" +
            "                    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-envelope\"></span></button>\n" +
            "                    <ul class=\"dropdown-menu changeBg1\" role=\"menu\" aria-labelledby=\"menu1\" style=\"width: 266px;\">\n" +
            "                      <li role=\"presentation\" class=\"dropdown-header headerMeauHead\">YOU HAVE 2 NEW TASK</li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                          <div class=\"media mediaBox\">\n" +
            "                            <div class=\"media-left media-middle\">\n" +
            "                              <a href=\"#\">\n" +
            "                                <img class=\"media-object\" src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h4 class=\"media-heading\">Middle aligned media</h4>\n" +
            "                              <h6>Middle aligned middle aligned</h6>\n" +
            "                            </div>\n" +
            "                          </div>\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "\n" +
            "                      <li role=\"presentation\" class=\"divider\"></li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                          <div class=\"media mediaBox\" style=\"background: #f6fae5;\">\n" +
            "                            <div class=\"media-left media-middle\">\n" +
            "                              <a href=\"#\">\n" +
            "                                <img class=\"media-object\" src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h4 class=\"media-heading\">Middle aligned media</h4>\n" +
            "                              <h6>Middle aligned middle aligned</h6>\n" +
            "                            </div>\n" +
            "                          </div>\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "                      <li role=\"presentation\" class=\"divider\"></li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                          <div class=\"media mediaBox\" style=\"background: #f2f2f2;\">\n" +
            "                            <div class=\"media-left media-middle\">\n" +
            "                              <a href=\"#\">\n" +
            "                                <img class=\"media-object\" src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h4 class=\"media-heading\">Middle aligned media</h4>\n" +
            "                              <h6>Middle aligned middle aligned</h6>\n" +
            "                            </div>\n" +
            "                          </div>\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "                      <li role=\"presentation\" class=\"divider\"></li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                          <div class=\"media mediaBox\" style=\"background: #ffedec;\">\n" +
            "                            <div class=\"media-left media-middle\">\n" +
            "                              <a href=\"#\">\n" +
            "                                <img class=\"media-object\" src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h4 class=\"media-heading\">Middle aligned media</h4>\n" +
            "                              <h6>Middle aligned middle aligned</h6>\n" +
            "                            </div>\n" +
            "                          </div>\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "                      <li role=\"presentation\" class=\"divider\"></li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                          <div class=\"media mediaBox\">\n" +
            "                            <div class=\"media-left media-middle\">\n" +
            "                              <a href=\"#\">\n" +
            "                                <img class=\"media-object\" src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h4 class=\"media-heading\">Middle aligned media</h4>\n" +
            "                              <h6>Middle aligned middle aligned</h6>\n" +
            "                            </div>\n" +
            "                          </div>\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "                      <div class=\"angle\" style=\"right: 227px;border-bottom-color:#444444 \"></div>\n" +
            "                    </ul>\n" +
            "                  </div>\n" +
            "                  <p>1</p>\n" +
            "                </div>\n" +
            "                <div class=\"topInnerRDiv\">\n" +
            "                  <div class=\"dropdown dropdownBox\">\n" +
            "                    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"menu1\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-bell\"></span></button>\n" +
            "                    <ul class=\"dropdown-menu changeBg1\" role=\"menu\" aria-labelledby=\"menu1\" style=\"width: 266px;\">\n" +
            "                      <li role=\"presentation\" class=\"dropdown-header headerMeauHead\">YOU HAVE 2 NEW TASK</li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                          <div class=\"media mediaBox1\">\n" +
            "                            <div class=\"media-left media-middle\">\n" +
            "                              <a href=\"#\">\n" +
            "                                <img class=\"media-object\" src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h6>New user registered</h6>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h6>8 mins</h6>\n" +
            "                            </div>\n" +
            "                          </div>\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "                      <li role=\"presentation\" class=\"divider\"></li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                          <div class=\"media mediaBox1\">\n" +
            "                            <div class=\"media-left media-middle\">\n" +
            "                              <a href=\"#\">\n" +
            "                                <img class=\"media-object\" src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h6>New user registered</h6>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h6>8 mins</h6>\n" +
            "                            </div>\n" +
            "                          </div>\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "                      <li role=\"presentation\" class=\"divider\"></li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                          <div class=\"media mediaBox1\">\n" +
            "                            <div class=\"media-left media-middle\">\n" +
            "                              <a href=\"#\">\n" +
            "                                <img class=\"media-object\" src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h6>New user registered</h6>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h6>8 mins</h6>\n" +
            "                            </div>\n" +
            "                          </div>\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "                      <li role=\"presentation\" class=\"divider\"></li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi1\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                          <div class=\"media mediaBox1\">\n" +
            "                            <div class=\"media-left media-middle\">\n" +
            "                              <a href=\"#\">\n" +
            "                                <img class=\"media-object\" src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              </a>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h6>New user registered</h6>\n" +
            "                            </div>\n" +
            "                            <div class=\"media-body\">\n" +
            "                              <h6>8 mins</h6>\n" +
            "                            </div>\n" +
            "                          </div>\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "                      <div class=\"angle\" style=\"right: 227px;border-bottom-color:#444444 \"></div>\n" +
            "                    </ul>\n" +
            "                  </div>\n" +
            "                  <p>3</p>\n" +
            "                </div>\n" +
            "                <div class=\"topInnerRDiv topInnerRDiv4\">\n" +
            "                  <img src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                  <div  class=\"name\">John Douey</div>\n" +
            "                  <div class=\"dropdown dropdownBox\"  style=\"position: relative\">\n" +
            "                    <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\n" +
            "                      <span class=\"glyphicon glyphicon-chevron-down\"></span>\n" +
            "                    </button>\n" +
            "                    <ul class=\"dropdown-menu changeBg4\" role=\"menu\" aria-labelledby=\"menu1\">\n" +
            "                      <li role=\"presentation\" class=\"dropdown-header headerHead\">Backgrouds</li>\n" +
            "                      <li role=\"presentation\" class=\"headerMeauLi\">\n" +
            "                          <div class=\"bgColor\">\n" +
            "                              <img src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              <img src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              <img src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              <img src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              <img src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                              <img src=\"../../../../../static/img/cards01.jpg\" alt=\"\">\n" +
            "                          </div>\n" +
            "                      </li>\n" +
            "                      <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Video BG</a></li>\n" +
            "                      <li role=\"presentation\" class=\"divider\"></li>\n" +
            "                      <li role=\"presentation\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                        <span class=\"glyphicon glyphicon-user\" style=\"color:#717171;\"></span>\n" +
            "                        Profile\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "                      <li role=\"presentation\" style=\"padding: 10px 0;position: relative;\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                          <span class=\"glyphicon glyphicon-list-alt\" style=\"color:#717171;\"></span>\n" +
            "                          Calendar\n" +
            "                        </a>\n" +
            "\n" +
            "                      </li>\n" +
            "                      <li role=\"presentation\">\n" +
            "                        <a role=\"menuitem\" tabindex=\"-1\" href=\"#\">\n" +
            "                          <span class=\"glyphicon glyphicon-envelope\" style=\"color:#717171;\"></span>\n" +
            "                          Inbox<span class=\"badge\" style=\"color: white;\">42</span>\n" +
            "                        </a>\n" +
            "                      </li>\n" +
            "                      <li role=\"presentation\" class=\"divider\"></li>\n" +
            "                      <li role=\"presentation\"><a role=\"menuitem\" tabindex=\"-1\" href=\"#\">Logout</a></li>\n" +
            "                      <div class=\"angle\"></div>\n" +
            "                    </ul>\n" +
            "                  </div>\n" +
            "\n" +
            "                </div>\n" +
            "                <div class=\"topInnerRDiv topInnerRDiv5\">\n" +
            "                  <span class=\"glyphicon glyphicon-comment\"></span>\n" +
            "                </div>\n" +
            "              </div>\n" +
            "          </div>\n" +
            "      </div>\n" +
            "  </div>\n",
        data2:""+
            "js代码：\n" +
            "import $ from \"jquery\"\n" +
            "    export default {\n" +
            "      name: \"TopComponents\",\n" +
            "      mounted(){\n" +
            "        $(function () {\n" +
            "\n" +
            "          // 背景存储 及切换\n" +
            "          var bgig = localStorage.getItem(\"bgig\");\n" +
            "          if (bgig == null) {\n" +
            "            $(\".BigBox\").css({ \"background-image\": \"url(../assets/img/bg1.jpg)\", \"background-size\": \"cover\" });\n" +
            "          }\n" +
            "          else {\n" +
            "            $(\".BigBox\").css({ \"background-image\": \"url(\" + bgig + \")\", \"background-size\": \"cover\" });\n" +
            "          }\n" +
            "\n" +
            "\n" +
            "          // 点击背景标 切换背景\n" +
            "          $(\".bgColor img\").click(function () {\n" +
            "            var src = $(this).attr(\"src\");\n" +
            "            $(\".BigBox\").css({ \"background-image\": \"url(\" + src + \")\",\"background-repeat\":\"no-repeat\",\"background-size\":\"100%\" });\n" +
            "            localStorage.setItem(\"bgig\", src);\n" +
            "          });\n" +
            "          // 点击右侧按钮 若隐藏就消失 若不在就显示\n" +
            "          $('.topInnerRDiv5').click(function(){//点击\n" +
            "            if($('.rightBigBox').is(':hidden')){//如果当前隐藏\n" +
            "              $('.rightBigBox').show().css({\n" +
            "                height:'100%'\n" +
            "              })\n" +
            "              $(\".BBigBox .BigBox\").css({//左侧大盒子改变宽度\n" +
            "                width: \"80%\"\n" +
            "              })\n" +
            "            }else{//否则\n" +
            "              $('.rightBigBox').hide();//就隐藏div\n" +
            "              $(\".BBigBox .BigBox\").css({//左侧大盒子改变宽度\n" +
            "                width: \"100%\"\n" +
            "              })\n" +
            "            }\n" +
            "          })\n" +
            "\n" +
            "\n" +
            "          // 点击最左侧小图标控制菜单导航消失隐藏\n" +
            "          $(\".topLeftBox .glyphicon-align-justify\").click(function(){//点击\n" +
            "                if($('.one').is(':hidden')){\n" +
            "                  $('.one').show()\n" +
            "                  $(\"section .nav\").css({\n" +
            "                    width:\"250px\"\n" +
            "                  })\n" +
            "                  $(\".contentBox\").css({\n" +
            "                    width:\"calc(100% - 250px)\"\n" +
            "                  })\n" +
            "                }\n" +
            "                else{\n" +
            "                  $('.one').hide();//就隐藏div\n" +
            "\n" +
            "                  $(\"section .nav\").css({\n" +
            "                    width:\"45px\"\n" +
            "                  })\n" +
            "                  $(\".contentBox\").css({\n" +
            "                    width:\"calc(100% - 45px)\"\n" +
            "                  })\n" +
            "                }\n" +
            "                if($('.dis').is(':hidden')){\n" +
            "                  $('.dis').show()\n" +
            "                }\n" +
            "                else{\n" +
            "                  $('.dis').hide();//就隐藏div\n" +
            "                }\n" +
            "                if($('.topLeftBox .topLeftBoxL').is(':hidden')){\n" +
            "                  $('.topLeftBox .topLeftBoxL').show()\n" +
            "                  $(\".topLeftBox\").css({\n" +
            "                    width:\"250px\"\n" +
            "                  })\n" +
            "                  $(\".topRightBox\").css({\n" +
            "                    width:\"calc(100% - 250px)\"\n" +
            "                  })\n" +
            "                }\n" +
            "                else{\n" +
            "                  $('.topLeftBox .topLeftBoxL').hide();//就隐藏div\n" +
            "                  $(\".topLeftBox\").css({\n" +
            "                    width:\"45px\"\n" +
            "                  })\n" +
            "                  $(\".topRightBox\").css({\n" +
            "                    width:\"calc(100% - 45px)\"\n" +
            "                  })\n" +
            "                }\n" +
            "          })\n" +
            "        });\n" +
            "      }\n" +
            "    }\n",
        data3:""+
            "css代码：\n" +
            "/*@media (min-width:@screen-md-min ) and (max-width: @screen-md-max) {*/\n" +
            "    /**/\n" +
            "  /*}*/\n" +
            "  @media screen and (max-width: 960px){\n" +
            "\n" +
            "    .topContainer .topLeftBoxL{\n" +
            "      width: 0;\n" +
            "    }\n" +
            "    .topContainer .topLeftBox{\n" +
            "      width: 45px;\n" +
            "    }\n" +
            "    .topContainer .topRightBox{\n" +
            "      width: calc(100% - 45px);\n" +
            "    }\n" +
            "    .topInnerL input{\n" +
            "      display: none;\n" +
            "    }\n" +
            "    .glyphicon-search{\n" +
            "      display: none;\n" +
            "    }\n" +
            "    .topRightBox .topInnerRDiv4{\n" +
            "      width: 0;\n" +
            "      padding: 0;\n" +
            "      border: 0;\n" +
            "    }\n" +
            "    .topInnerRDiv4 img{\n" +
            "      display: none;\n" +
            "    }\n" +
            "    .topInnerRDiv4 .name{\n" +
            "      display: none;\n" +
            "    }\n" +
            "    .topInnerRDiv4 span{\n" +
            "      display: none;\n" +
            "    }\n" +
            "    .glyphicon-move{\n" +
            "      display: none;\n" +
            "    }\n" +
            "    .topLeftBoxL p{\n" +
            "      display: none;\n" +
            "    }\n" +
            "  }\n" +
            "  /*公共样式*/\n" +
            "  div,p,ul,ol,li,dl,dt,dd,form,tr,td,hr,h1,h2,h3,h4,h5,h6,hr,input,table,fieldset,figure{\n" +
            "    margin:0;\n" +
            "    padding:0;\n" +
            "  }\n" +
            "\n" +
            "  ul,ol{\n" +
            "    list-style:none;\n" +
            "  }\n" +
            "  a{\n" +
            "    text-decoration:none;\n" +
            "  }\n" +
            "  img{\n" +
            "    border:0;\n" +
            "    display: block;\n" +
            "  }\n" +
            "\n" +
            "  .topContainer{\n" +
            "  width: 100%;\n" +
            "  height:50px;\n" +
            "  background: #cccccc;\n" +
            "  /*opacity: .2;*/\n" +
            "  display: flex;\n" +
            "}\n" +
            "  .topLeftBox{\n" +
            "    width: 250px;\n" +
            "    height:50px;\n" +
            "    background: rgba(0,0,0,.1);\n" +
            "    /*opacity: .4;*/\n" +
            "    padding:0 17px;\n" +
            "    -webkit-box-sizing: border-box;\n" +
            "    -moz-box-sizing: border-box;\n" +
            "    box-sizing: border-box;\n" +
            "    display: flex;\n" +
            "    align-items:center;\n" +
            "    justify-content: space-between;\n" +
            "  }\n" +
            "  .topLeftBox span{\n" +
            "    font-size: 18px;\n" +
            "    color: white;\n" +
            "  }\n" +
            "  .topLeftBoxL{\n" +
            "    display: flex;\n" +
            "    align-items: center;\n" +
            "  }\n" +
            "  .topLeftBoxL p{\n" +
            "    font-size: 18px;\n" +
            "    font-weight: 600;\n" +
            "    margin-left: 10px;\n" +
            "    color: white;\n" +
            "  }\n" +
            "  .topLeftBoxL p i{\n" +
            "    font-weight: 100;\n" +
            "    font-style: normal;\n" +
            "  }\n" +
            "  .topRightBox{\n" +
            "    width:calc(100% - 250px);\n" +
            "    height: 100%;\n" +
            "    -webkit-box-sizing: border-box;\n" +
            "    -moz-box-sizing: border-box;\n" +
            "    box-sizing: border-box;\n" +
            "    background: rgba(0,0,0,.06);\n" +
            "   padding: 8px 0;\n" +
            "}\n" +
            "  .topRightBoxInner{\n" +
            "    width: 100%;\n" +
            "    /*background: skyblue;*/\n" +
            "    height: 100%;\n" +
            "    display: flex;\n" +
            "    justify-content: space-between;\n" +
            "    align-items: center;\n" +
            "  }\n" +
            "  .topRightBoxInner span{\n" +
            "    font-size: 16px;\n" +
            "    color: #e4dde9;\n" +
            "  }\n" +
            "  .topInnerL span{\n" +
            "    padding: 0 15px;\n" +
            "    border-left: 1px solid gray;\n" +
            "  }\n" +
            "  .topInnerL span:last-child{\n" +
            "    border: 0;\n" +
            "  }\n" +
            "  .topInnerL input{\n" +
            "    background: transparent;\n" +
            "    border:0;\n" +
            "    border-bottom: 1px solid dimgray;\n" +
            "  }\n" +
            "  .topInnerL{\n" +
            "    display: flex;\n" +
            "    align-items: center;\n" +
            "  }\n" +
            "  .topInnerR{\n" +
            "    height: 100%;\n" +
            "    display: flex;\n" +
            "    align-items: center;\n" +
            "    position: relative;\n" +
            "  }\n" +
            "  .topInnerRDiv{\n" +
            "    height: 100%;\n" +
            "    padding:0 8px 0 10px;\n" +
            "    display:flex;\n" +
            "    align-items: center;\n" +
            "    /*justify-content: space-between;*/\n" +
            "    border-right: 1px solid dimgray;\n" +
            "    position: relative;\n" +
            "  }\n" +
            "  .topInnerRDiv:last-child{\n" +
            "    padding-left: 8px;\n" +
            "  }\n" +
            "  .topInnerRDiv p{\n" +
            "    font-size: 9px;\n" +
            "    padding: 4px 6px;\n" +
            "    /*margin-left: 10px;*/\n" +
            "    -webkit-border-radius: 4px;\n" +
            "    -moz-border-radius: 4px;\n" +
            "    border-radius: 4px;\n" +
            "    background: rgba(0,0,0,.2);\n" +
            "    color: white;\n" +
            "  }\n" +
            "  .topInnerRDiv img{\n" +
            "    width: 34px;\n" +
            "    height: 34px;\n" +
            "    margin-right: 10px;\n" +
            "  }\n" +
            "  .topInnerRDiv .name {\n" +
            "    /*margin-right: 10px;*/\n" +
            "    color: white;\n" +
            "  }\n" +
            "  .topRightBoxInner span:hover{\n" +
            "    color: white;\n" +
            "  }\n" +
            "    button{\n" +
            "    background: transparent;\n" +
            "    border: 0;\n" +
            "  }\n" +
            "    button:hover{\n" +
            "    background: transparent;\n" +
            "    border: 0;\n" +
            "  }\n" +
            "  .btn-default:focus {\n" +
            "    color: transparent;\n" +
            "    background-color: transparent;\n" +
            "    border-color: transparent;\n" +
            "  }\n" +
            "  .open > .dropdown-toggle.btn-default:focus, .open > .dropdown-toggle.btn-default:hover {\n" +
            "    color: transparent;\n" +
            "    background-color: transparent;\n" +
            "    border-color: transparent;\n" +
            "  }\n" +
            "  .btn-default {\n" +
            "    color: transparent;\n" +
            "    background-color: transparent;\n" +
            "    border-color: transparent;\n" +
            "  }\n" +
            "  .bgColor{\n" +
            "    display: flex;\n" +
            "    justify-content: space-around;\n" +
            "    align-items: center;\n" +
            "  }\n" +
            "  .bgColor img{\n" +
            "    width:14px;\n" +
            "    height:14px;\n" +
            "    -webkit-border-radius: 50%;\n" +
            "    -moz-border-radius: 50%;\n" +
            "    border-radius: 50%;\n" +
            "  }\n" +
            "  .dropdownBox{\n" +
            "    position: relative;\n" +
            "  }\n" +
            "  .changeBg1{\n" +
            "     position: absolute;\n" +
            "     left:-8px;\n" +
            "     top: 0px;\n" +
            "     padding-bottom: 10px;\n" +
            "     /*padding: 10px 16px;*/\n" +
            "   }\n" +
            "  .changeBg4{\n" +
            "    position: absolute;\n" +
            "    left:-50px;\n" +
            "    top: 0px;\n" +
            "    padding: 10px 16px;\n" +
            "  }\n" +
            "  .headerHead{\n" +
            "    margin-bottom: 10px;\n" +
            "    font-size: 16px;\n" +
            "    color: #9b9b9b;\n" +
            "  }\n" +
            "  .headerMeauLi{\n" +
            "    height: 30px;\n" +
            "    /*display: flex;*/\n" +
            "    /*align-items: center;*/\n" +
            "    /*justify-content: space-between;*/\n" +
            "  }\n" +
            "  .dropdown-menu > li > a{\n" +
            "    padding: 3px 0;\n" +
            "  }\n" +
            "  .angle{\n" +
            "    width: 0;\n" +
            "    height: 0;\n" +
            "    border: 10px solid transparent;\n" +
            "    border-bottom-color:white;\n" +
            "    position: absolute;\n" +
            "    top: -18px;\n" +
            "    right: 140px;\n" +
            "  }\n" +
            "  .headerMeauLi1{\n" +
            "    /*height: 60px;*/\n" +
            "    padding: 0 10px;\n" +
            "    /*display: flex;*/\n" +
            "    /*align-items: center;*/\n" +
            "  }\n" +
            "  .headerMeauHead{\n" +
            "    height: 48px;\n" +
            "    color: #898989;\n" +
            "    font-size: 14px;\n" +
            "    background: #444444;\n" +
            "    padding:0 18px;\n" +
            "    line-height: 48px;\n" +
            "    margin-bottom: 10px;\n" +
            "  }\n" +
            "  .progress{\n" +
            "    height: 12px;\n" +
            "  }\n" +
            "  .mediaBox{\n" +
            "    padding: 10px 15px;\n" +
            "    /*box-sizing:content-box;*/\n" +
            "    background: #e8f8fd;\n" +
            "    -webkit-border-radius: 5px;\n" +
            "    -moz-border-radius: 5px;\n" +
            "    border-radius: 5px;\n" +
            "  }\n" +
            "  .mediaBox1{\n" +
            "    /*padding: 10px 15px;*/\n" +
            "    /*box-sizing:content-box;*/\n" +
            "    -webkit-border-radius: 5px;\n" +
            "    -moz-border-radius: 5px;\n" +
            "    border-radius: 5px;\n" +
            "  }\n" +
            "  .mediaBox img{\n" +
            "    width: 40px;\n" +
            "    height: 40px;\n" +
            "  }\n" +
            "  .mediaBox1 img{\n" +
            "    width: 20px;\n" +
            "    height: 20px;\n" +
            "  }\n" +
            "  .mediaBox h6{\n" +
            "    color: #b3b3b3;\n" +
            "  }\n" +
            "  .mediaBox h4{\n" +
            "    color: #8a8a8a;\n" +
            "  }\n" +
            "  .media-body{\n" +
            "    vertical-align: middle;\n" +
            "  }\n" +
            "  .badge{\n" +
            "    background: red;\n" +
            "    margin-left: 10px;\n" +
            "  }"
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
