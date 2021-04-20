<template>
  <div :id="elId" class="editor"></div>
</template>

<script>
/**
 * @module components/editor
 * @author 
 * @time 
 * @desc 富文本编辑器
 * @prop {string} elId dom的id用于一个页面多个编辑器的时候区分
 * @prop {boolean} autoFocus 是否自动获取焦点
 * @prop {object} config 编辑器配置信息 参考 http://www.wangeditor.com/doc/pages/03-%E9%85%8D%E7%BD%AE%E8%8F%9C%E5%8D%95/
 */
const Editor = import('wangeditor')
export default {
  name: 'WangeEditor',
  data() {
    return {
      val: '',
      context: null
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    elId: {
      type: String,
      default: 'editor'
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  watch: {
    val() {
      if (this.value !== this.val) {
        this.$emit('input', this.val)
      }
    },
    value() {
      if (this.val !== this.value) {
        this.setContent(this.value)
      }
    }
  },
  mounted() {
    Editor.then(({ default: E }) => {
      this.context = new E('#' + this.elId);
      this.init();
    })
  },
  methods: {
    init() {
      this.editorConfig();
      this.context.create()
      if (this.value) {
        this.setContent(this.value)
      }
    },
    /**
     * 编辑器默认配置
     * @author 刘武松 <564163433@qq.com>
     * @time 2020年11月25日 10:36:44 星期三
     * @params {*} params - 任意类型参数
     */
    editorConfig() {
      this.context.config.onchange = this.handleChange;
      this.context.config.onblur = this.handleBlur;
      this.context.config.onfocus = this.handleFocus;
      this.context.config.focus = this.autoFocus
      this.context.config.fontSizes = {
        'x-small': { name: '12px', value: '1' },
        small: { name: '14px', value: '2' },
        normal: { name: '16px', value: '3' },
        large: { name: '18px', value: '4' },
        'x-large': { name: '20px', value: '5' },
        'xx-large': { name: '24px', value: '6' },
        'xxx-large': { name: '30px', value: '7' },
      }
      // 自动配置
      const customConfig = Object.keys(this.config);
      if (customConfig.length) {
        customConfig.forEach(key => {
          this.context.config[key] = this.config[key]
        })
      }
    },
    /**
     * 内容修改
     * @author 刘武松 <564163433@qq.com>
     * @time 2020年11月25日 10:08:45 星期三
     * @params {*} params - 任意类型参数
     */
    handleChange(content) {
      this.val = content;
      this.$emit('content', { content, context: this.context })
    },
    /**
     * 失去焦点
     * @author 刘武松 <564163433@qq.com>
     * @time 2020年11月25日 10:18:45 星期三
     * @params {*} params - 任意类型参数
     */
    handleBlur(content) {
      this.$emit('blur', { content, context: this.context })
    },
    /**
     * 获得焦点
     * @author 刘武松 <564163433@qq.com>
     * @time 2020年11月25日 10:18:56 星期三
     */
    handleFocus(content) {
      this.$emit('focus', { content, context: this.context })
    },
    /**
     * 设置内容
     * @author 刘武松 <564163433@qq.com>
     * @time 2020年11月25日 10:26:06 星期三
     * @params {*} params - 任意类型参数
     */
    setContent(content) {
      if (typeof content !== 'string') {
        this.$message.warning('内容不合法，请输入合法的html字符串')
        return;
      }
      this.val = content
      this.context.txt.html(content)
    },
    /**
     * 清空内容
     * @author 刘武松 <564163433@qq.com>
     * @time 2020年11月25日 10:23:15 星期三
     */
    clearContent() {
      this.val = ''
      this.context.txt.clear()
    }
  }
}
</script>
