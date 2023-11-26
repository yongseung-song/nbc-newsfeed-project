import dayjs from "dayjs";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Tag from "../components/tag/Tag";
import { authService, db } from "../firebase";
import { colors } from "../styles/GlobalColors";

function Detail() {
  const [currentPost, setCurrentPost] = useState({});
  const [postList, setPostList] = useState([]);

  const postRef = collection(db, "posts");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getDocPost = async () => {
      const updatePost = doc(db, "posts", params.id);
      const snapshotPost = await getDoc(updatePost);
      const postData = snapshotPost.data();

      setCurrentPost({ ...postData });
      return postData;
    };

    getDocPost();
  }, [params.id]);

  useEffect(() => {
    const getDocsPost = async () => {
      const currentPostDoc = doc(db, "posts", params.id);
      const snapshotPost = await getDoc(currentPostDoc);
      const postData = snapshotPost.data();
      let arr = [];
      const filterQuery = query(
        postRef,
        where("creatorUid", "!=", postData.creatorUid),
        where("tag", "array-contains-any", postData.tag),
        limit(5)
      );

      const postFilter = await getDocs(filterQuery);

      postFilter.forEach((post) => {
        arr.push(post.data());
      });

      setPostList(arr);
    };

    getDocsPost();
  }, [params.id]);

  const clickUpdateBtnHandler = () => {
    if (currentPost.creatorUid === authService?.currentUser?.uid) {
      navigate(`update`);
    } else {
      alert("수정 권한이 없습니다.");
    }
  };

  const clickRemoveBtnHandler = async () => {
    if (currentPost.creatorUid === authService?.currentUser?.uid) {
      const delCheck = window.confirm("정말로 삭제하시겠습니까?");
      if (delCheck) {
        await deleteDoc(doc(db, "posts", params.id));

        alert("삭제되었습니다!");
      }
    } else {
      alert("삭제 권한이 없습니다.");
    }
  };

  const clickGoToListBtnHandler = () => {
    navigate(`/`);
  };

  return (
    <StDetailWrapperBG>
      <StDetailWrapper>
        <StIndexWrapper>
          <StSectionTitle>게시물 상세보기</StSectionTitle>
          <StHashTagContent>
            {currentPost.tag &&
              Object.values(currentPost.tag).map((item, idx) => {
                return <Tag key={idx} item={item} />;
              })}
          </StHashTagContent>
          <StTitleCreatorTimeWrapper>
            <p>제목: {currentPost.title}</p>
            <p>작성자: {currentPost.creator}</p>
            <p>
              {currentPost.editDate
                ? `수정된 시간: ${dayjs(currentPost.editDate).format(
                    "YYYY년 MM월 DD일 hh:mm"
                  )}`
                : `작성된 시간: ${dayjs(currentPost.createDate).format(
                    "YYYY년 MM월 DD일 hh:mm"
                  )}`}
            </p>
          </StTitleCreatorTimeWrapper>
          <StIndexContent>{currentPost.content}</StIndexContent>
          <StBtnWrapper>
            <button onClick={clickUpdateBtnHandler}>수정</button>
            <button onClick={clickRemoveBtnHandler}>삭제</button>
            <button onClick={clickGoToListBtnHandler}>목록으로</button>
          </StBtnWrapper>
          <p>연관글보기</p>
          {postList?.map((item) => {
            return (
              <div
                key={item.id}
                style={{ backgroundColor: "red", cursor: "pointer" }}
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                }}
              >
                <p>
                  {item.editData ? `수정된 시간: ${item.editData}` : item.date}
                </p>
                <p>{item.title}</p>
                <p>{item.content}</p>
              </div>
            );
          })}
        </StIndexWrapper>
      </StDetailWrapper>
    </StDetailWrapperBG>
  );
}
export default Detail;

const StDetailWrapperBG = styled.div`
  padding: 36px 0 180px;
  background: linear-gradient(
      127deg,
      rgba(32, 117, 255, 0.8),
      rgba(0, 255, 0, 0) 70.71%
    ),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
`;

const StDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  margin: auto;
  box-shadow: 0px 4px 30px 5px rgba(0, 0, 0, 0.05);
  padding: 20px;
  border-radius: 20px;
  background-color: white;
`;
const StSectionTitle = styled.h3`
  color: ${colors.mainColor};
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
`;

const StHashTagContent = styled.p`
  display: flex;
  gap: 10px;
  li {
    background-color: ${colors.inputBoxColor};
  }
`;

const StIndexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: ${colors.inputBoxColor}; */
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  gap: 10px;
`;

const StTitleCreatorTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  color: ${colors.postColor};
`;

const StIndexContent = styled.p`
  font-size: 18px;
  line-height: 27px;
  word-wrap: break-word;
  white-space: pre-line;
  background-color: ${colors.inputBoxColor};
  padding: 20px;
  border-radius: 20px;
  color: ${colors.postColor};
`;

const StBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  button {
    background-color: ${colors.mainColor};
    border: none;
    padding: 10px 20px;
    color: #fff;
    font-weight: 700;
    border-radius: 99px;
    font-size: 16px;
    cursor: pointer;
  }
`;
