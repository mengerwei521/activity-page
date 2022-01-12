<template>
  <div id="app" class="function_flex">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!--不需要缓存组件-->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #2c3e50;
  height: 100%;
  margin-top: 20px;
}
</style>
