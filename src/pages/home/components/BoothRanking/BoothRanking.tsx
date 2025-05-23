import {
  Container,
  BoothContent,
  BoothName,
  BoothDescription,
  NumberCard,
  Number,
  BoothCard,
  RightArrow,
  LeftSide,
} from "./BoothRanking.styles";
import ArrowIcon from "@/assets/icons/arrow.svg";
import { useNavigate } from "react-router-dom";
import type { BoothRankingItem } from "@/types/booth";

interface BoothRankingItemProps {
  booths: BoothRankingItem[];
}

const BoothRanking = ({ booths }: BoothRankingItemProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      {booths.slice(0, 3).map((booth) => (
        <BoothCard
          key={booth.ranking}
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
      ))}
    </Container>
  );
};

export default BoothRanking;
