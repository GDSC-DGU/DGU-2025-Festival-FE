import {
  Container,
  HeaderContainer,
  SubTitle,
  MainTitle,
  SelectorContainer,
  ContentContainer,
  BodyContainer,
  Banner,
} from "./TimetablePage.styles";
import { useState, useMemo } from "react";
import DaySelectorList from "./components/DaySelectorList/DaySelectorList";
import { dates } from "./data/dates";
import TimetableSection from "./components/TimetableSection/TimetableSection";
import Lineup from "./components/Lineup/Lineup";

const TimetablePage = () => {
  const [selectedDate, setSelectedDate] = useState<string>(dates[0].value);

  const dayIndex = useMemo(() => {
    const index = dates.findIndex((d) => d.value === selectedDate);
    return index >= 0 ? index + 1 : null;
  }, [selectedDate]);

  return (
    <Container>
      <HeaderContainer>
        <SubTitle>동국대학교 대동제</SubTitle>
        <MainTitle>Time Table</MainTitle>
        <SelectorContainer>
          <DaySelectorList
            dates={dates}
            selectedDate={selectedDate}
            onSelect={setSelectedDate}
          />
        </SelectorContainer>
      </HeaderContainer>
      <BodyContainer>
        <ContentContainer>
          <Banner>Line Up</Banner>
          <Lineup />
          {dayIndex && <Banner>DAY {dayIndex} Time Table</Banner>}
          <TimetableSection selectedDate={selectedDate} />
        </ContentContainer>
      </BodyContainer>
    </Container>
  );
};

export default TimetablePage;
