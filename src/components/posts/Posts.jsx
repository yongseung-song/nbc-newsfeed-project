import dayjs from "dayjs";
import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { PostContext } from "../../context/PostContext";
import { db } from "../../firebase";
import Post from "../post/Post";
import * as St from "./Posts.style";

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
  }, [postList]);

  const iterableData = Object.values({ ...postList });
  return (
    <St.PostsWrapper>
      {iterableData
        .sort((a, b) => dayjs(b.date) - dayjs(a.date))
        .map((post, idx) => {
          const { creator, title, id, content, date, tag } = post;
          return (
            <Post
              key={id}
              title={title}
              creator={creator}
              content={content}
              id={id}
              date={dayjs(date).format("YYYY년 M월 D일 h:m")}
              tag={tag}
            />
          );
        })}
    </St.PostsWrapper>
  );
}

export default Posts;
