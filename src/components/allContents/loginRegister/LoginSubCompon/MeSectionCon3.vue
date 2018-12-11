<template>
    <div>
      <div class="section-tel">
        <div class="area">
          <i class="iconfont">&#xe63b;</i>
        </div>
        <div class="tel"><input id="t3" type="password" placeholder="请输入密码" v-model="psd" @input="changebtncolor"/></div>
      </div>
      <div class="errbox"></div>
      <button class="regist-btn"  @click="regist">注册</button>
      <router-link to="/compo/Login/login2" class="mimabox">
        <p style="color: #666;" class="mima">返回登录</p>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "MeSectionCon3",
      data(){
          return {
            name:"",
            psd:"",
            timer:null
          }
      },
      methods: {
        changeTitle() {
          $("#t1").attr("placeholder", "请输入账号")
          $(".Big-title").html("欢迎注册美团哟")
          $(".eightsix").html("")
        },
        getName() {
          this.name = $("#t1").val()
        },
        getpressdown(){
          $("#t3").keyup(function () {
            if($("#t3").val()==""){
              $(".regist-btn").css({
                backgroundColor:"#b1f2ee"
              })
            }
          })
        },
        changebtncolor(){
          //密码输入事件让errbox内容消失
          $(".errbox").html("")
          //如果密码不为空 改变button颜色
          if(!$("#t1").val()==""&&!$("#t3").val()==""){
            $(".regist-btn").css({
              backgroundColor:"#1bbfb3"
            })
          }
        },
        regist() {
          let time=new Date()
          let registTime=time.toLocaleString()
          //console.log(registTime)
          this.getName()
          //判断密码长度
          let psdlength=$("#t3").val().length
          if(psdlength<6&&(!$("#t1").val()=="")){
              $(".errbox").html("密码长度不能小于6位哦")
          }else if (!$("#t1").val() == "" && !$("#t3").val() == "") {
            //让errbox内容消失
            $(".errbox").html("")
            //改变btn
            $(".regist-btn").html("注册中...")
            //启动定时器
            let count=0
            this.timer=setInterval(()=>{
              count++
              if(count==1){
                $(".regist-btn").html("注册中.")
              }else if(count==2){
                $(".regist-btn").html("注册中..")
              }else if(count==3){
                $(".regist-btn").html("注册中...")
              }
            },300)
            this.$http.post("http://bgs09143010.gotoip1.com/MeiYuan-webapp-php/save.php", {//这里是将表单的数据提交到该地址
              "username":this.name,//我将表单的两个文本传过去
              "userpass":this.psd,
              "time":registTime
            },{
              emulateJSON:true
            }).then((res)=> {//这个是获取到了刚传过去文件该文件的整个数据
              //改变btn内容
              $(".regist-btn").html("注册")
              //停止定时器
              clearInterval(this.timer)
              this.timer=null
              //判断
              if(res.data==1){    //注册成功
                //用户名先存到本地
                window.localStorage.setItem("username",this.name)
                this.$router.push({name:'MeAll',params:{name:this.name}});
              }else if(res.data=="rep"){
                $(".errbox").html("该用户已被注册")
              }else{
                $(".errbox").html("网络出现问题，请重试")
              }
            })
          }
        }
      },
      mounted(){
          this.changeTitle()
          this.getpressdown()

      },
      beforeDestroy(){
        $("#t1").attr("placeholder","请输入手机号")
        $(".Big-title").html("欢迎登录美团")
        $(".eightsix").html("+86")
      }
    }
</script>

<style lang="scss" scoped>
  .errbox{
    color:red;
    background-color: transparent;
    font-size: 1.2rem;
    height: 2rem;
  }
  .tel input{
    width: 100%;
    height: 100%;
    padding-left: 1.2rem;
    color: #111;
    font-size: 1.6rem;
    height: 2.6rem;
    border: none;
  }
  .section-tel{
    height: 5.6rem;
    line-height: 5.6rem;
    background: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .area{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    color: #575757;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .tel{
    width: 96%;
    height: 5.6rem;
  }
  .area i{
    margin-left: .5rem;
    font-size: 1.2rem;
    margin-top: .3rem;
  }
  .mimabox{
    width: 100%;display: flex;
    .mima{
      color: #bababa;
      height: 4rem;
      line-height: 3.8rem;
      font-size: 1.4rem;
      margin-top: 1rem;
      margin-left: auto;
    }
  }
  .regist-btn {
    width: 100%;
    height: 4.6rem;
    line-height: 4.6rem;
    outline: none;
    border-radius: 3rem;
    border: none;
    background: #b1f2ee;
    color: #fff;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
</style>
