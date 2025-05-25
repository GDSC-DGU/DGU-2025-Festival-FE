import TopBar from "@/components/topbar/TopBar";
import { Container } from "./AboutPage.styles";
import ClubInfo from "./components/ClubInfo/ClubInfo";

const AboutPage = () => {
  return (
    <Container>
      <TopBar title="GDG on Campus" />
      <ClubInfo />
    </Container>
  );
};

export default AboutPage;
