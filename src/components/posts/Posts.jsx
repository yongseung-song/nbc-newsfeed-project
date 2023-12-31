import dayjs from "dayjs";
import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { PostContext } from "../../context/PostContext";
import { db } from "../../firebase";
import Post from "../post/Post";

function Posts() {
  const { postList, setPostList, filter } = useContext(PostContext);

  useEffect(() => {
    getDocs(collection(db, "posts")).then((querySnapshot) =>
      querySnapshot.forEach((post) =>
        setPostList((prevList) => ({
          ...prevList,
          [post.id]: { ...post.data(), id: post.id },
        }))
      )
    );
    console.log("update occured");
  }, [db]);

  // useEffect(() => {
  // }, [filter]);

  const iterableData = Object.values({ ...postList });
  // console.log(iterableData);
  return (
    <PostsWrapper>
      {iterableData
        .sort((a, b) => dayjs(b.createDate) - dayjs(a.createDate))
        .map((post, idx) => {
          const {
            creator,
            creatorUid,
            creatorPhotoURL,
            title,
            id,
            content,
            createDate,
            tag,
            editDate,
          } = post;
          return (
            <Post
              key={id}
              title={title}
              creator={creator}
              creatorUid={creatorUid}
              creatorPhotoURL={creatorPhotoURL}
              content={content}
              id={id}
              createDate={createDate}
              editDate={editDate}
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
  padding-top: 6px;
  /* margin-top: 20px; */
`;
