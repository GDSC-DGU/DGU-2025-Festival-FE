import {
  Container,
  HeaderContainer,
  SubTitle,
  MainTitle,
  SelectorContainer,
  ContentContainer,
  BodyContainer,
  Banner,
  Section,
} from "./TimetablePage.styles";
import { useState, useMemo, useEffect } from "react";
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          <Section>
            <Banner>Line Up</Banner>
            <Lineup selectedDate={selectedDate} />
          </Section>
          <Section>
            <Banner>DAY {dayIndex} Time Table</Banner>
            <TimetableSection selectedDate={selectedDate} />
          </Section>
        </ContentContainer>
      </BodyContainer>
    </Container>
  );
};

export default TimetablePage;
