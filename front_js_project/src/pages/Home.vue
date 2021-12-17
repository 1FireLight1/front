<template>
  <div class="home-page">
    <CreateTodo @todo-created="onTodoCreated" />
    <ul class="todo-list">
      <TodoItem v-for="todoItem in todoList" :key="todoItem.id"
        class="todo-item"
        :todo = "todoItem" 
        @todo-deleted="fetchTodoList" 
        @todo-done="fetchTodoList"/> 
        <!-- <div class="title">
          {{ todoItem.title }}
        </div>
        <div class="actions">
          <input
            type="checkbox"
            class="checkbox"
            :checked="todoItem.isDone"
            @input="onCheckBoxInput(todoItem.id, todoItem.isDone)"
          />
          <button @click="onDeleteButton(todoItem.id)" class="del-btn">
            X
          </button>
        </div> -->
    </ul>
  </div>
</template>

<script>
import CreateTodo from "@/components/CreateTodo";
import TodoItem from "@/components/TodoItem";
import { fetchTodoList} from "@/netClient/todoService";
export default {
  name: "HomePage",
  components: {
    CreateTodo,
    TodoItem
  },
  created() {
    this.fetchTodoList();
  },
  

  data: () => ({
    todoName: "",
    todoList: [],
  }),
  methods: {
    onTodoCreated(createdTodo) {
      this.todoList.unshift(createdTodo);
    },
    async fetchTodoList() {
      try {
        this.todoList = await fetchTodoList();
        console.log(this.todoList);
      } catch (error) {
        console.error({ error });
      }
    },
  //   async onCheckBoxInput(id, isDone) {
  //     try {
  //       await patchTodo({ id, isDone: !isDone });
  //       this.fetchTodoList(); //todo fix this
  //     } catch (error) {
  //       console.error({ error });
  //     }
  //   },
  //   async onDeleteButton(id) {
  //     try {
  //       await deleteTodo({ id });
  //       this.fetchTodoList(); //todo fix this
  //     } catch (error) {
  //       console.error({ error });
  //     }
  //   },
  },
};
</script>

<style scoped></style>
