import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/router";
import React from "react";

const NavList = () => {
  const router = useRouter();
  return (
    <>
      <Button
        type="button"
        color="black"
        layout="icon"
        size="sm"
        label="Todo"
        onClick={() => router.replace("/todo")}
      ></Button>
      <Button
        type="button"
        color="black"
        layout="icon"
        size="sm"
        label="Calendar"
        onClick={() => router.replace("/calendar")}
      ></Button>
      <Button
        type="button"
        color="black"
        layout="icon"
        size="sm"
        label="Bookmark"
        onClick={() => router.replace("/bookmark")}
      ></Button>
    </>
  );
};

export default NavList;
