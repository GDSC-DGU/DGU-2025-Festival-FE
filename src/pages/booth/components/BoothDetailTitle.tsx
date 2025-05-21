import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BackIcon from '@/assets/icons/back-arrow.png'; // ← 경로에 맞게 조정

export default function BoothDetailTitle() {
  const navigate = useNavigate();

  return (
    <TitleWrapper>
      <BackButton onClick={() => navigate('/booth')}>
        <img src={BackIcon} alt="뒤로가기" />
      </BackButton>
      <Title>부스 상세</Title>
      <Spacer />
    </TitleWrapper>
  );
}

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 0;
  flex: 1;
  text-align: center;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 2px; 

  img {
    width: 27px;
    height: 27px;
  }
`;

const Spacer = styled.div`
  width: 24px; 
`;
