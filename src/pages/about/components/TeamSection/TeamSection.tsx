import {
  backendMembers,
  frontendMembers,
  pmMembers,
  designMembers,
} from "../../data/member";
import type { Member } from "../../data/member";
import {
  Link,
  Image,
  Name,
  Profile,
  Section,
  Container,
  Title,
  Content,
  Header,
} from "./TeamSection.styles";
import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";
import Logo from "@/assets/icons/gdgLogo.svg";

interface RoleSectionProps {
  title: string;
  members: Member[];
}

const GithubProfile = ({ name, github, image }: Member) => {
  const profileUrl = github ? `https://github.com/${github}` : null;

  return (
    <Link
      href={profileUrl ?? "#"}
      target={profileUrl ? "_blank" : "_self"}
      rel="noopener noreferrer"
      style={{
        pointerEvents: profileUrl ? "auto" : "none",
        opacity: profileUrl ? 1 : 0.5,
      }}
    >
      <Image
        src={image || "/default-profile.png"}
        alt={`${name} GitHub Avatar`}
      />
      <Name>{name}</Name>
    </Link>
  );
};

const RoleSection = ({ title, members }: RoleSectionProps) => {
  const animation = useOnScreenAnimation<HTMLDivElement>(0.2);
  return (
    <Section
      ref={animation.ref}
      className={`fade-up ${animation.isVisible ? "visible" : ""}`}
    >
      <Title>{title}</Title>
      <Profile>
        {members.map((member) => (
          <GithubProfile key={member.github} {...member} />
        ))}
      </Profile>
    </Section>
  );
};

const TeamPage = () => {
  const animation = useOnScreenAnimation<HTMLDivElement>(0.2);
  return (
    <Container>
      <Header
        ref={animation.ref}
        className={`fade-up ${animation.isVisible ? "visible" : ""}`}
      >
        <img src={Logo} alt="logo" />
        <Content>GDGoC의 축제사이트 TF팀 개발자들을 소개합니다!</Content>
      </Header>

      <RoleSection title="📋 PM" members={pmMembers} />
      <RoleSection title="🖥 Backend" members={backendMembers} />
      <RoleSection title="💻 Frontend" members={frontendMembers} />
      <RoleSection title="🎨 Design" members={designMembers} />
    </Container>
  );
};

export default TeamPage;
