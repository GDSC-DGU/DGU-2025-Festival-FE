import styled from 'styled-components';

export const DateSelectorWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const DateButton = styled.button<{ selected: boolean }>`
  padding: 8px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 600;
  background: ${({ selected }) => (selected ? '#4F46E5' : '#FFFFFF')};
  color: ${({ selected }) => (selected ? 'white' : '#949DB8')};
  border: ${({ selected }) =>
    selected ? 'none' : '1px solid #CBD1E1'};
  cursor: pointer;
  box-shadow: ${({ selected }) =>
    selected ? '0px 0px 8px rgba(255, 255, 255, 0.25)' : 'none'};
`;
