import { Container } from "./Header.styles";
import Logo from "@/assets/icons/logo.svg";
import GdgLogo from "@/assets/icons/gdgLogo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about");
  };
  return (
    <Container>
      <img src={Logo} alt="logo" height={20} />
      <img
        onClick={handleAbout}
        src={GdgLogo}
        alt="GDG on Campus"
        height={16}
      />
    </Container>
  );
};

export default Header;
