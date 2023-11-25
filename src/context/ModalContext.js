import { createContext, useState } from "react";

export const ModalContext = createContext({
  showModal: false,
  setShowModal: () => {},
  showPostModal: false,
  setShowModal: () => {},
});

const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, showPostModal, setShowPostModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
