<template>
  <div class="menu">
    <el-collapse v-model="activeNames">
        <el-collapse-item title="基础字段" name="1">
            <draggable
                :list="base.child"
            >
                <div class="cell" v-for="(item,i) in base.child" :key="i">
                    <p class="left">
                       <!-- <span :class="`iconfont icon-${item.icon}`"></span> -->
                    </p>
                    <p class="right">{{item.title}}</p>
                </div>
            </draggable>
        </el-collapse-item>
        <el-collapse-item title="高级字段" name="2">
            <div>123</div>
        </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    components:{
        draggable
    },
    data(){
        return{
            activeNames:['1'],
            base:{
                title:'基础字段',
                child:[
                    {
                        title:'单行文本',
                        type:'input',
                        value:'',
                        code:'',
                        option: [
                                {
                                value: 'string',
                                label: '字符串'
                                },
                                {
                                value: 'bool',
                                label: '布尔值'
                                },
                                {
                                value: 'int',
                                label: '整数'
                                },
                                {
                                value: 'float',
                                label: '浮点数'
                                },
                                {
                                value: 'url',
                                label: 'URL地址'
                                },
                                {
                                value: 'email',
                                label: '邮箱地址'
                                }
                        ]
                    },
                    {
                        title:'多行文本',
                        type:'textarea',
                        value:'',
                        code:'',
                        optiond:{
                            width:'100%',
                             defaultValue: '',
                            required: false,
                            disabled: false,
                            placeholder: '',
                            regEx: '',
                            maxlength: 100
                        },
                         key: ''

                    },
                    {
                        title: '单选框组',
                        type: 'radio',
                        icon: 'danxuankuang',
                        value: '',
                        code: '',
                        options: {
                        width: '100%',
                        required: false,
                        disabled: false,
                        defaultValue: '',
                        option: [
                            {
                            value: '值1',
                            label: '选项1'
                            },
                            {
                            value: '值2',
                            label: '选项2'
                            },
                            {
                            value: '值3',
                            label: '选项3'
                            }
                         ]
                        },
                         key: ''
                    },
                    {
                        title: '开关',
                        type: 'switch',
                        icon: 'kaiguan',
                        value: false,
                        code: '',
                        options: {
                        defaultValue: false,
                        required: false,
                        disabled: false
                        },
                        key: ''
                    }
                    
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.menu{
    width:300px;
}
.cell {
  cursor: move;
  float: left;
  height: 30px;
  line-height: 30px;
  width: 100px;
  background-color: #ecf5ff;
  margin: 0 10px 10px 0;
}
.cell .left {
  float: left;
  width: 27px;
  height: 100%;
  margin: 0;
}
.cell .left img {
  position: relative;
  top: -1px;
  left: 5px;
}
.cell .right {
  float: left;
  width: 73px;
  height: 100%;
  margin: 0;
}
</style>