import dayjs from "dayjs";
import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { PostContext } from "../../context/PostContext";
import { db } from "../../firebase";
import Post from "../post/Post";

function Posts() {
  const { postList, setPostList } = useContext(PostContext);

  useEffect(() => {
    getDocs(collection(db, "posts")).then((querySnapshot) =>
      querySnapshot.forEach((post) =>
        setPostList((prevList) => ({
          ...prevList,
          [post.id]: { ...post.data(), id: post.id },
        }))
      )
    );
  }, [db]);

  const iterableData = Object.values({ ...postList });
  // console.log(iterableData);
  return (
    <PostsWrapper>
      {iterableData
        .sort((a, b) => dayjs(b.date) - dayjs(a.date))
        .map((post, idx) => {
          const { creator, creatorUid, title, id, content, date, tag } = post;
          return (
            <Post
              key={id}
              title={title}
              creator={creator}
              creatorUid={creatorUid}
              content={content}
              id={id}
              date={dayjs(date).format("YYYY년 M월 D일 h:m")}
              tag={tag}
            />
          );
        })}
    </PostsWrapper>
  );
}

export default Posts;

const PostsWrapper = styled.section`
  width: 100%;
  /* border: 1px solid #000; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
`;
