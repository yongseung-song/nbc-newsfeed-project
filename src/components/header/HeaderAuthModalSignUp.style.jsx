import styled from "styled-components";
import { colors } from "../../styles/GlobalColors";

export const SignUpBox = styled.div`
  margin-top: 50px;
  width: 100%;
  margin-top: 20px;
`;

export const SectionTitle = styled.h1`
  color: ${colors.mainColor};
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 24px;
  text-align: center;
`;

export const SignUpSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 10px;
  color: ${colors.smallTitleColor};
  font-family: Pretendard;
`;

export const InputBox = styled.input`
  width: 500px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 16px;
  border: none;
  background: ${colors.inputBoxColor};
  margin-bottom: 12px;
  padding: 17px 0 17px 25px;
  font-size: 18px;
  &::placeholder {
    /* padding: 17px 0 17px 25px; */
    font-size: 16px;
    color: ${colors.indexFontColor};
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignUpBtn = styled.button`
  width: 150px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 16px;
  border: none;
  background-color: ${colors.mainColor};
  color: #fff;
  text-align: center;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 20px;
`;
