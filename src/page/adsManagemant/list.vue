<template>
  <div class="list">
     <el-table
        ref="table"
        :data="tableData"
        class="border rounded"
        size="small"
        style="width: 100%"
        highlight-current-row
      >
      <el-table-column type="index" fixed label="序号" width="60"></el-table-column>
      <el-table-column align="center" label="时间" prop="createTime" width="160"></el-table-column>
      <!-- 多个字段时 -->
       <el-table-column label="线索原因">
          <template slot-scope="{row}">
            <el-tooltip
              :content="row.adsetName"
              placement="top"
            >
              <a>{{row.adsetName}},</a>
            </el-tooltip>
            <el-tooltip
              :content="row.campaignName"
              placement="top"
            >
              <a>{{row.campaignName}},</a>
            </el-tooltip>
            <el-tooltip
              :content="row.adName"
              placement="top"
            >
              <a>{{row.adName}}</a>
            </el-tooltip>
          </template>
      </el-table-column>
      <el-table-column label="线索id">
        <template slot-scope='{row}'>
          <span>{{row.name || '--'}}</span>
        </template>
      </el-table-column>
      <el-table-column label="线索原因"
                  column-key="clueContent"
                  :show-overflow-tooltip='true'
        >
                <template slot-scope="{row}">
                  <a class="text-primary">{{row.fieldData}}</a>
                </template>
      </el-table-column>
      <el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default{
    data() {
        return {
          tableData:[
            {
              campaignName: "CampaignEasteel",
              adsetName: "东西结合",
              adName: "acd",
              createTime: "2021-04-07 18:20:27",
              fieldData:"[{\"values\":[\"1\"],\"name\":\"Quantities\"},{\"values\":[\"crinel.jurj@gmail.com\"],\"name\":\"邮箱\"},{\"values\":[\"Ii\"],\"name\":\"公司名称\"},{\"values\":[\"Roumania\"],\"name\":\"Products interested in\"},{\"values\":[\"Crinel Jurj\"],\"name\":\"全名\"},{\"values\":[\"+400740679156\"],\"name\":\"手机号\"}]"
            },
            {
              campaignName: "teel",
              adsetName: "EAST",
              adName: "pop",
              createTime: "2021-04-07 18:20:27",
              fieldData:"[{\"values\":[\"1\"],\"name\":\"Quantities\"},{\"values\":[\"crinel.jurj@gmail.com\"],\"name\":\"邮箱\"},{\"values\":[\"Ii\"],\"name\":\"公司名称\"},{\"values\":[\"Roumania\"],\"name\":\"Products interested in\"},{\"values\":[\"Crinel Jurj\"],\"name\":\"全名\"},{\"values\":[\"+400740679156\"],\"name\":\"手机号\"}]"
            },
            {
              campaignName: "paignEas",
              adsetName: "cHRome",
              adName: "LI NaNA",
              createTime: "2021-04-07 18:20:27",
              fieldData:"[{\"values\":[\"1\"],\"name\":\"Quantities\"},{\"values\":[\"crinel.jurj@gmail.com\"],\"name\":\"邮箱\"},{\"values\":[\"Ii\"],\"name\":\"公司名称\"},{\"values\":[\"Roumania\"],\"name\":\"Products interested in\"},{\"values\":[\"Crinel Jurj\"],\"name\":\"全名\"},{\"values\":[\"+400740679156\"],\"name\":\"手机号\"}]"
            }
          ]
        }
    },
      created(){

      },
      watch: {
        tableData(val) {
          console.log(val,'111')
          const maxLen = val.length
          let res = val
          let tempData = ''
          let tempStr = ''
          for (let i = 0; i < maxLen; i += 1) {
            tempData = JSON.parse(res[i].fieldData)
            tempStr = ''
            for (let j = 0; j < tempData.length; j += 1) {
              tempStr += tempData[j].name + ': ' + tempData[j].values[0]
            }
            res[i].fieldData = tempStr
          }
          return res
        }
      },
    methods:{},
  }
</script>

<style>
</style>
