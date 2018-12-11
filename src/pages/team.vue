<template>
  <div class="all">
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
    width: 100%;
    /*background: red;*/
    /*overflow: hidden;*/
    /*margin-top: 65px;*/
  }
  .all{
    height: 100%;
  }
</style>
