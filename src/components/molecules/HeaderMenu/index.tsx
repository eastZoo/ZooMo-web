import { Button } from "@/components/atoms/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import * as S from "./headerMenu.style";

export const HeaderMenu = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <S.HeaderMenu>
      {session?.user ? (
        <>
          <Button
            type="button"
            color="black"
            layout="icon"
            size="sm"
            label="signout"
            onClick={() => signOut()}
          ></Button>
        </>
      ) : (
        <>
          <Button
            type="button"
            color="black"
            layout="icon"
            size="sm"
            label="login"
            onClick={() => {
              signIn();
            }}
          ></Button>
          <Button
            type="button"
            color="black"
            layout="icon"
            size="sm"
            label="signup"
            onClick={() => router.push("/signup")}
          ></Button>
        </>
      )}
    </S.HeaderMenu>
  );
};
