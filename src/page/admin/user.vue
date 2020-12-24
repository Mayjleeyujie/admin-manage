<template>
  <div class="hello">
    <div class="form">
       <!-- <draggable class="wrapper" v-model="list">
          <div v-for="item in list" :key="item" class="item">
            <p>{{item}}</p>
          </div>
      </draggable> -->
      <div>
        <el-row style="margin-top: 17px;">
          <el-col>
            <FDMenu></FDMenu>
          </el-col>
          <el-col>
              <Panel/>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicForm from 'vue-dynamic-form-component'
import draggable from 'vuedraggable'
import FDMenu from '@/components/form-design/FDMenu'
import Panel from '@/components/form-design/Panel'


export default {
   props: ['lang'],
   components: {
     draggable,
     FDMenu,
     Panel,
    },
    data () {
      return {
        list: [1,2,34,4,54,5],
        code:1,
        descriptors: {
        date: { type: 'date', label: 'date\'s label', required: false },
        number: { type: 'number', label: 'number\'s label', required: true, props: { placeholder: 'please input the number' } },
        string: { type: 'string', label: 'string\'s label', required: true, pattern: /^test$/g },
        url: { type: 'url', label: 'url\'s label', required: true, props: { placeholder: 'please input the url' } },
        email: { type: 'email', label: 'email\'s label', required: false },
        enum: {
          type: 'enum',
          label: 'enum\'s label',
          enum: ['value-1', 'value-2'],
          options: [
            { label: 'option-1', value: 'value-1', disabled: true },
            { label: 'option-2', value: 'value-2' }
          ]
        }
      },
      data: {}
    }
  }
}
</script>
<style scoped>
.hello{
  height: auto;
  overflow: auto;
  margin-bottom:20px;
}
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
.item{
  width: 300px;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
  margin:10px 0;
}
</style>
