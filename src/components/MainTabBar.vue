<template>
  <Tabbar>
      <Tabbaritem path="/home">
        <img src="../assets/img/tabbar/logo.png" slot="item-icon">
        <img src="../assets/img/tabbar/logo1.png" slot="item-icon-active">
        <p slot="item-text">首页</p>
      </Tabbaritem>
      <Tabbaritem path="/category">
        <img src="../assets/img/tabbar/logo.png" slot="item-icon">
        <img src="../assets/img/tabbar/logo1.png" slot="item-icon-active">
        <p slot="item-text">分类</p>
      </Tabbaritem>
      <Tabbaritem path="/car">
        <img src="../assets/img/tabbar/logo.png" slot="item-icon">
        <img src="../assets/img/tabbar/logo1.png" slot="item-icon-active">
        <p slot="item-text">购物车</p>
      </Tabbaritem>
      <Tabbaritem path="/about">
        <img src="../assets/img/tabbar/logo.png" slot="item-icon">
        <img src="../assets/img/tabbar/logo1.png" slot="item-icon-active">
        <p slot="item-text">我的</p>
      </Tabbaritem>
    </Tabbar>
</template>
<script>
import Tabbar from '../components/tabbar/Tabbar'
import Tabbaritem from '../components/tabbar/Tabbaritem'
export default {
  components: {
    Tabbar,
    Tabbaritem
  }
}
</script>
<style scoped>
@import "../assets/css/base.css";
</style>
