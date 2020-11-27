<template>
  <div class="main">
      <el-form
        ref="form"
      >
        <draggable></draggable>
      </el-form>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
    components: {
        draggable
    },
}
</script>

<style>

</style>