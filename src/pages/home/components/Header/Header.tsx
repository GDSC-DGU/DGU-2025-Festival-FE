import { Container } from "./Header.styles";
import Logo from "/assets/landing/logo.svg";
import GdgLogo from "/assets/landing/gdgLogo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <object data={Logo} height={20} width={119} />
      <div style={{ position: "relative", width: 32, height: 16 }}>
        <object
          data={GdgLogo}
          type="image/svg+xml"
          width="32"
          height="16"
          style={{ display: "block" }}
        />
        <div
          onClick={() => navigate("/about")}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            cursor: "pointer",
            zIndex: 1,
          }}
        />
      </div>
    </Container>
  );
};

export default Header;
