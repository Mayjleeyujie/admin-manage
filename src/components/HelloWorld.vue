<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{message}}</h2>
    <button @click="add">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg:' Eos toa bpp',
      message: 'hello world',
    }
  },
  methods:{
    add(){
      console.log('122');
    }
  },
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
