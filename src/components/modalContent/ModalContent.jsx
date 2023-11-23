import React, { useContext } from "react";
import { Context } from "../../context/Context";
import * as St from "./ModalContent.style";

function ModalContent({ children, onClose }) {
  const { showModal } = useContext(Context);
  return (
    <St.ModalWrapper visible={showModal} onClick={onClose}>
      <div>
        {children}I am a modal dialog
        <button onClick={onClose}>close</button>
      </div>
    </St.ModalWrapper>
  );
}

export default ModalContent;
