import GDGLogo from "/gdgocLogo.svg";
import { GDGColorLogo, Container, Info, Highlight } from "./ClubInfo.styles";
import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";

const ClubInfo = () => {
  const firstAnimation = useOnScreenAnimation<HTMLImageElement>();

  return (
    <Container
      ref={firstAnimation.ref}
      className={`fade-up ${firstAnimation.isVisible ? "visible" : ""}`}
    >
      <GDGColorLogo src={GDGLogo} />
      <Info>
        <span style={{ fontWeight: 600 }}>
          Google Developer Groups on Campus(GDGoC)
        </span>
        <span>는 </span>
        <br />
        <Highlight color="#EA4335">개발</Highlight>
        <span>과 </span>
        <Highlight color="#4285F4">Google</Highlight>
        <span>에 관심있는 학생들이 모인 대학생 커뮤니티입니다.</span>
      </Info>
    </Container>
  );
};

export default ClubInfo;
