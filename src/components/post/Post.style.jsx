import styled from "styled-components";

export const PostWrapper = styled.article`
  width: 100%;
  height: 120px;
  border: 1px solid #000;
`;

export const PostHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    margin-left: 32px;
  }
`;
export const TagContainer = styled.ul`
  display: flex;
  gap: 8px;
`;
