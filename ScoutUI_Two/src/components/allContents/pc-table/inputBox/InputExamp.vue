<template>
  <div class="RecentBox col-md-6">
    <span class="cover l">
      <div class="loading"></div>
    </span>
    <div class="RecentBox-header" style="display: flex;align-items: center;justify-content: space-between;">
      <h3><strong>Text  </strong> Inputs</h3>
      <div>
        <a href="#" class="fresh1"><i class="glyphicon glyphicon-refresh"></i></a>
        <a href="#" class="remove1"><i class="glyphicon glyphicon-remove"></i></a>
      </div>
    </div>
    <div class="RecentBox-content">
      <form class="form-horizontal" id="form1">
        <div class="form-group">
          <label for="inputEmail3" class="col-sm-2 control-label">Normal input field</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="ID" v-model="name">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">Password input field</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password" @keyup="Nerr" @blur="loginCheck"v-model="psd">
            <span class="status status1"></span>
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">New Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword4" v-model="newPsd" placeholder="Password" @keyup="Oninput" @blur="Oninput">
            <span class="status status2"></span>
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword3" class="col-sm-2 control-label">confirm Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword5" v-model="confirmPsd" placeholder="Password" @keyup="checkNewpsd" @blur="checkNewpsd">
            <span class="status status3"></span>
          </div>
        </div>
        <label class="sr-only" for="inputHelpBlock">Input with help text</label>
        <input type="text" id="inputHelpBlock" class="form-control" aria-describedby="helpBlock">
        <span id="helpBlock" class="help-block">
                    A block of help text that breaks onto a new line and may extend beyond one line.</span>
        <textarea class="form-control" rows="3" placeholder="remarks"></textarea>
      </form>

    </div>
    <div class="RecentBox-footer">
      <input class="btn btn-default" type="submit" value="Submit" @click="updateMessage">
      <input class="btn btn-default" type="submit" value="Reset" @click="resetMessage">
    </div>
  </div>
</template>

<script>
  export default {
    name: "InputExamp",
    data(){
      return{
        name:'',
        psd:'',
        newPsd:'',
        confirmPsd:'',
        status:false
      }
    },
    methods:{
      Nerr(){
        $(".status").html("")
      },
      loginCheck(){
        this.$http.post("http://bgs09143010.gotoip1.com/MeiYuan-webapp-php/loginCheck.php", {
          "username":this.name,
          "userpass":this.psd
        }, {
          emulateJSON: true
        }).then((res) => {
          if(res.data==this.name){
            $(".status1").html("√")
            $(".status1").css({color:"mediumspringgreen"})
            this.status=true
          }else{
            $(".status1").html("×")
            $(".status1").css({color:"red"})
            this.status=false
          }
        })
      },
      Oninput(){
        if(this.newPsd.length>6){
          $(".status2").html("√")
          $(".status2").css({color:"mediumspringgreen"})
          this.status=true
        }else{
          $(".status2").html("×")
          $(".status2").css({color:"red"})
          this.status=false
        }
      },
      checkNewpsd(){
        if(this.newPsd==this.confirmPsd){
          $(".status3").html("√")
          $(".status3").css({color:"mediumspringgreen"})
          this.status=true
        }else{
          $(".status3").html("×")
          $(".status3").css({color:"red"})
          this.status=false
        }
      },
      updateMessage(){
        if(this.status==true){
          this.$http.post("http://bgs09143010.gotoip1.com/Backstage-php/updateUserpsd.php", {
            "username":this.name,
            "userpass":this.newPsd
          }, {
            emulateJSON: true
          }).then((res) => {
            if(res.data==1){
              alert("修改成功")
              $("#form1").find("input").val("")
              $("#form1").find(".status").html("")
            }else{
              alert("修改失败")
            }
          })
        }
      },
      resetMessage(){
        $("#form1").find("input").val("")
        $("#form1").find(".status").html("")
      }
    }

  }
</script>

<style scoped>
  .RecentBox{
    float: left;
    border-radius: 5px;
    background:linear-gradient(to right,rgba(176,135,114,.2),rgba(158,124,121,.2));
    margin-right: 1%;
    position: relative;
  }
</style>
