import { Container } from "./Header.styles";
import Logo from "/assets/landing/logo.svg";
import GdgLogo from "/assets/landing/gdgLogo.svg";
const Header = () => {
  return (
    <Container>
      <object data={Logo} height={20} width={119} />
      <object data={GdgLogo} height={16} width={32} />
    </Container>
  );
};

export default Header;
