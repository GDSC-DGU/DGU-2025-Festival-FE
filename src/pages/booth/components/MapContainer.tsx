import { useEffect, useRef } from "react";
import { booths } from "../data/booths";
import { useBoothStore } from "../stores/useBoothStore";
import Heart from "@/assets/icons/heart-null.png";
import { createRoundedMarkerIcon } from "../utils/createRoundedMarkerIcon";
import { MapWrapper, MapBox, FilterButton } from "./MapContainer.styles";

interface MapContainerProps {
  date: string;
  boothType: "day" | "night";
  boothId?: string;
  centerLat?: number;
  centerLng?: number;
}

export default function MapContainer({
  date,
  boothType,
  boothId,
  centerLat,
  centerLng,
}: MapContainerProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const isLiked = useBoothStore((state) => state.isLiked);
  const showOnlyLiked = useBoothStore((state) => state.showOnlyLiked);
  const toggleShowOnlyLiked = useBoothStore((state) => state.toggleShowOnlyLiked);

  const getStaticMapUrl = () => {
    const lat = centerLat ?? 37.558141;
    const lng = centerLng ?? 127.000258;
    const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    return `https://d3k0iddfz17ivl.cloudfront.net/maps/api/staticmap?center=${lat},${lng}&zoom=17&size=600x300&markers=color:red|${lat},${lng}&key=${key}`;
  };

  useEffect(() => {
    if (boothId) return;

    if (!window.google || !mapRef.current) return;

    const boothCenter = { lat: 37.558141, lng: 127.000258 };

    const map = new window.google.maps.Map(mapRef.current, {
      center: boothCenter,
      zoom: 18,
      disableDefaultUI: true,
    });

    const filtered = booths.filter((booth) => {
      const isSameDate = booth.date === date;
      const isSameType = booth.type === boothType;
      if (!isSameDate || !isSameType) return false;
      if (showOnlyLiked) return isLiked(booth.id);
      return true;
    });

    (async () => {
      for (const booth of filtered) {
        try {
          const iconUrl = await createRoundedMarkerIcon(booth.images[0]);

          const marker = new window.google.maps.Marker({
            position: booth.position,
            map,
            title: booth.name,
            icon: {
              url: iconUrl,
              scaledSize: new window.google.maps.Size(56, 56),
              labelOrigin: new window.google.maps.Point(28, 68),
            },
            label: {
              text: booth.name,
              color: "#333c55",
              fontSize: "10px",
              fontWeight: "bold",
            },
          });

          marker.addListener("click", () => {
            window.location.href = `/booth/${booth.id}`;
          });
        } catch {
          console.error(`마커 렌더링 실패: ${booth.name}`);
        }
      }
    })();
  }, [boothId, date, boothType, showOnlyLiked, isLiked]);

  if (boothId) {
    return (
      <MapWrapper>
        <img
          src={getStaticMapUrl()}
          alt="Static map"
          width="100%"
          height="300"
          style={{ objectFit: "cover", borderRadius: "12px" }}
        />
      </MapWrapper>
    );
  }

  return (
    <MapWrapper>
      <MapBox ref={mapRef} />
      <FilterButton onClick={toggleShowOnlyLiked} $active={showOnlyLiked}>
        <img
          src={Heart}
          alt="찜한 목록"
          width={14}
          height={14}
          style={{ marginRight: "6px" }}
        />
        찜한 목록
      </FilterButton>
    </MapWrapper>
  );
}
