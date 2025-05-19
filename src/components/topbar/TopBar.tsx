import { Container, Side, TitleContainer, Title } from "./TopBar.styles";
import ArrowIcon from "@/assets/icons/arrow.svg";

interface TopBarProps {
  showBackButton?: boolean;
  title: String;
}

const TopBar = ({ showBackButton = false, title }: TopBarProps) => {
  return (
    <Container>
      <Side>
        {showBackButton && <img src={ArrowIcon} width={24} height={24} />}
      </Side>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Side />
    </Container>
  );
};

export default TopBar;
