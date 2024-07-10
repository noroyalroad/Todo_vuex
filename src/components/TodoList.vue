<template >
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{todo.text}}
      <button @click="removeTodo(todo.id)">X</button>
    </li>
  </ul>
</template>
<script>
export default {
  computed:{
    todos(){
      return this.$store.state.todos
    }
  },
  methods: {
    removeTodo (id) {
      this.$store.commit('deleteTodo', id)
    }
  }
  
}
</script>
<style>
  
</style>