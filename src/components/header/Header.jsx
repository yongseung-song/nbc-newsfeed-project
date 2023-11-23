import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "../../pages/SignIn.jsx";
import * as St from "./Header.style.jsx";
import ModalBasic from "./ModalBasic.jsx";

function Header() {
	const [modalOpen, setModalOpen] = useState(false);

	const loginModalHandler = () => {
		setModalOpen(true);
	};

	return (
		<St.Header>
			<Link to={"/"}>home</Link>
			<form action="submit">
				<label htmlFor="search">검색</label>
				<input id="search" name="search" type="text" />
			</form>
			<St.BtnContainer>
				<button>darkmode</button>
				<button onClick={loginModalHandler}>login</button>
				{modalOpen && (
					<ModalBasic setModalOpen={setModalOpen}>
						<SignIn setModalOpen={setModalOpen} />
					</ModalBasic>
				)}
			</St.BtnContainer>
		</St.Header>
	);
}

export default Header;
