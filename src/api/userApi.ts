import axiosInstance from "./index";

/** POST 회원가입  */
export function signUpAPI(data: {
  id: string;
  password: string;
  name: string;
  birth: string;
}) {
  return axiosInstance
    .post("/admin/signup", data)
    .then((response) => response.data);
}

/** POST 로그인 */
export function logInAPI(data: { id: string; password: string }) {
  return axiosInstance
    .post("/user/login", data)
    .then((response) => response.data);
}
