import styled from 'styled-components';

export const MapWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 8px;
`;

export const MapBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

interface FilterButtonProps {
  $active: boolean;
}

export const FilterButton = styled.button<FilterButtonProps>`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${({ $active }) => ($active ? 'var(--indigo-500)' : 'var(--gray-300)')};
  color: white;
  font-size: 12px;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  padding: 6px 12px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 10;

  display: flex;
  align-items: center;
  transition: background 0.2s ease;
`;