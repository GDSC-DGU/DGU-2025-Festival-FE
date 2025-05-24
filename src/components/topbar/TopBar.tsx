import { Container, Side, TitleContainer, Title } from "./TopBar.styles";
import { useNavigate } from "react-router-dom";
import DarkArrowIcon from "@/assets/icons/arrow.svg";
import WhiteArrowIcon from "@/assets/icons/arrow-white.svg";
interface TopBarProps {
  showBackButton?: boolean;
  isDark?: boolean;
  title: string;
  onBack?: () => void; 
}

const TopBar = ({
  showBackButton = false,
  isDark = false,
  title,
  onBack, 
}: TopBarProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    if (onBack) {
      onBack(); 
    } else {
      navigate(-1);
    }
  };

  return (
    <Container $isDark={isDark}>
      <Side>
        {showBackButton && (
          <img
            src={isDark ? WhiteArrowIcon : DarkArrowIcon}
            width={24}
            height={24}
            onClick={handleBack}
          />
        )}
      </Side>
      <TitleContainer>
        <Title $isDark={isDark}>{title}</Title>
      </TitleContainer>
      <Side />
    </Container>
  );
};

export default TopBar;

