import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import ModalBasic from "../modal/ModalBasic";

function PostModal({ id }) {
  const [currentPost, setCurrentPost] = useState({});
  console.log("해당하는", id);
  useEffect(() => {
    const getDocPost = async () => {
      const getPost = doc(db, "posts", id);
      const snapshotPost = await getDoc(getPost);
      const postData = snapshotPost.data();

      setCurrentPost(postData);

      return postData;
    };

    getDocPost();
  }, []);

  return (
    <ModalBasic>
      <div>
        <h3>{currentPost.title}</h3>
        <p>{currentPost.id}</p>
        <p>{currentPost.date}</p>
      </div>
      <button></button>
    </ModalBasic>
  );
}

export default PostModal;
