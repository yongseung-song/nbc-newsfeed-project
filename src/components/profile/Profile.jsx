import dayjs from "dayjs";
import { updateProfile } from "firebase/auth";
import { collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import idcard from "../../assets/idcard.png";
import { authService, db, storage } from "../../firebase";
import { colors } from "../../styles/GlobalColors";

function Profile({ photoURL, displayName, email, uid, creationTime }) {
  const [imageURL, setImageURL] = useState("");
  const storageRef = ref(storage);
  const usersRef = collection(db, "users");
  const navigate = useNavigate();

  const imageUploadHandler = (e) => {
    const file = e.target.files[0];
    const imagesRef = ref(storage, `images/${file.name}`);
    uploadBytes(imagesRef, file)
      .then((res) => getDownloadURL(imagesRef))
      .then((url) => {
        setImageURL((prevState) => url);
        return updateProfile(authService.currentUser, {
          photoURL: url,
        });
      })
      .then(() => navigate("/mypage"))
      .catch((error) => console.log(error));
  };

  return (
    <StProfileWrapper>
      <StProfileInfo>
        <StIdCardContent>
          <StInforContainer>
            <div>
              <img src={photoURL} alt={displayName} width="120px" />
              <StInforImageUploadForm>
                <label htmlFor="imageUpload">이미지 업로드</label>
                <input
                  type="file"
                  name="imageUpload"
                  id="imageUpload"
                  onChange={imageUploadHandler}
                />
              </StInforImageUploadForm>
            </div>
            <StInforIndexContainer>
              <h3>{displayName}</h3>
              <StEmailContent>{email}</StEmailContent>
            </StInforIndexContainer>
          </StInforContainer>
        </StIdCardContent>

        <StSignUpDayContent>
          가입 날짜 : {dayjs(creationTime).format("YYYY년 M년 D일 h:m")}
        </StSignUpDayContent>
      </StProfileInfo>
    </StProfileWrapper>
  );
}

export default Profile;

const StProfileWrapper = styled.article`
  max-width: 800px;
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const StProfileInfo = styled.div`
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

const StIdCardContent = styled.div`
  background-image: url(${idcard});
  width: 236px;
  height: 405px;
  background-size: cover; /* 이미지를 컨테이너에 맞게 조절합니다 */
  background-position: center;
`;

const StInforContainer = styled.div`
  position: relative;
  margin-top: 129px;
  color: ${colors.mainColor};
  font-size: 28px;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    border-radius: 100%;
    /* margin-top: -29px; */
    /* border: 1px solid white; */
  }
  img:hover {
    opacity: 0.5;
  }
`;

const StInforImageUploadForm = styled.form`
  position: absolute;
  top: 0px;
  left: 58px;
  label {
    display: block;
    height: 120px;
    width: 120px;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    opacity: 0;
    background-color: ${colors.mainColor};
    border-radius: 100%;
    cursor: pointer;
    transition: 0.2s all;
  }
  label:hover {
    opacity: 0.8;
  }
  input {
    visibility: hidden;
  }
`;

const StInforIndexContainer = styled.div`
  margin-top: 30px;
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
