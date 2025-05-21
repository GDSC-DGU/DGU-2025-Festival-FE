import styled from 'styled-components';
import { useBoothAdminStore } from '../stores/useBoothAdminStore';

interface TabsProps {
  current: 'available' | 'full';
  onChange: (tab: 'available' | 'full') => void;
}

const Tabs = ({}: TabsProps) => {
  const { tab, setTab } = useBoothAdminStore();

  return (
    <TabWrapper>
      <TabButton
        selected={tab === 'available'}
        onClick={() => setTab('available')}
      >
        자리 있음
      </TabButton>
      <TabButton
        selected={tab === 'full'}
        onClick={() => setTab('full')}
      >
        만석
      </TabButton>
    </TabWrapper>
  );
};

export default Tabs;

const TabWrapper = styled.div`
  display: inline-flex;
  background-color: #f1f3f9;
  border-radius: 100px;
  padding: 4px;
  gap: 4px;
  width: 142px;
`;

const TabButton = styled.button<{ selected: boolean }>`
  padding: 8px 12px;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 600;
  color: ${({ selected }) => (selected ? '#4F46E5' : '#949DB8')};
  background-color: ${({ selected }) => (selected ? 'white' : 'transparent')};
  border: none;
`;
