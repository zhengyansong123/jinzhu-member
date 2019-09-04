<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<style scoped>
.tabbar{
  display: flex;
  background: #f6f6f6;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -3px 4px rgba(100, 100, 100, 0.1);
  align-items: center;
}
/* .tabbar-item{
  flex: 1;
  text-align: center;
}
.tabbar-item img{
  width:24px;
  height:24px;
  vertical-align: middle;
} */
</style>
