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

interface BoothItem {
  ranking: number;
  booth_id: string;
  name: string;
  intro: string;
}

interface BoothRankingItemProps {
  booths: BoothItem[];
}

const BoothRanking = ({ booths }: BoothRankingItemProps) => {
  const navigate = useNavigate();

  return (
    <Container>
      {booths.slice(0, 3).map((booth) => (
        <BoothCard
          key={booth.ranking}
          $rank={booth.ranking}
          onClick={() => navigate(`/booth/${booth.booth_id}`)}
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
