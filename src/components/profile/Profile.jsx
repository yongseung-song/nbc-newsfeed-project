import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { PostContext } from "../../context/PostContext";

function Profile() {
  const { postList } = useContext(PostContext);
  const { photoURL, displayName, email } = getAuth()?.currentUser;

  const iterableData = Object.values({ ...postList });

  return (
    <>
      <div>
        <img src={photoURL} alt={displayName} />
        <h3>{displayName}</h3>
        <p>{email}</p>
        <ul>
          <li></li>
        </ul>
      </div>
      <p></p>
    </>
  );
}

export default Profile;
