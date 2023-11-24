import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import dayjs from "dayjs";
import * as St from "./profile.style";
function Profile() {
  const { postList } = useContext(PostContext);
  const {
    photoURL,
    displayName,
    email,
    uid,
    metadata: { creationTime },
  } = getAuth()?.currentUser;
  console.log(getAuth().currentUser.uid);
  const iterableData = Object.values({ ...postList });
  const myPosts = iterableData.filter((item) => item.creatorUid === uid);
  // console.log(myPosts);
  return (
    <St.ProfileWrapper>
      <St.ProfileInfo>
        <img src={photoURL} alt={displayName} />
        <div>
          <h3>{displayName}</h3>
          <p>{email}</p>
        </div>
        <p>가입 날짜 : {dayjs(creationTime).format("YYYY년 M년 D일 h:m")}</p>
      </St.ProfileInfo>
      <h4>
        {displayName}님이 작성하신 글이 {myPosts.length}개 있습니다.
      </h4>
      <ul>
        {myPosts
          .sort((a, b) => dayjs(b.date) - dayjs(a.date))
          .map((post) => {
            return (
              <St.SummarizedPost key={post?.id}>
                <div>
                  <h4>{post?.title}</h4>
                  <p>{dayjs(post?.date).format("YYYY년 M년 D일 h:m")}</p>
                </div>
                <p>{post?.content}</p>
              </St.SummarizedPost>
            );
          })}
      </ul>
      <p></p>
    </St.ProfileWrapper>
  );
}

export default Profile;
