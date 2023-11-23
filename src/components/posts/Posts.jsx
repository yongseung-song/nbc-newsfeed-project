import React, { useContext, useEffect } from "react";
import Post from "../post/Post";
import * as St from "./Posts.style";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Context } from "../../context/Context";
import dayjs from "dayjs";

function Posts() {
  const { postList, setPostList } = useContext(Context);

  useEffect(() => {
    getDocs(collection(db, "posts")).then((querySnapshot) =>
      querySnapshot.forEach((post) =>
        setPostList((prevList) => ({
          ...prevList,
          [post.id]: { ...post.data(), id: post.id },
        }))
      )
    );
  }, []);

  const data = Object.values({ ...postList });

  return (
    <St.PostsWrapper>
      {data.map((post, idx) => {
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
      <Post />
    </St.PostsWrapper>
  );
}

export default Posts;
