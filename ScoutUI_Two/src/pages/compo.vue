<template>
    <div class="compoBox">
        <div class="compoBoxSilde">
            <compo-side></compo-side>
        </div>
        <div class="compoBoxContent">
            <router-view ></router-view>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    import '../../static/js/shCore'
    import CompoSide from "../components/CompoSide";
    export default {
        name: "compo",
      components: {CompoSide},
      methods:{
            getJs(){
              var script=document.createElement('script')
              $("head").append(script)
              $($("script")[0]).attr("src","../../static/js/shCore")
        }
      },
      mounted(){
          this.getJs()
      },
      scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
    }


</script>

<style scoped>
.compoBox{
  display: flex;
  width: 100%;
  /*height: 100%;*/
  background: url("../../static/img/bbg.png");
  background-size: 100% 100%;
  position: relative;
  padding-left: 230px;
}
  .compoBoxSilde{
    position: fixed;
    left: 0;
    top: 0;
  }
  .compoBoxContent{
    width: 100%;
    height: 100%;
  }
</style>
