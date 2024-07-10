import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },

  mutations: {
    // 할 일 추가하기
    addTodo(state, todos) {
      state.todos.push({ id: state.todos.length + 1, text: todos });
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo(state, id) {
      // filter 사용해서 id값과 일치하지 않는 것들로
      state.todos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export default store;
