import http from "@/netClient/config";

export async function doLogout() {
  try {
    const response = await http.post("/users/logout");
    console.log(localStorage);
    localStorage.removeItem("accessToken");
    console.log(localStorage);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function fetchTodoList() {
  try {
    const response = await http.get("/todos");
    console.log(response.data.todos);
    return response.data?.todos || [];
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function patchTodo({ id, isDone }) {
  try {
    const response = await http.patch("/todos/" + id, {
      isDone,
    });

    return response?.data ?? {};
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function createTodo({ title }) {
  try {
    const response = await http.post("/todos", {
      title,
    });

    return response?.data ?? {};
  } catch (error) {
    console.error({ error });
    throw error;
  }
}

export async function deleteTodo({ id }) {
  try {
    const response = await http.delete("/todos/" + id);
    //console.warn(response)
    return response?.data ?? {};
  } catch (error) {
    console.error({ error });
    throw error;
  }
}