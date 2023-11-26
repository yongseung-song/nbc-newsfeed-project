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
import Tag from "../components/tag/Tag";
import { db } from "../firebase";

function Detail() {
  const [currentPost, setCurrentPost] = useState({});
  const [postList, setPostList] = useState([]);

  const postRef = collection(db, "posts");
  const params = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    const getDocPost = async () => {
      const updatePost = doc(db, "posts", params.id);
      const snapshotPost = await getDoc(updatePost);
      const postData = snapshotPost.data();

      setCurrentPost({ ...postData });
      return postData;
    };

    getDocPost();
  }, []);

  useEffect(() => {
    const getDocsPost = async () => {
      const currentPostDoc = doc(db, "posts", params.id);
      const snapshotPost = await getDoc(currentPostDoc);
      const postData = snapshotPost.data();
      const filterQuery = query(
        postRef,
        where("creatorUid", "!=", postData.creatorUid),
        where("tag", "array-contains-any", postData.tag),
        limit(5)
      );

      const postFilter = await getDocs(filterQuery);

      postFilter.forEach((post) => {
        console.log(post.data());
        setPostList((prevList) => [...prevList, post.data()]);
      });
    };

    getDocsPost();
  }, [db]);

  const clickUpdateBtnHandler = () => {
    navigator(`update`);
  };

  const clickRemoveBtnHandler = async () => {
    const delCheck = window.confirm("정말로 삭제하시겠습니까?");

    if (delCheck) {
      await deleteDoc(doc(db, "posts", params.id));

      alert("삭제되었습니다!");
    } else {
      return false;
    }
  };

  const clickGoToListBtnHandler = () => {
    navigator(`/`);
  };

  return (
    <>
      <p>채널이름</p>
      <p>
        {currentPost.tag &&
          Object.values(currentPost.tag).map((item, idx) => {
            return <Tag key={idx} item={item} />;
          })}
      </p>
      <p>제목: {currentPost.title}</p>
      <p>작성자: {currentPost.creator}</p>
      <p>
        작성시간: {currentPost.date} {currentPost.edit ? currentPost.edit : ""}
      </p>
      <p>{currentPost.content}</p>
      <button onClick={clickUpdateBtnHandler}>수정</button>
      <button onClick={clickRemoveBtnHandler}>삭제</button>
      <button onClick={clickGoToListBtnHandler}>목록으로</button>
      <p>연관글보기</p>
      {postList?.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </>
  );
}
export default Detail;
