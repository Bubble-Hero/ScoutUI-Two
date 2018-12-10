<template>
  <div class="con">
    <p>未注册的手机号验证后自动创建美团账户</p>
    <button style="cursor: pointer">获取短信验证码</button>
    <div class="foo-box">
      <router-link to="/compo/Login/login2">
        <p style="color: #666;">密码登录</p>
      </router-link>
      <router-link to="/compo/Login/login3">
        <p style="color: #666;cursor: pointer">手动注册</p>
      </router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "loginComponCon1",
      mounted(){
        //  alert("因本团队无多余经费连接短信接口，所以请您点击手动注册")

      }
    }
</script>

<style scoped>
  .foo-box{
    display: flex;
    justify-content: space-between;
  }
  .con p{
    color: #bababa;
    height: 3.8rem;
    line-height: 3.8rem;
    font-size: 1.4rem;
  }
  .con button{
    width:100%;
    height: 4.6rem;
    line-height: 4.6rem;
    outline: none;
    border-radius: 3rem;
    border: none;
    background: #b1f2ee;
    color: #fff;
    font-size: 1.6rem;
    margin: 1.5rem 0;
  }
  .type img{
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
    margin: auto 0;
  }

</style>

