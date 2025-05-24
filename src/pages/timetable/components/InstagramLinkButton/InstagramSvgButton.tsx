import InstagramIcon from "@/assets/icons/instagram.svg";
import { InstagramIconWrapper } from "./InstagramSvgButton.styles";
interface Props {
  instagramId: string;
}

const InstagramSvgButton = ({ instagramId }: Props) => {
  const url = `https://www.instagram.com/${instagramId}`;

  return (
    <InstagramIconWrapper>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={InstagramIcon} alt="Instagram" width={20} height={20} />
      </a>
    </InstagramIconWrapper>
  );
};

export default InstagramSvgButton;
