<script >
import TodoHeaderVue from './components/TodoHeader.vue'
import TodoInputVue from './components/TodoInput.vue'
import TodoListVue from './components/TodoList.vue'



export default{
  components: {
    TodoHeaderVue,
    TodoInputVue,
    TodoListVue
  }

}

</script>

<template>
  <header>
    

    <div class="wrapper">
      <TodoHeaderVue/>
      <TodoInputVue/>
      <TodoListVue/>
    </div>
  </header>

  
</template>

<style scoped>

</style>