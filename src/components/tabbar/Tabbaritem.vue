<template>
  <div class="tabbar-item" @click="itemclick">
    <div v-if="isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      // 'isActive':true
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path)
    },
    activeStyle () {
      return !this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemclick () {
      this.$router.push(this.path)
    }
  }
}
</script>
<style scoped>
.tabbar-item{
  flex: 1;
  text-align: center;
}
.tabbar-item img{
  width:24px;
  height:24px;
  vertical-align: middle;
}
</style>
