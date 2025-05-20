import { Container, Side, TitleContainer, Title } from "./TopBar.styles";
import ArrowIcon from "@/assets/icons/arrow.svg";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  showBackButton?: boolean;
  title: string;
}

const TopBar = ({ showBackButton = false, title }: TopBarProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Side>
        {showBackButton && (
          <img src={ArrowIcon} width={24} height={24} onClick={handleBack} />
        )}
      </Side>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Side />
    </Container>
  );
};

export default TopBar;
