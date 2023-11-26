import dayjs from "dayjs";
import { useContext } from "react";
import styled from "styled-components";
import idcard from "../../assets/idcard.png";
import { PostContext } from "../../context/PostContext";
import { colors } from "../../styles/GlobalColors";

function Profile({ photoURL, displayName, email, uid, creationTime }) {
	const { postList } = useContext(PostContext);

	// console.log(myPosts);
	return (
		<StProfileWrapper>
			<StProfileInfo>
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
