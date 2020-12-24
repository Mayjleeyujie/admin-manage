<template>
  <div class="addhomework">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>教学管理</el-breadcrumb-item>
                <el-breadcrumb-item>布置作业</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="selectInput">
                <el-button size="small" @click="()=>{$router.go(-1)}">返回上一级</el-button>
            </div> 
        </div>

        <div class="index_home">
            <div class="content">
                <el-form class="addrm" label-width="120px">
                    <el-form-item required label="作业标题">
                        <el-input v-model="form.title" size="small" class="width80" placeholder="请输入" maxlength="30" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item required label="作业内容">
                    <!-- <quillEditor class="ql-editor" :editorProps="editorProps" v-on:onBindEditor="onBindEditor"/> -->
                        <el-input type="textarea" v-model="form.content" class="width80" size="small" placeholder="请输入" maxlength="30" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item required label="布置范围：">
                        <el-button size="small" @click="()=>{taskformsVisible=true}">请选择</el-button>
                    </el-form-item>
                    <el-form-item required label="截止时间：">
                        <el-date-picker
                            v-model="form.time"
                            size="small"
                            value-format="yyyy-MM-dd"
                            type="date"
                            :picker-options="pickerOptions"
                            placeholder="选择日期"
                        ></el-date-picker>
                    </el-form-item>
                     <el-form-item label="添加附件：" size="small" >
                        <el-upload
                            action="https://jsonplaceholder.typicode.com/posts/"
                            list-type="picture-card"
                            :show-file-list="false"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="handleRemove">
                            <i class="el-icon-plus"></i>
                            </el-upload>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="footerBtn">
             <el-button size="small" class="width120" type="primary" @click="addFun">下达</el-button>
        </div>

        <el-dialog
            title="选择对象"
            :visible.sync="taskformsVisible"
            :before-close="taskformsclose"
            width="450px"
            center
            >
             <el-table :data="gridData">
                <el-table-column property="class" label="班级" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="sf" label="身份"></el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button size="small" class="width120" @click="taskformsclose()">取 消</el-button>
                <el-button size="small" class="width120" type="primary" @click="taskformsSubmit()">确 定</el-button>
            </span>
         </el-dialog>


  </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                time: "",
                content:'',
                title:''
            },
            dialogImageUrl: '',
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() < (Date.now()-3600 * 1000 * 24);
                },
            },
            taskformsVisible:false,
            // actionUrl: process.env.BASE_API + addAccessCode('pcapi/api/common/ossFile/addFileInfo',this.uploaderHeaders), //上传文件地址
            uploaderHeaders: {
            // 'Content-Type':'multipart/form-data',
                deviceNumber: 'dev',
                userCode: 1234567123,
                // accessToken: getToken()
                // token: localStorage.getItem("token")
            },
            gridData:[
                {
                    name:'lee jpn',
                    class:'1班',
                    sf:'学生'
                },
                 {
                    name:'李四蛋',
                    class:'3班',
                    sf:'干部'
                },
                {
                    name:'奥克',
                    class:'2班',
                    sf:'学习委员'
                }
            ]
        }
    },
    created(){},
    methods:{
        taskformsclose(){
            this.taskformsVisible = false
        },
        taskformsSubmit(){
            this.taskformsVisible = false

        },
         //上传之前的钩子
        beforeRichTextUpload(file){
            const isLt20M = file.size / 1024 < 20480;  
            var spl = file.name.split(".");
            let filetype=file.type
            //console.log('后缀名',spl[spl.length-1]);  .doc .docx .pdf .xlsx .xls .png .jpg .jpeg
            if(file.type!='application/msword' && file.type!='application/vnd.openxmlformats-officedocument.wordprocessingml.document' &&  file.type!='application/pdf' &&  file.type!='application/vnd.ms-excel' && file.type!='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' &&  filetype!='image/jpeg' &&  filetype!='image/png' &&  filetype!='image/jpg' ){
                this.$message.error("只允许上传.doc .docx .pdf .xlsx .xls .png .jpg .jpeg文件!");
                return false
            }
            if (!isLt20M) {
                this.$message.error("上传文件大小不能超过20M!");
            }
            return isLt20M;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            // this.dialogVisible = true;
        },
        addFun(){}
    }
}
</script>

<style lang="scss">
.addhomework{
    .index_home{
        .content{
        padding:30px;
        }
        .width80{ width: 80%; }
    }
    .footerBtn{
        width: 100%;
        bottom: 0px;
        padding: 10px 40px;
        border-top: 1px solid #E7E8E9;
        background: #fff;
        right: 0px;;
        position: fixed;
        text-align: right;
    }
}
</style>