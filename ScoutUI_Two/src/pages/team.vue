<template>
  <div class="team">
    <main>
      <right-introduce></right-introduce>
      <comm></comm>
    </main>
  </div>
</template>

<script>
  import Font from "../../static/font/iconfont.css"
    import RightIntroduce from "../components/team/RightIntroduce";
  import Comm from "../components/team/comm";
    export default {
        name: "team",
      components: {Comm, RightIntroduce}
    }
</script>

<style scoped>
  main{
    width: 50%;
    /*background: red;*/
    overflow: hidden;
    /*margin-top: 65px;*/
  }
  .team{
    background: #fff;
  }
</style>
