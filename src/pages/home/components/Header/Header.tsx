import { Container } from "./Header.styles";
import Logo from "@/assets/icons/logo.svg";

const Header = () => {
  return (
    <Container>
      <img src={Logo} alt="logo" height={20} />
    </Container>
  );
};

export default Header;
