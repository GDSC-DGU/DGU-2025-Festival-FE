import { useEffect, useRef } from 'react';
import { booths } from '../data/booths';
import { useBoothStore } from '../stores/useBoothStore';
import markerLiked from '@/assets/icons/marker-liked.svg';
import markerDefault from '@/assets/icons/marker-default.svg';
import Heart from '@/assets/icons/heart-null.png'

import {
  MapWrapper,
  MapBox,
  FilterButton,
} from './MapContainer.styles';

interface MapContainerProps {
  date: string;
  boothType: 'day' | 'night';
  boothId?: string; 
}


export default function MapContainer({ date, boothType, boothId }: MapContainerProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const isLiked = useBoothStore((state) => state.isLiked);
  const showOnlyLiked = useBoothStore((state) => state.showOnlyLiked);
  const toggleShowOnlyLiked = useBoothStore((state) => state.toggleShowOnlyLiked);

  useEffect(() => {
    if (!window.google || !mapRef.current) return;
  
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 37.5585, lng: 126.9982 },
      zoom: 17,
      disableDefaultUI: true,
    });
  
    const filtered = booths.filter((booth) => {
      const isSameDate = booth.date === date;
      const isSameType = booth.type === boothType;
      if (!isSameDate || !isSameType) return false;
      if (boothId) return booth.id === boothId; 
      if (showOnlyLiked) return isLiked(booth.id);
      return true;
    });
  
    filtered.forEach((booth) => {
      new window.google.maps.Marker({
        position: booth.position,
        map,
        title: booth.name,
        icon: {
          url: isLiked(booth.id) ? markerLiked : markerDefault,
          scaledSize: new window.google.maps.Size(36, 36),
        },
      });
    });
  }, [date, boothType, showOnlyLiked, isLiked, boothId]);
  

  return (
    <MapWrapper>
      <MapBox ref={mapRef} />
      {!boothId && ( 
        <FilterButton onClick={toggleShowOnlyLiked} $active={showOnlyLiked}>
        <img
          src={Heart}
          alt="찜한 목록"
          width={14}
          height={14}
          style={{ marginRight: '6px' }}
        />
        찜한 목록
      </FilterButton>
      
      )}
    </MapWrapper>
  );   
}
