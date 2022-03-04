<template>
  <main>
    <div class="container">
      <h1>欢迎使用E待办事项!</h1>
      <TodoAdd :tid="todos.length" @add-todo="addTodo" />
      <TodoFilter :selected="filter" @change-filter="filter = $event" />
      <TodoList :todos="filteredTodos" />
    </div>
  </main>
</template>

<script>
import userFilteredTodos from "./composables/userFilteredTodos";
import TodoAdd from "./components/TodoAdd.vue";
import TodoFilter from "./components/TodoFilter.vue";
import TodoList from "./components/TodoList.vue";
import userTodos from "./composables/userTodos";
export default {
  name: "App",
  components: {
    TodoAdd,
    TodoFilter,
    TodoList,
  },
  setup() {
    const { todos, addTodo } = userTodos();
    const { filter, filteredTodos } = userFilteredTodos(todos);
    return {
      todos,
      addTodo,
      filteredTodos,
      filter,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang Sc", "Microsoft YaHei", sans-serif;
}
main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(203, 210, 240);
}
.container {
  width: 30%;
  min-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 40px 28px;
  background-color: rgb(245, 246, 252);
}
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}
</style>
  