<template>
  <div class="dashed">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs
      v-model="activeName"
      type="card"
      style="width: 100%; height: 100%"
      @tab-click="handleClick"
    >
      <el-tab-pane label="流程设计" name="first">
        <div id="processDesign" ref="processDesign" class="con">
          <!-- <div id="js-properties-panel" class="panel"></div> -->
          <!-- <panel ref="panel" :element="element" :businessObject="businessObject" :moddle="moddle" :modeling="modeling"/> -->
          <el-header>
            <div>
              <ul class="canvas_head">
                <!-- <li>
                  <a href="javascript:" @click="$refs.refFile.click()"
                    >加载本地BPMN文件</a
                  >
                  <input
                    type="file"
                    id="files"
                    ref="refFile"
                    style="display: none"
                    @change="loadXML"
                  />
                </li> 
                <li class="control">
                  <a href="" @click="handleSave()">
                    <i class="el-icon-folder" />
                    保存
                  </a>
                </li>-->
                <li class="control">
                  <a href="" @click="handleUndo()">
                    <i class="undo" />
                    撤销
                  </a>
                </li>
                <li class="control">
                  <a title="恢复" @click="handleRedo()">
                    <i class="redo" />
                    重做
                  </a>
                </li>
                <li class="control">
                  <a title="放大" @click="handleZoom(0.1)">
                    <i class="el-icon-circle-plus-outline" />
                    放大
                  </a>
                </li>
                <li class="control">
                  <a title="缩小" @click="handleZoom(-0.1)">
                    <i class="el-icon-remove-outline" />
                    缩小
                  </a>
                </li>
                <li class="control">
                  <a title="还原" @click="handleZoom(0)">
                    <i class="el-icon-circle-plus-outline" />
                    还原
                  </a>
                </li>
                <li class="control">
                  <a title="下载SVG图片" @click="handleDownloadSvg()">
                    <i class="el-icon-picture" />
                    下载SVG图片
                  </a>
                </li>
                <li class="control">
                  <a title="保存BPMN文件" @click="handleDownloadBPMN()">
                    <i class="el-icon-picture" />
                    保存BPMN文件
                  </a>
                </li>
                <li>
                  <a title="保存图片" @click="handldsaveimage"></a>
                </li>
                &nbsp;&nbsp;
                <li>
                  <el-upload
                    style="display: inline-block"
                    :file-list="fileList"
                    class="upload-demo"
                    action=""
                    :auto-upload="false"
                    :show-file-list="false"
                    :on-change="handleOnchangeFile"
                    :on-remove="handleRemove"
                  >
                    <a>导入</a>
                  </el-upload>
                </li>
              </ul>
            </div>
          </el-header>
          <div class="canvas containers" ref="canvas"></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="流程设置" name="five">
        <p>456564
        </p>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BpmnModeler from "bpmn-js/lib/Modeler";
import { xmlStr } from "@/mock/xmlStr";
// import panel from '@/components/panel/panel.vue'
//汉化
import customTranslate from '@/components/custom-modeler/custom/customTranslate/customTranslate'


 // 右侧属性栏
import propertiesPanelModule from 'bpmn-js-properties-panel'
import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda'

 // 一个描述的json
import camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda'

import activitiModdleDescriptor from '@/util/activiti.json'//要自定义的属性

export default {
  data() {
    return {
      bpmnModeler: null,
      container: null,
      canvas: null,
      activeName: "first",
      scale: 1, // 流程图比例
      xmlStr: xmlStr,
      fileList: [],
       businessObject:null,
      element:null,
      moddle:null,
      modeling:null,
    };
  },
  // components:{panel},

  mounted() {
    this.init();
    // 去除LOGO
    const bjsIoLogo = document.querySelector(".bjs-powered-by");
    // console.log(bjsIoLogo.firstChild,'--------------------')
    if (bjsIoLogo.firstChild) {
      bjsIoLogo.removeChild(bjsIoLogo.firstChild);
    }
    document.querySelector(".djs-palette").style.display = "inline-block";

    // document.wnidow.addEventListener('touchmove', func, { passive: true })
  },
  methods: {
    // 此方法为官方流程画布 否则页面无流程图
    init() {
       // 获取到属性ref为“content”的dom节点
      this.container = this.$refs.content
      // 获取到属性ref为“canvas”的dom节点
      const canvas = this.$refs.canvas
      //汉化包装成模块
      const customTranslateModule = {
        translate: ['value', customTranslate]
      }
      //建模 - 创建bpmn对象
      this.bpmnModeler = new BpmnModeler({
        container: canvas,

        //加入工具栏支持
        propertiesPanel: {
          parent: '#processDesign'
        },

        additionalModules: [
          //右边的工具栏
          propertiesProviderModule,
          propertiesPanelModule,

           //右边的工具栏-汉化
           customTranslateModule
        ],
        moddleExtensions: {
          //如果要在属性面板中维护camunda：XXX属性，则需要此 
          camunda: camundaModdleDescriptor,
          // activiti: activitiModdleDescriptor
        }
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
      
    },
    loadXML() {
      const that = this;
      const file = this.$refs.refFile.files[0];

      var reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function () {
        that.xmlStr = this.result;
        that.createNewDiagram();
      };
    },
    /**
     * 下载xml/svg
     *  @param  type  类型  svg / xml
     *  @param  data  数据
     *  @param  name  文件名称
     */
    download(type, data, name) {
      let dataTrack = "";
      const a = document.createElement("a");

      switch (type) {
        case "xml":
          dataTrack = "bpmn";
          break;
        case "svg":
          dataTrack = "svg";
          break;
        default:
          break;
      }

      var bpmnName =
        this.bpmnModeler._definitions.rootElements[0].name ||
        this.bpmnModeler._definitions.rootElements[0].id;
      var filename = bpmnName + "." + dataTrack;

      name = name || `${filename}`;

      a.setAttribute(
        "href",
        `data:application/bpmn20-xml;charset=UTF-8,${encodeURIComponent(data)}`
      );
      a.setAttribute("target", "_blank");
      a.setAttribute("dataTrack", `diagram:download-${dataTrack}`);
      a.setAttribute("download", name);

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },

    //tab切换
    handleClick() {},
    //导入
    handleOpen() {
      document.getElementsByClassName("openFile")[0].click();
    },
    onOpenFile(files) {
      this.handleOpenFile(files);
    },
    // 导入xml文件
    handleOpenFile(e) {
      const that = this;
      const file = e.target.files[0];
      const reader = new FileReader();
      let data = "";
      reader.readAsText(file);
      reader.onload = function (event) {
        data = event.target.result;
        this.renderDiagram(data, "open");
      };
    },
    //保存
    handleSave() {
      try {
        const result = this.bpmnModeler.saveXML({ format: true });
        const { xml } = result;

        var xmlBlob = new Blob([xml], {
          type: "application/bpmn20-xml;charset=UTF-8,",
        });

        var downloadLink = document.createElement("a");
        // downloadLink.download = "ops-coffee-bpmn.bpmn";
        a.setAttribute(
          "href",
          `data:application/bpmn20-xml;charset=UTF-8,${encodeURIComponent(
            data
          )}`
        );
        a.setAttribute("target", "_blank");
        a.setAttribute("dataTrack", `diagram:download-${dataTrack}`);
        a.setAttribute("download", name);
        downloadLink.innerHTML = "Get BPMN SVG";
        downloadLink.href = window.URL.createObjectURL(xmlBlob);
        downloadLink.onclick = function (event) {
          document.body.removeChild(event.target);
        };
        downloadLink.style.visibility = "hidden";
        document.body.appendChild(downloadLink);
        downloadLink.click();
      } catch (err) {
        console.log(err);
      }
    },
    //撤销
    handleUndo() {
      this.bpmnModeler.get("commandStack").undo();
    },
    //恢复-前进
    handleRedo() {
      this.bpmnModeler.get("commandStack").redo();
    },

    //放大或缩小
    handleZoom(radio) {
      const newScale = !radio ? 1.0 : this.scale + radio;
      this.bpmnModeler.get("canvas").zoom(newScale);

      this.scale = newScale;
    },
    //保存svg
    handleDownloadSvg() {
      this.bpmnModeler.saveSVG({ format: true }, (err, data) => {
        console.log("err：" + err);
        this.download("svg", data);
        this.processDiagramSvg = data;
      });
    },
    //下载XML格式
    handleDownloadBPMN() {
      this.bpmnModeler.saveXML({}, (err, data) => {
        if (err) {
          this.$message.error(err);
        } else {
          this.download("xml", data.replace(/ns0:/g, "flowable:"));
        }
      });
    },
    //保存图片
    handldsaveimage() {},
    //上传图片
    handleOnchangeFile(file) {
      const reader = new FileReader();
      let data = "";
      reader.readAsText(file.raw);
      reader.onload = (event) => {
        data = event.target.result;
        this.bpmnModeler.importXML(data, (err) => {
          if (err) {
            this.$message.info("导入失败");
          } else {
            this.$message.success("导入成功");
          }
        });
      };
    },
    handleRemove(file) {
      for (let i = 0; i < this.fileList.length; i++) {
        if (file.name === this.fileList[i].name) {
          this.fileList.splice(i, 1);
        }
      }
    },
  },
};
</script>

<style lang="scss" coped>
html {
  touch-action: none;
}
.con {
  width: 100%;
  height: 500px;
  touch-action: none;
  .canvas_head {
    display: flex;
    border: 1px solid #ddd;
    padding: 10px;
    .control {
      padding: 0 5px;
    }
    .openFile {
      display: none;
    }
  }
  .containers {
    background: white;
    overflow: auto;
    background-image: linear-gradient(
        90deg,
        rgba(220, 220, 220, 0.5) 6%,
        transparent 0
      ),
      linear-gradient(rgba(192, 192, 192, 0.5) 6%, transparent 0);
    background-size: 12px 12px;
    width: 85%;
    height: calc(100vh - 82px);
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
}
.containers {
  width: 80%;
  height: calc(100vh - 82px);
}
.canvas {
  width: 100%;
  height: 100%;
}
.bjs-powered-by,
.cjs-powered-by,
.djs-powered-by,
.io-control {
  background: #fff;
  border-radius: 2px;
  border: solid 1px #e0e0e0;
  padding: 5px;
}
.bpp-properties-panel{
    z-index: 999;
    position: absolute;
    right: 0;
    top: 0;
    width: 400px;
}
</style>