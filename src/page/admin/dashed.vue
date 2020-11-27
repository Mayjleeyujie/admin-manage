<template>
  <div class="dashed">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="con">
      <div class="canvas" ref="canvas"></div>
    </div>
  </div>
</template>

<script>
import BpmnModeler from "bpmn-js/lib/Modeler";
import { xmlStr } from "@/mock/xmlStr"
export default {
  mounted() {
    this.init();
  },
  data() {
    return {
      bpmnModeler: null,
      container: null,
      canvas: null
    };
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas;
      this.bpmnModeler = new BpmnModeler({
        container: canvas
      });
      this.createNewDiagram();
    },
    createNewDiagram() {
      try {
        const result = this.bpmnModeler.importXML(xmlStr);
        const { warnings } = result;
        console.log(warnings);
      } catch (err) {
        console.log(err.message, err.warnings);
      }
    }
  }
};
</script>

<style lang="scss" coped>
.con{
  width:100%;
  height:500px;
}
.containers {
  width: 100%;
  height: calc(100vh - 82px);
}
.canvas {
  width: 100%;
  height: 100%;
}
</style>