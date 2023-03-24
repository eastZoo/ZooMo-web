import Logo from "@/components/molecules/Logo";
import { HeaderMenu } from "@/components/molecules/HeaderMenu";
import * as S from "./header.style";

const Header = () => {
  return (
    <S.Header>
      <S.HeaderRow>
        <Logo main={true} />
        <HeaderMenu />
      </S.HeaderRow>
    </S.Header>
  );
};

export default Header;
