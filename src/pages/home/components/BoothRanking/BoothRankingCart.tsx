import {
  BoothCard,
  LeftSide,
  NumberCard,
  Number,
  BoothContent,
  BoothName,
  BoothDescription,
  RightArrow,
} from "./BoothRanking.styles";
import ArrowIcon from "@/assets/icons/arrow.svg";
import { useNavigate } from "react-router-dom";
import { useOnScreenAnimation } from "@/hooks/useOnScreenAnimation";
import type { BoothRankingItem } from "@/types/booth";

interface BoothRankingCardProps {
  booth: BoothRankingItem;
}

const BoothRankingCard = ({ booth }: BoothRankingCardProps) => {
  const { ref, isVisible } = useOnScreenAnimation<HTMLDivElement>();
  const navigate = useNavigate();

  return (
    <BoothCard
      ref={ref}
      className={`fade-up ${isVisible ? "visible" : ""}`}
      $rank={booth.ranking}
      onClick={() => navigate(`/booth/${booth.id}`)}
    >
      <LeftSide>
        <NumberCard>
          <Number>{booth.ranking}</Number>
        </NumberCard>
        <BoothContent>
          <BoothName>{booth.name}</BoothName>
          <BoothDescription>{booth.intro}</BoothDescription>
        </BoothContent>
      </LeftSide>
      <RightArrow src={ArrowIcon} alt="자세히 보기" />
    </BoothCard>
  );
};

export default BoothRankingCard;
