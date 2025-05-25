import { Container } from "./Header.styles";
import Logo from "/assets/landing/logo.svg";
import GdgLogo from "/assets/landing/gdgLogo.svg";
const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" height={20} width={119} />
      <img src={GdgLogo} alt="GDG on Campus" height={16} width={32} />
    </Container>
  );
};

export default Header;
