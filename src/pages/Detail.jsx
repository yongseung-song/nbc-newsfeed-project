import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";

function Detail() {
  const { postList, setPostList } = useContext(PostContext);
  const data = [
    { id: "1", title: "제목1", content: "내용입니다" },
    { id: "2", title: "제목2", content: "내용입니다2" },
    { id: "3", title: "제목3", content: "내용입니다3" },
    { id: "4", title: "제목4", content: "내용입니다4" },
    { id: "5", title: "제목5", content: "내용입니다5" },
  ];

  const [todos, setTodos] = useState(data);

  const clickDeleteButtonHadler = (id) => {
    // const answer = window.confirm("정말로 삭제하시겠습니까?");
    // if (!answer) return;
    const deleteData = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(deleteData);
  };

  // const editData = todos.filter((item) => {
  //   return item.id === id;
  // });

  return (
    <>
      {/* {editData.filter((data) => {
        return (
          <div key={data.id}>
            <p>제목:{data.title}</p>
            <p>내용:{data.content}</p>
          </div>
        );
      })} */}
    </>
  );
}
export default Detail;
