import { createContext, useState } from "react";

export const PostContext = createContext({
  postList: {},
});

const PostContextProvider = ({ children }) => {
  const [postList, setPostList] = useState({});
  const [filter, setFilter] = useState("all");

  return (
    <PostContext.Provider value={{ postList, setPostList, filter, setFilter }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
