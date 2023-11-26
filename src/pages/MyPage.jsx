import React from "react";
import styled from "styled-components";
import PostsSummary from "../components/postsSummary/PostsSummary";
import Profile from "../components/profile/Profile";
import { authService } from "../firebase";

function MyPage() {
  const {
    photoURL,
    displayName,
    email,
    uid,
    metadata: { creationTime },
  } = authService?.currentUser;
  return (
    <StFormWrapper>
      <Profile
        photoURL={photoURL}
        displayName={displayName}
        email={email}
        uid={uid}
        creationTime={creationTime}
      />
      <PostsSummary displayName={displayName} />
    </StFormWrapper>
  );
}

export default MyPage;

const StFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      127deg,
      rgba(32, 117, 255, 0.8),
      rgba(0, 255, 0, 0) 70.71%
    ),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
`;
