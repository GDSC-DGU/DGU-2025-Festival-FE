import { useEffect, useRef } from "react";
import { useBoothStore } from "../stores/useBoothStore";
import Heart from "@/assets/icons/heart-null.png";
import { createRoundedMarkerIcon } from "../utils/createRoundedMarkerIcon";
import { MapWrapper, MapBox, FilterButton } from "./MapContainer.styles";
import { booths } from "../data/booths";

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
}: MapContainerProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const isLiked = useBoothStore((state) => state.isLiked);
  const showOnlyLiked = useBoothStore((state) => state.showOnlyLiked);
  const toggleShowOnlyLiked = useBoothStore(
    (state) => state.toggleShowOnlyLiked
  );

  useEffect(() => {
    if (!window.google || !mapRef.current) return;

    const boothCenter = boothId
      ? booths.find((booth) => booth.id === boothId)?.position
      : { lat: 37.558141, lng: 127.000258 };

    const map = new window.google.maps.Map(mapRef.current, {
      center: boothCenter || { lat: 37.558141, lng: 127.000258 },
      zoom: 18,
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
            if (booth.isLinenow && booth.linenowLink) {
              window.open(booth.linenowLink, "_blank"); // 라인나우 링크로 새창 이동
            } else {
              window.location.href = `/booth/${booth.id}`; // 기본 상세 페이지 이동
            }
          });
        } catch {
          console.error(`마커 렌더링 실패: ${booth.name}`);
        }
      }
    })();
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
            style={{ marginRight: "6px" }}
          />
          찜한 목록
        </FilterButton>
      )}
    </MapWrapper>
  );
}
