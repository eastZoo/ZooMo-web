import Image from "next/image";
import * as S from "./logo.style";
import LogoMain from "public/images/header-logo.png";

interface LogoProps {
  main?: boolean;
  mobile?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ main, mobile }) => {
  return (
    <S.Logo main={main} mobile={mobile}>
      <Image
        src={LogoMain}
        alt="메인로고"
        width={mobile ? 70 : main ? 120 : 90}
        height={mobile ? 24 : main ? 40 : 30}
      />
    </S.Logo>
  );
};

export default Logo;
