import { createContext, useState } from "react";

export const PostContext = createContext({
  postList: {},
});

const PostContextProvider = ({ children }) => {
  const [postList, setPostList] = useState({});
  return (
    <PostContext.Provider value={{ postList, setPostList }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
