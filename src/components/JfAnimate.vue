<template>
  <transition :name="name" :mode="mode">
    <div :class="className" v-show="display">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
/**
 * @module components/Animate
 * @author 刘武松 <564163433@qq.com>
 * @time 2020年09月10日 11:31:54 星期四
 * @desc 动画组件
 */
export default {
  name: 'JfAnimate',
  data() {
    return {
    }
  },
  props: {
    display: {
      type: Boolean,
      default: true
    },
    name: {
      type: String,
      defalut: ''
    },
    className: {
      type: String,
      defalut: ''
    },
    mode: {
      type: String,
      defalut: ''
    }
  },
}
</script>
