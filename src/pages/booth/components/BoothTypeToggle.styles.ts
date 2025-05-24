import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  background: #e2e5f0;
  border-radius: 100px;
  padding: 4px;
  width: fit-content;
  gap: 4px;
`;

export const ToggleButton = styled.button<{ selected: boolean }>`
  padding: 8px 12px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: ${({ selected }) => (selected ? 600 : 500)};
  background: ${({ selected }) => (selected ? 'white' : 'transparent')};
  color: ${({ selected }) => (selected ? '#4338CA' : '#949DB8')};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
`;
