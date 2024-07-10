<template >
  <div>
    <input type="text" :value="newTodo" @input="onInput"/>
    <button @click="addTodo">+</button>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    onInput(e) {
      this.newTodo = e.target.value;
    },
    addTodo(){
      // 할 일을 입력하지 않았을 때
      if(this.newTodo.trim() === '') {
        alert("할 일을 입력해주세요")
        return ; 
      }
      // 
      this.$store.commit('addTodo', this.newTodo)
      this.newTodo = ''
    }
  },
  
}
</script>
<style lang="">
  
</style>