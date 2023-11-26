import dayjs from "dayjs";
import { getAuth } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import idcard from "../../assets/idcard.png";
import { PostContext } from "../../context/PostContext";
import { db } from "../../firebase";
import { colors } from "../../styles/GlobalColors";

function Profile() {
  const { postList } = useContext(PostContext);
  const {
    photoURL,
    displayName,
    email,
    uid,
    metadata: { creationTime },
  } = getAuth()?.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(
      collection(db, "posts"),
      where("creatorUid", "==", getAuth().currentUser.uid)
    );

    getDocs(q)
      .then((res) => res.forEach((doc) => console.log(doc.data())))
      .catch((err) => console.log(err));
    console.log(getAuth().currentUser.uid);
  }, []);

  const iterableData = Object.values({ ...postList });
  const myPosts = iterableData.filter((item) => item.creatorUid === uid);

  const clickGoToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  // console.log(myPosts);
  return (
    <ProfileWrapper>
      <ProfileInfo>
        <StIdCardContent>
          <StInforContainer>
            <img src={photoURL} alt={displayName} />
            <StInforIndexContainer>
              <h3>{displayName}</h3>
              <StEmailContent>{email}</StEmailContent>
            </StInforIndexContainer>
          </StInforContainer>
        </StIdCardContent>

        <StSignUpDayContent>
          가입 날짜 : {dayjs(creationTime).format("YYYY년 M년 D일 h:m")}
        </StSignUpDayContent>
      </ProfileInfo>
      <StWriteInforContent>
        {displayName}님이 작성하신 글이 {myPosts.length}개 있습니다.
      </StWriteInforContent>
      <StPostContainer>
        {myPosts
          .sort((a, b) => dayjs(b.date) - dayjs(a.date))
          .map((post) => {
            return (
              <SummarizedPost
                onClick={() => clickGoToDetail(post?.id)}
                key={post?.id}
              >
                <div>
                  <h4>{post?.title}</h4>
                  <p>{dayjs(post?.date).format("YYYY년 M년 D일 h:m")}</p>
                </div>
                <p>{post?.content}</p>
              </SummarizedPost>
            );
          })}
      </StPostContainer>
      <p></p>
    </ProfileWrapper>
  );
}

export default Profile;

const ProfileWrapper = styled.article`
  max-width: 800px;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  /* gap: 36px; */
  padding: 20px;
  /* background-color: ${colors.inputBoxColor}; */
  margin: 24px 0;
  font-size: 24px;
`;

const SummarizedPost = styled.li`
  padding: 30px;
  border: none;
  /* margin-bottom: 12px; */
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  background-color: ${colors.inputBoxColor};
  border-radius: 10px;
  color: ${colors.postColor};
  margin: 20px;
`;

const StIdCardContent = styled.div`
  background-image: url(${idcard});
  width: 236px;
  height: 405px;
  background-size: cover; /* 이미지를 컨테이너에 맞게 조절합니다 */
  background-position: center;
`;

const StInforContainer = styled.div`
  margin-top: 158px;
  text-align: center;
  color: ${colors.mainColor};
  font-size: 28px;
  font-weight: 900;
  text-align: center;
`;

const StInforIndexContainer = styled.div`
  margin-top: 65px;
  gap: 20px;
`;

const StEmailContent = styled.p`
  margin-top: 10px;
  font-size: 16px;
`;

const StSignUpDayContent = styled.p`
  background-color: ${colors.inputBoxColor};
  padding: 10px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  color: ${colors.smallTitleColor};
`;

const StWriteInforContent = styled.h4`
  color: ${colors.smallTitleColor};
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 20px;
`;

const StPostContainer = styled.ul`
  background-color: #fff;
  box-shadow: 0px 4px 30px 5px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  /* display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center; */
  /* padding: 20px; */
  margin-bottom: 20px;
`;

const StDayContent = styled.p`
  color: ${colors.indexFontColor};
  font-size: 12px;
`;
