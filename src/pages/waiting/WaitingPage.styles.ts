import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px;
  padding-top: 54px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #333c55;
  text-align: center;
`;

export const QuestionWrapper = styled.div`
  position: absolute;
  right: 25px;
  top: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

export const QuestionIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  align-self: center;
`;

export const WaitingHint = styled.div`
  font-size: 10px;
  color: #7b84d4;
  font-weight: 500;
  text-align: right;
`;

export const MyWaitingBox = styled.div`
margin-top: 40px;
  width: 100%;
  max-width: 300px;
  display: column;            
  justify-content: center;   
`;


export const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #333c55;
  margin-bottom: 16px;
  margin-left: 6px;
`;

export const WaitingCard = styled.div`
  width: 100%;
  max-width: 320px; 
  padding: 16px;
  border: 1px solid #f2dede; 
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  box-shadow: 0 0 4px rgba(202, 56, 56, 0.25);
`;

export const WaitingCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1; 
`;

export const BoothName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333c55;
  margin-left: 6px;
`;

export const BoothInfo = styled.div`
  font-size: 12px;
  color: #646e8b;
`;

export const Badge = styled.div`
  padding: 4px 12px;
  border-radius: 100px;
  background-color: var(--gray-200);
  font-size: 12px;
  font-weight: 400;
  display: inline-block;
  width: fit-content;
`;

export const CancelButton = styled.button`
  padding: 6px 12px;
  background-color: #a7a7a7;
  border-radius: 100px;
  border: none;
  font-size: 12px;
  font-weight: 500;
  color: white;
  width: fit-content;
  align-self: flex-end;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333c55;
  margin-left: 6px;
  margin-top: 40px;
`;

export const BoothList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BoothCard = styled.div`
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 0 4px rgba(67, 56, 202, 0.25);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; 
  gap: 10px;        
`;


interface BoothActionButtonProps {
  $isCancel?: boolean;
}
export const BoothActionButton = styled.button<BoothActionButtonProps>`
  padding: 6px 16px;
  min-width: 90px;
  height: 32px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  background-color: ${({ $isCancel }) => ($isCancel ? "#A7A7A7" : "#575bdf")};
  color: white;
  white-space: nowrap;
  text-align: center;
  align-self: flex-end; 
  margin-left: auto;  
`;


export const BoothIntro = styled.div`
  font-size: 12px;
  color: #646e8b;
  margin-left: 5px;
  margin-bottom: 10px;
  margin-top: 5px;
  margin-right: 5px;
`;

export const ImmediateEntryText = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #575bdf;
  align-self: flex-end;
  margin-left: auto;
`;


export const WaitingSummary = styled.div`
  padding: 4px 12px;
  border-radius: 100px;
  background-color: var(--gray-200);
  font-size: 12px;
  font-weight: 400;
  display: inline-block;
  width: fit-content;
`;

export const PreparingText = styled.div`
  color: #aaa;
  font-weight: 500;
  font-size: 14px;
  text-align: right;
  align-self: flex-end;
  margin-left: auto;
`;

export const EndedText = styled.div`
  color: #ccc;
  font-weight: 500;
  font-size: 14px;
  text-align: right;
  align-self: flex-end;
  margin-left: auto;
`;

