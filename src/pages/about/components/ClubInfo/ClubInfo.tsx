import GDGLogo from "@/assets/images/GDGonCampus-color-logo.svg";
import GDGText from "@/assets/images/GDGonCampus-text-logo.svg";
import { GDGColorLogo, GDGTextLogo } from "./ClubInfo.styles";
const ClubInfo = () => {
  return (
    <>
      <GDGColorLogo src={GDGLogo} />
      <GDGTextLogo src={GDGText} />
    </>
  );
};

export default ClubInfo;
