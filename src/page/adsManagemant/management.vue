<template>
  <div class="processlist">
    <el-tabs v-model="activeTab" class="tabs-full" @tab-remove="removeTab">
        <el-tab-pane label="广告列表" name="first">
            <!-- <page-overview :pageList="pageList" @setAccountId="setAccountId" :curAccountId="ruleForm.accountId"></page-overview> -->
            <list></list>
            <el-button @click="addTabs(activeTab)">添加tab</el-button>
        </el-tab-pane>
        <el-tab-pane v-for="item in tabsList"
         :key="item.index"
         :name="item.name"
         :label="item.title"
         :closable="item.closable"
         type="card"
        >
          {{item.content}}
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import list from './list.vue'
export default {
    components:{
      list,
    },
    data(){
        return{
          activeTab:'first',
          tabIndex:0,
          index:1,
          tabsList:[],
        }
    },
    created(){

    },
    methods:{
      /**
           * 动态添加选项卡
           * @author
           * @time 20210419
           * @param
      */
      addTabs(targetName){
        let newTabName = ++this.tabIndex + '';
        this.tabsList.push({
          name:`${newTabName}`,
          title:`${newTabName}的标题`,
          label:'tab 1111',
          content:`这是${newTabName}的显示内容`,
          closable:true,
        })
        this.activeTab = newTabName
      },
        /**
             * 删除选项卡
             * @author
             * @time 20210419
             * @param
        */
        removeTab(type) {
            const index = this.tabsList.findIndex(item => item.name == type)
            if (index !== -1) {
              this.tabsList.splice(index, 1)
            }
            this.activeTab = 'first'
        },
    }
}
</script>

<style>

</style>
