<template>
<container>
    <JfAnimate name="right-move" :display="shopIds.length>0" class-name="custom-button-group">
        <!-- 已选 个 -->
        <span class="count">已勾选{{shopIds.length}}个 </span>
        <el-divider direction="vertical" class="ml-16"></el-divider>
        <span>复制</span>
        <el-divider direction="vertical" class="ml-16"></el-divider>
        <span> 删除</span>
    </JfAnimate>
    <el-table ref="table" :data="tableData" class="border rounded" size="small" style="width: 100%" highlight-current-row @selection-change="changeColumn">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" fixed label="序号" width="60"></el-table-column>
        <el-table-column align="center" label="时间" prop="createTime" width="160"></el-table-column>
        <!-- 多个字段时 -->
        <el-table-column label="线索原因">
            <template slot-scope="{row}">
                <el-tooltip :content="row.adsetName" placement="top">
                    <a>{{row.adsetName}},</a>
                </el-tooltip>
                <el-tooltip :content="row.campaignName" placement="top">
                    <a>{{row.campaignName}},</a>
                </el-tooltip>
                <el-tooltip :content="row.adName" placement="top">
                    <a>{{row.adName}}</a>
                </el-tooltip>
            </template>
        </el-table-column>
        <el-table-column label="线索id">
            <template slot-scope='{row}'>
                <span>{{row.name || '--'}}</span>
            </template>
        </el-table-column>
        <el-table-column label="线索来源">
            <template slot-scope='{row}'>
                <span>{{row.ly || '--'}}</span>
            </template>
        </el-table-column>
        <el-table-column label="线索原因" column-key="clueContent" :show-overflow-tooltip='true'>
            <template slot-scope="{row}">
                <a class="text-primary">{{row.fieldData}}</a>
            </template>
        </el-table-column>
        <el-table-column>
        </el-table-column>
    </el-table>
</container>
</template>

<script>
export default {
    data() {
        return {
            shopIds: [],
            a: false,
            tableData: [

            ]
        }
    },
    created() {

    },
    watch: {
        tableData(val) {
            console.log(val, '111')
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
    created() {
        this.init();
    },
    methods: {
        changeColumn(params) {
            this.shopIds = params.map(item => item.code);
        },
        init() {
            this.tableData = [{
                    campaignName: "CampaignEasteel",
                    adsetName: "东西结合",
                    adName: "acd",
                    ly: '互联网',
                    code: '1',
                    createTime: "2021-04-07 18:20:27",
                    fieldData: "[{\"values\":[\"1\"],\"name\":\"Quantities\"},{\"values\":[\"crinel.jurj@gmail.com\"],\"name\":\"邮箱\"},{\"values\":[\"Ii\"],\"name\":\"公司名称\"},{\"values\":[\"Roumania\"],\"name\":\"Products interested in\"},{\"values\":[\"Crinel Jurj\"],\"name\":\"全名\"},{\"values\":[\"+400740679156\"],\"name\":\"手机号\"}]"
                },
                {
                    campaignName: "teel",
                    adsetName: "EAST",
                    adName: "pop",
                    ly: '互联网',
                    ly: '互联网',
                    code: '2222',
                    createTime: "2021-04-07 18:20:27",
                    fieldData: "[{\"values\":[\"1\"],\"name\":\"Quantities\"},{\"values\":[\"crinel.jurj@gmail.com\"],\"name\":\"邮箱\"},{\"values\":[\"Ii\"],\"name\":\"公司名称\"},{\"values\":[\"Roumania\"],\"name\":\"Products interested in\"},{\"values\":[\"Crinel Jurj\"],\"name\":\"全名\"},{\"values\":[\"+400740679156\"],\"name\":\"手机号\"}]"
                },
                {
                    campaignName: "paignEas",
                    adsetName: "cHRome",
                    adName: "LI NaNA",
                    ly: '互联网',
                    code: '33333',
                    createTime: "2021-04-07 18:20:27",
                    fieldData: "[{\"values\":[\"1\"],\"name\":\"Quantities\"},{\"values\":[\"crinel.jurj@gmail.com\"],\"name\":\"邮箱\"},{\"values\":[\"Ii\"],\"name\":\"公司名称\"},{\"values\":[\"Roumania\"],\"name\":\"Products interested in\"},{\"values\":[\"Crinel Jurj\"],\"name\":\"全名\"},{\"values\":[\"+400740679156\"],\"name\":\"手机号\"}]"
                },
                {
                    campaignName: "teel",
                    adsetName: "EAST",
                    adName: "pop",
                    ly: '问卷调查',
                    code: '2222',
                    createTime: "2021-04-07 18:20:27",
                    fieldData: "[{\"values\":[\"1\"],\"name\":\"Quantities\"},{\"values\":[\"crinel.jurj@gmail.com\"],\"name\":\"邮箱\"},{\"values\":[\"Ii\"],\"name\":\"公司名称\"},{\"values\":[\"Roumania\"],\"name\":\"Products interested in\"},{\"values\":[\"Crinel Jurj\"],\"name\":\"全名\"},{\"values\":[\"+400740679156\"],\"name\":\"手机号\"}]"
                },
            ]
            // this.$set(this.tableData,)
        },
    }
}
</script>

<style lang="scss" scoped>
.count {
    margin-left: 20px;
}
</style>
