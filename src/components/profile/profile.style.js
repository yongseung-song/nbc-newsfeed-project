import styled from "styled-components";

export const ProfileWrapper = styled.article`
  max-width: 800px;
  width: 60%;
  margin: 0 auto;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 36px;
  background-color: #eee;
  margin: 24px 0;
`;

export const SummarizedPost = styled.li`
  padding: 4px;
  border: 1px solid #000;
  margin-bottom: 12px;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
