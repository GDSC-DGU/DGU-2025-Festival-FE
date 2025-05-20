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

interface BoothItem {
  ranking: number;
  title: string;
  description: string;
}

interface BoothRankingItemProps {
  booths: BoothItem[];
}

const BoothRanking = ({ booths }: BoothRankingItemProps) => {
  return (
    <Container>
      {booths.slice(0, 3).map((booth) => (
        <BoothCard key={booth.ranking} $rank={booth.ranking}>
          <LeftSide>
            <NumberCard>
              <Number>{booth.ranking}</Number>
            </NumberCard>
            <BoothContent>
              <BoothName>{booth.title}</BoothName>
              <BoothDescription>{booth.description}</BoothDescription>
            </BoothContent>
          </LeftSide>

          <RightArrow src={ArrowIcon} alt="자세히 보기" />
        </BoothCard>
      ))}
    </Container>
  );
};

export default BoothRanking;
