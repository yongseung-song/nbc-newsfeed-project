import dayjs from "dayjs";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { db } from "../../firebase";
import { colors } from "../../styles/GlobalColors";

function PostsSummary({ displayName }) {
  const [myPosts, setMyPosts] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(
      collection(db, "posts"),
      where("creatorUid", "==", getAuth().currentUser.uid)
    );
    getDocs(q)
      .then((res) =>
        res.forEach((post) =>
          setMyPosts((prevList) => ({
            ...prevList,
            [post.id]: { ...post.data() },
          }))
        )
      )
      .catch((err) => console.log(err));
  }, [db]);
  // [post.id]: { ...post.data(), id: post.id }
  const iterableData = Object.values({ ...myPosts });
  console.log(iterableData);
  // const myPosts = iterableData.filter((item) => item.creatorUid === uid);

  const clickGoToUpdate = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <StPostsSummaryContainer>
      <StWriteInforContent>
        {displayName}님이 작성하신 글이 {iterableData.length}개 있습니다.
      </StWriteInforContent>
      <StPostContainer>
        {iterableData
          .sort((a, b) => dayjs(b.date) - dayjs(a.date))
          .map((post) => {
            return (
              <SummarizedPost
                onClick={() => clickGoToUpdate(post?.id)}
                key={post?.id}
              >
                <div>
                  <StPostTitle>{post?.title}</StPostTitle>
                  <StDayContent>
                    {dayjs(post?.date).format("YYYY년 M년 D일 h:m")}
                  </StDayContent>
                </div>
                <StContent>{post?.content}</StContent>
              </SummarizedPost>
            );
          })}
      </StPostContainer>
    </StPostsSummaryContainer>
  );
}

export default PostsSummary;

const StPostsSummaryContainer = styled.article`
  max-width: 800px;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const SummarizedPost = styled.li`
  padding: 30px;
  border: none;
  /* margin-bottom: 12px; */
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  background-color: ${colors.inputBoxColor};
  border-radius: 10px;
  color: ${colors.postColor};
  margin: 20px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const StWriteInforContent = styled.h4`
  color: ${colors.smallTitleColor};
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 20px;
`;

const StPostContainer = styled.ul`
  background-color: #fff;
  box-shadow: 0px 4px 30px 5px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  /* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
  /* padding: 20px; */
  margin-bottom: 20px;
  cursor: pointer;
`;

const StDayContent = styled.p`
  color: ${colors.indexFontColor};
  font-size: 14px;
`;

const StPostTitle = styled.h4`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
`;

const StContent = styled.p`
  font-size: 16px;
  line-height: 24px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
