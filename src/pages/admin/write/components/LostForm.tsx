import {
  ContentInput,
  ContentLength,
  InputGroup,
  FieldInput,
  FieldWrapper,
  Label,
  Select,
  SelectWrapper,
  ArrowIcon,
} from "../index.styles";
import { useState } from "react";
import { LostTag } from "@/types/enums";

const LostForm = () => {
  const [content, setContent] = useState("");
  const [tag, setTag] = useState<LostTag>();
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [location, setLocation] = useState("");

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 300) {
      setContent(e.target.value);
    }
  };

  return (
    <>
      <InputGroup>
        <FieldWrapper>
          <Label>태그</Label>
          <SelectWrapper>
            <Select
              value={tag ?? ""}
              onChange={(e) => setTag(e.target.value as LostTag)}
            >
              <option value="" disabled>
                태그를 선택하세요
              </option>
              {Object.entries(LostTag).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </Select>
            <ArrowIcon>▼</ArrowIcon>
          </SelectWrapper>
        </FieldWrapper>

        <FieldWrapper>
          <Label>색상</Label>
          <FieldInput
            placeholder="예) 빨간색"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>카테고리</Label>
          <FieldInput
            placeholder="예) 우산, 지갑, 핸드폰"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>브랜드</Label>
          <FieldInput
            placeholder="예) Nike, Samsung"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </FieldWrapper>

        <FieldWrapper>
          <Label>분실 장소</Label>
          <FieldInput
            placeholder="예) 중앙도서관, 학생회관"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FieldWrapper>
      </InputGroup>

      <FieldWrapper>
        <Label>특징 / 상세 설명</Label>
        <ContentInput
          placeholder="분실물에 대한 설명을 작성하세요."
          value={content}
          onChange={handleContentChange}
        />
        <ContentLength>{`${content.length}/300`}</ContentLength>
      </FieldWrapper>
    </>
  );
};

export default LostForm;
