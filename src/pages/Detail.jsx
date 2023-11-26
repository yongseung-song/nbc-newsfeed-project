import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

function Detail() {
  const [currentPost, setCurrentPost] = useState({});

  const params = useParams();

  useEffect(() => {
    const getDocPost = async () => {
      const updatePost = doc(db, "posts", params.id);
      const snapshotPost = await getDoc(updatePost);
      const postData = snapshotPost.data();

      setCurrentPost({ ...postData });
      console.log(postData);
      return postData;
    };

    getDocPost();
  }, []);

  return (
    <>
      <p>{currentPost.title}</p>
      <p>{currentPost.content}</p>
    </>
  );
}
export default Detail;
