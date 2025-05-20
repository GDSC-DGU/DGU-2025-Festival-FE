import { useState } from 'react';
import BoothTypeToggle from './components/BoothTypeToggle';
import DateSelector from './components/DateSelector';
import MapContainer from './components/MapContainer';
import BoothCard from './components/BoothCard';
import BoothTitle from './components/BoothTitle';
import { Wrapper } from '@googlemaps/react-wrapper';
import { PageWrapper } from './BoothPage.styles';
import { booths } from './data/booths';

export default function BoothPage() {
  const [selectedDate, setSelectedDate] = useState<string>('2025-05-27');
  const [boothType, setBoothType] = useState<'day' | 'night'>('day');

  const filteredBooths = booths.filter(
    (booth) => booth.date === selectedDate && booth.type === boothType
  );

  return (
    <PageWrapper>
      <BoothTitle />
      <DateSelector selected={selectedDate} onChange={setSelectedDate} />
      <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <MapContainer boothType={boothType} date={selectedDate} />
      </Wrapper>
      <BoothTypeToggle value={boothType} onChange={setBoothType} />
      {filteredBooths.map((booth) => (
        <BoothCard
          key={booth.id}
          boothId={booth.id}
          name={booth.name}
          intro={booth.intro}
        />
      ))}
    </PageWrapper>
  );
}
