<template>
  <div class="main">
      <el-form
        ref="form"
      >
        <draggable>
            <div
              v-for="(item,index) in drawingList"
              :key="index"
              :drawing-list="drawingList"
              :index="index"
              @activeItem="activeFormItem"
              @copyItem="drawingItemCopy"
              @deleteItem="drawingItemDelelte"
            >
            </div>
        </draggable>
      </el-form>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
// import DraggableItem from './DraggableItem'

import drawingDefalut from '@/components/generator/drawingDefalut'


export default {
    components: {
        draggable
    },
    data(){
      return{
        drawingList:drawingDefalut
      }
    },
    mounted(){
      console.log(this.drawingList,)
    },
    methods:{
      activeFormItem(){
        console.log(12)
      },
      drawingItemCopy(){
        
      },
      drawingItemDelelte(){
        console.log(4545455)
      }

    },
    watch:{

    }
}
</script>

<style>

</style>