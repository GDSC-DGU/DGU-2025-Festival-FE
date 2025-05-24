import { InstaButton } from "./InstagramLinkButton.styles";

interface Props {
  instagramId: string;
}

const InstagramLinkButton = ({ instagramId }: Props) => {
  const openInstagram = () => {
    if (!instagramId) return;
    window.open(`https://instagram.com/${instagramId}`, "_blank");
  };

  return (
    <InstaButton onClick={openInstagram}>@{instagramId} 바로가기</InstaButton>
  );
};

export default InstagramLinkButton;
