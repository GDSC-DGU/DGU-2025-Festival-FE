import BoothRankingCard from "./BoothRankingCart";
import type { BoothRankingItem } from "@/types/booth";
import { Container } from "./BoothRanking.styles";

interface BoothRankingItemProps {
  booths: BoothRankingItem[];
}

const BoothRanking = ({ booths }: BoothRankingItemProps) => {
  return (
    <Container>
      {booths.slice(0, 3).map((booth) => (
        <BoothRankingCard booth={booth} />
      ))}
    </Container>
  );
};

export default BoothRanking;
