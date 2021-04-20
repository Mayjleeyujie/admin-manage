<template>
  <div class="container">
    <slot name="toolbar"></slot>
    <div :style="style">
      <slot></slot>
    </div>
    <slot name="pagination"></slot>
  </div>
</template>

<script>

export default {
  name: 'Container',
  computed: {
    style() {
      let style = { height: '100%' }
      const { toolbar, pagination } = this.$slots
      let removeHeight = 0
      if (toolbar) {
        removeHeight += 56
      }
      if (pagination) {
        removeHeight += 60
      }
      if (removeHeight !== 0) {
        style = {
          height: `calc(100% - ${removeHeight}px)`
        }
      }
      return style
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>