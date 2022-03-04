<template>
  <div class="todo-list">
    <TodoListitem 
    v-for="todo in todos" 
    :key="todo.id"
    :todo-item="todo"
    @change-state="todo.completed=$event.target.checked"
    ></TodoListitem>
  </div>
</template>

<script>
import TodoListitem from "./TodoListItem.vue";
export default {
  name: "TodoList",
  components: { TodoListitem },
  props: ["todos"],
};
</script>

<style>
.todo-list {
  display: grid;
  row-gap: 14px;
}
</style>