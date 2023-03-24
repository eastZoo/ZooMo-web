import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/router";
import * as S from "./headerMenu.style";

export const HeaderMenu = () => {
  const router = useRouter();
  return (
    <S.HeaderMenu>
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
    </S.HeaderMenu>
  );
};
