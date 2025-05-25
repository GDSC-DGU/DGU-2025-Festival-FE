import { Container } from "./Header.styles";
import Logo from "@/assets/icons/logo.svg";
import GdgLogo from "@/assets/icons/gdgLogo.svg";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" height={20} />
      <img src={GdgLogo} alt="GDG on Campus" height={16} />
    </Container>
  );
};

export default Header;
