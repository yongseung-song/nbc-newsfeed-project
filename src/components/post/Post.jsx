import dayjs from "dayjs";
import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/GlobalColors";
import Tag from "../tag/Tag";
import PostModal from "./PostModal";

function Post({
  id,
  creator,
  creatorUid,
  title,
  content,
  createDate,
  tag,
  editDate,
}) {
  // const { showPostModal, setShowPostModal } = useContext(ModalContext);
  // TODO 튜터님께 문의
  const [showPostModal, setShowPostModal] = useState(false);
  const postClickHandler = () => {
    console.log(id, content);
    setShowPostModal(true);
  };

  return (
    <>
      <StPostWrapper id={id} onClick={postClickHandler}>
        <StIndexWrap>
          <StPostHeaderWrapper>
            <StProfileCreator>
              <img src="" alt="img" />
              <h3>작성자: {creator}</h3>
              <StDayContent>
                {editDate
                  ? `수정된 시간: ${dayjs(editDate).format(
                      "YYYY년 M월 D일 hh:mm"
                    )}`
                  : dayjs(createDate).format("YYYY년 M월 D일 hh:mm")}
              </StDayContent>
            </StProfileCreator>
            <StBtnContainer>
              <StFnBtn>👍🏻</StFnBtn>
              <StFnBtn>⭐️</StFnBtn>
              {creatorUid === getAuth()?.currentUser?.uid ? (
                <StReviseBtn>수정/삭제</StReviseBtn>
              ) : (
                ""
              )}
            </StBtnContainer>
          </StPostHeaderWrapper>
          <StPostTitle>{title}</StPostTitle>
          <StContent>{content}</StContent>

          <StTagContainer>
            {tag &&
              Object.values(tag).map((item, idx) => {
                return <Tag key={idx} item={item} />;
              })}
          </StTagContainer>
        </StIndexWrap>
      </StPostWrapper>
      {showPostModal && (
        <PostModal
          showPostModal={showPostModal}
          setShowPostModal={setShowPostModal}
          id={id}
          creator={creator}
          title={title}
          content={content}
          createDate={createDate}
          tag={[]}
        />
      )}
    </>
  );
}

export default Post;

const StPostWrapper = styled.article`
  width: 630px;
  background-color: #fff;
  /* height: 140px; */
  box-shadow: 0px 4px 30px 5px rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.04);
  }
  z-index: 1;
`;

const StPostHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 20px; */
  /* div {
		margin-left: 32px;
	} */
  margin: 10px 25px 10px 25px;
`;
const StTagContainer = styled.ul`
  display: flex;
  gap: 8px;
  margin: 0 25px 10px 25px;
`;

const StDayContent = styled.p`
  color: ${colors.indexFontColor};
  font-size: 12px;
  margin-left: 20px;
`;

const StBtnContainer = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: flex-start;
`;

const StFnBtn = styled.button`
  border: none;
  border-radius: 999px;
  background-color: #fff;
  text-align: center;
  cursor: pointer;
  padding: 1px 8px;
  font-size: 10px;
`;

const StIndexWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.inputBoxColor};
  border-radius: 10px;
  padding: 10px;
`;

const StReviseBtn = styled.button`
  border: none;
  border-radius: 999px;
  background-color: #fff;
  text-align: center;
  cursor: pointer;
  padding: 2px 10px;
  color: ${colors.smallTitleColor};
  font-size: 12px;
`;

const StContent = styled.p`
  color: ${colors.postColor};
  margin: 0 25px 10px 25px;
  font-size: 16px;
  line-height: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const StPostTitle = styled.h4`
  color: ${colors.postColor};
  font-weight: 700;
  font-size: 26px;
  /* margin-bottom: 10px; */
  margin: 10px 25px 10px 25px;
`;

const StProfileCreator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    color: ${colors.postColor};
    margin-left: 20px;
    font-weight: 500;
  }
`;
