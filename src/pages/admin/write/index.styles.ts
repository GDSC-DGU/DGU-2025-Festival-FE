import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 54px;
`;

export const PostContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Divider = styled.hr`
  all: unset;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray200};
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  width: 100%;
`;

export const TitleInput = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray700};
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.gray700};
  ${({ theme }) => theme.fonts.Head3}
  width: 100%;
  outline: none;
`;

export const DateText = styled.p`
  ${({ theme }) => theme.fonts.Caption}
  color: ${({ theme }) => theme.colors.gray500};
`;

export const ImageContainer = styled.div`
  background: ${({ theme }) => theme.colors.indigo50};
  width: 100%;
  aspect-ratio: 1.6;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlaceholderText = styled.p`
  color: ${({ theme }) => theme.colors.indigo400};
  ${({ theme }) => theme.fonts.Button1};
  border: none;
  border-radius: 4px;
`;

export const ScrollWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  border-radius: 8px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
  height: 100%;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

export const ContentInput = styled.textarea`
  border: none;
  width: 100%;
  outline: none;
  height: 100px;
  color: ${({ theme }) => theme.colors.gray700};
  ${({ theme }) => theme.fonts.Body2};
  resize: none;
  padding: 8px 0px;
`;

export const UploadInput = styled.input`
  display: none;
`;

export const ImagePreviewWrapper = styled.div`
  position: relative;
  flex: 0 0 100%;
  height: 100%;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 50%;
  color: white;
  width: 24px;
  height: 24px;
  font-size: 16px;
  cursor: pointer;
`;

export const AddButtonOverlay = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50px;
  color: ${({ theme }) => theme.colors.indigo600};
  height: 40px;
  ${({ theme }) => theme.fonts.Button1}
  padding: 10px 20px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentLength = styled.div`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.fonts.Caption}
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

export const FieldInput = styled.input`
  padding: 8px 0px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.Body2}
  outline: none;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

export const Label = styled.label`
  ${({ theme }) => theme.fonts.Body1B}
  color: ${({ theme }) => theme.colors.gray700};
`;
export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Select = styled.select`
  ${({ theme }) => theme.fonts.Body2}
  width: 100%;
  padding: 8px 0px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  color: ${({ theme }) => theme.colors.gray700};
  background-color: white;
  appearance: none;
  outline: none;
`;

export const ArrowIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  pointer-events: none;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray500};
`;
