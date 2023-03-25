import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { FormEventHandler, useState } from "react";

const login = () => {
  const [userInfo, setUserInfo] = useState({ id: "", password: "" });
  const session = useSession();

  console.log("session", session);
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();

    // redirect : true => callbackUrl 설정할려면
    const res = await signIn("credentials", {
      id: userInfo.id,
      password: userInfo.password,
      redirect: true,
      callbackUrl: "/",
    });

    console.log(res);
  };
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.id}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, id: target.value })
          }
          type="text"
          placeholder="john"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default login;
