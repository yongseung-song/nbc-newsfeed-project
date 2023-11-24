import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 2;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #000;
  background-color: #fff;
`;

export const BtnContainer = styled.div``;

export const DropDownBtn = styled.img`
  /* background-image: url(${(props) => props.$userAvatarUrl});
  background-size: 46px;
  background-repeat: no-repeat;
  background-position: center; */
  font-size: 0;
  width: 46px;
  height: 46px;
  cursor: pointer;
`;
