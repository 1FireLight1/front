<template>
  <div  :class="{ done: todo.isDone }">
    <div class="todoItem">
      <li>
      <div class="title">
        {{ todo.title }}
      </div>
      <div class="actions">
        <input
          type="checkbox"
          class="checkbox"
          :checked="todo.isDone"
          @input="onCheckBoxInput"
        />
        <button @click="onDeleteButton" class="del-btn">
          X
        </button>
      </div>
    </li>
    </div>  
  </div>
</template>

<script>
import { patchTodo, deleteTodo } from "@/netClient/todoService";
export default {
  name: "TodoItem",
  data: () => ({
  }),
  props: ["todo"],
  methods: {
    async onCheckBoxInput() {
      try {
        await patchTodo({ id: this.todo.id, isDone: !this.todo.isDone });
        this.$emit("todo-done");
      } catch (error) {
        console.error({ error });
      }
    },
    async onDeleteButton() {
      try {
        await deleteTodo({ id : this.todo.id });
        this.$emit("todo-deleted"); 
      } catch (error) {
        console.error({ error });
      }
    },
  },
};
</script>
