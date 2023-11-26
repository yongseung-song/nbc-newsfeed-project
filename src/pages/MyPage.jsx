import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
`;
