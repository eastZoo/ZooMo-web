import axiosInstance from "./index";

/** POST tdoo */
export function postTodo(data: { title: string; start: string; end: string }) {
  return axiosInstance.post("/todos", data).then((response) => response.data);
}

/** GET todo */
export function getTodos() {
  return axiosInstance.get("/todos").then((response) => response.data);
}
