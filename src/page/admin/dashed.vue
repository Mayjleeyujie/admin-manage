<template>
  <div class="dashed">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs v-model="activeName" type="card" style="width:100% ;height:100%" @tab-click="handleClick">
      <el-tab-pane label="流程设计" name="first">
        <div id="processDesign" ref="processDesign" class="con">
          <el-header>
            <div>
              <ul class="canvas_head">
                <li class="control">
                  <a @click="handleOpen()"> 
                    <input type="file" class="openFile">
                    <i class="el-icon-folder-opened" />
                    导入
                  </a>
                </li>
                <li class="control">
                  <a href="" @click="handleSave()">
                    <i class="el-icon-folder" />
                    保存
                  </a>
                </li>
                <li class="control">
                  <a href="" @click="handleUndo()">
                    <i class="undo" />
                    撤销
                  </a>
                </li>
                 <li class="control">
                  <a
                    title="恢复"
                    @click="handleRedo()"
                  >
                    <i class="redo" />
                    重做
                  </a>
                </li>
                 <li class="control">
                  <a
                    title="放大"
                    @click="handleZoom(0.1)"
                  >
                    <i class="el-icon-circle-plus-outline" />
                    放大
                  </a>
                </li>
                <li class="control">
                  <a
                    title="缩小"
                    @click="handleZoom(-0.1)"
                  >
                    <i class="el-icon-remove-outline" />
                    缩小
                  </a>
                </li>
                <li class="control">
                  <a
                    title="还原"
                    @click="handleZoom(0)"
                  >
                    <i class="el-icon-circle-plus-outline" />
                    还原
                  </a>
                </li>
                <li class="control">
                  <a
                    title="下载SVG图片"
                    @click="handleDownloadSvg()"
                  >
                    <i class="el-icon-picture" />
                    下载SVG图片
                  </a>
                </li>
                <li class="control">
                  <a
                    title="下载BPMN流程图"
                    @click="handleDownloadBPMN()"
                  >
                    <i class="el-icon-picture" />
                    下载BPMN流程图
                  </a>
                </li>
                <li>
                  <a 
                    title="保存图片"
                    @click="handldsaveimage"
                  ></a>
                </li>
              </ul>
            </div>
          </el-header>
            <div class="canvas containers" ref="canvas"></div>
        </div>

      </el-tab-pane>
      <el-tab-pane label="流程设置" name="five">
        <p>
          456564
        </p>
      </el-tab-pane>
    </el-tabs>
    
  </div>
</template>

<script>
import BpmnModeler from "bpmn-js/lib/Modeler";
import { xmlStr } from "@/mock/xmlStr"
// import {CustomModeler} from "@/components/customBpmn"


export default {
  data() {
    return {
      bpmnModeler: null,
      container: null,
      canvas: null,
      activeName:'first',
      scale: 1 // 流程图比例

    };
  },
  mounted() {
    this.init();
    // 去除LOGO
    const bjsIoLogo = document.querySelector('.bjs-powered-by')
    // console.log(bjsIoLogo.firstChild,'--------------------')
    if (bjsIoLogo.firstChild) {
      bjsIoLogo.removeChild(bjsIoLogo.firstChild)
    }
    document.querySelector('.djs-palette').style.display = 'inline-block'

  },
  methods: {
    // 此方法为官方流程画布 否则页面无流程图
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
        // console.log(warnings);
      } catch (err) {
        console.log(err.message, err.warnings);
      }
    },
    /**
     * 下载xml/svg
     *  @param  type  类型  svg / xml
     *  @param  data  数据
     *  @param  name  文件名称
     */
    download(type, data, name) {
      let dataTrack = ''
      const a = document.createElement('a')

      switch (type) {
        case 'xml':
          dataTrack = 'bpmn'
          break
        case 'svg':
          dataTrack = 'svg'
          break
        default:
          break
      }

      var bpmnName =
        this.bpmnModeler._definitions.rootElements[0].name ||
        this.bpmnModeler._definitions.rootElements[0].id
      var filename = bpmnName + '.' + dataTrack

      name = name || `${filename}`

      a.setAttribute(
        'href',
        `data:application/bpmn20-xml;charset=UTF-8,${encodeURIComponent(data)}`
      )
      a.setAttribute('target', '_blank')
      a.setAttribute('dataTrack', `diagram:download-${dataTrack}`)
      a.setAttribute('download', name)

      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    },

    //tab切换
    handleClick(){
    },
    //导入
    handleOpen(){

    },
    //保存
    handleSave(){
      try {
        const result = this.bpmnModeler.saveXML({ format: true });
        const { xml } = result;

        var xmlBlob = new Blob([xml], {
          type: "application/bpmn20-xml;charset=UTF-8,"
        });

        var downloadLink = document.createElement("a");
        downloadLink.download = "ops-coffee-bpmn.bpmn";
        downloadLink.innerHTML = "Get BPMN SVG";
        downloadLink.href = window.URL.createObjectURL(xmlBlob);
        downloadLink.onclick = function(event) {
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
    handleUndo(){
      this.bpmnModeler.get("commandStack").undo();
    },
    //恢复-前进
    handleRedo(){
      this.bpmnModeler.get("commandStack").redo();
    },

    //放大或缩小
    handleZoom(radio){
      const newScale = !radio ? 1.0 : this.scale + radio;
      this.bpmnModeler.get("canvas").zoom(newScale);

      this.scale = newScale;
    },
    //保存svg
    handleDownloadSvg(){
       this.bpmnModeler.saveSVG({ format: true }, (err, data) => {
        console.log('err：' + err)
        this.download('svg', data)
        this.processDiagramSvg = data
      })
    },
    //下载xml流程图
    handleDownloadBPMN(){
      this.bpmnModeler.saveXML({ }, (err, data) => {
        if (err) {
          this.$message.error(err)
        } else {
          this.download('xml', data.replace(/ns0:/g, 'flowable:'))
        }
      })
    },
    //
    handldsaveimage(){

    }
  }
};
</script>

<style lang="scss" coped>
html{
  touch-action: none;
}
.con{
  width:100%;
  height:500px;
  touch-action: none;
    .canvas_head{
      display: flex;
      border:1px solid #ddd;
      padding:10px;
      .control {
        padding:0 5px;

      }.openFile{
        display: none
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
      width: 100%;
      height: calc(100vh - 82px);
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }
}
.containers {
  width: 100%;
  height: calc(100vh - 82px);
}
.canvas {
  width: 100%;
  height: 100%;
}
.bjs-powered-by, .cjs-powered-by, .djs-powered-by, .io-control {
    background: #FFF;
    border-radius: 2px;
    border: solid 1px #E0E0E0;
    padding: 5px;
}
</style>