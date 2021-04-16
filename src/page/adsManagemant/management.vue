<template>
  <div class="processlist">
    <el-tabs v-model="activeTab" class="tabs-full">
        <el-tab-pane label="广告列表" name="overview">
            <!-- <page-overview :pageList="pageList" @setAccountId="setAccountId" :curAccountId="ruleForm.accountId"></page-overview> -->
            <list></list>
        </el-tab-pane>
        <el-tab-pane label="广2" name="overview2">
            1213
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
          activeTab:'overview'
        }
    },
    created(){

    },
    methods:{

    }
}
</script>

<style>

</style>
