import {
  Container,
  Section,
  ContentContainer,
  Mention,
  Link,
  End,
} from "./AboutPage.styles";
import ClubInfo from "./components/ClubInfo/ClubInfo";
import TeamPage from "./components/TeamSection/TeamSection";
import DoubleCircle from "./components/DoubleCircle/DoubleCircle";
import TopBar from "@/components/topbar/TopBar";
import Github from "@/assets/icons/github.svg";
import Instagram from "@/assets/icons/instagram.svg";
import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";

const AboutPage = () => {
  const animation = useOnScreenAnimation<HTMLImageElement>();

  const openInstagram = () => {
    window.open(`https://instagram.com/gdg.on.campus_dgu`, "_blank");
  };

  const openGithub = () => {
    window.open(`https://github.com/GDSC-DGU`, "_blank");
  };

  return (
    <Container>
      <TopBar title="개발자 소개" showBackButton />
      <ContentContainer>
        <Section>
          <TeamPage />
        </Section>
        <Section>
          <DoubleCircle title="GDGoC?" />
          <ClubInfo />
        </Section>
        <End
          ref={animation.ref}
          className={`fade-up ${animation.isVisible ? "visible" : ""}`}
        >
          <Mention>GDGoC DGU의 활동이 궁금하다면 ?</Mention>
          <Link>
            <img
              src={Instagram}
              onClick={openInstagram}
              alt="instagram 바로가기"
              height={24}
            />
            <img
              src={Github}
              onClick={openGithub}
              alt="github 바로가기"
              height={24}
            />
          </Link>
        </End>
      </ContentContainer>
    </Container>
  );
};

export default AboutPage;
