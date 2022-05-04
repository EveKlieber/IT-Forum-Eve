import { useState, createContext, useEffect } from "react";
export const CommentsContext = createContext();

export const CommentsContextProvider = (props) => {
  const [commentsContext, setCommentsContext] = useState([]);
  // useEffect(() => {
  //   const getComments = async () => {
  //     const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await resp.json();
  //     const users = data.slice(0, 3);
  //     const commentsApi = [];
  //     users.map((user) => {
  //       const userApi = {
  //         userName: user.username,
  //         commentTitle: user.company.name,
  //         message: `${user.company.catchPhrase} It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.em `,
  //         type: "topic1",
  //       };
  //       commentsApi.push(userApi);
  //     });

  //     setCommentsContext(commentsApi);

  //     // let toStorage = JSON.parse(localStorage.getItem("topic1")) || [];

  //     // toStorage.push(...commentsApi);
  //     // localStorage.setItem("topic1", JSON.stringify(toStorage));
  //   };
  //   getComments();
  // });
  return (
    <CommentsContext.Provider value={[commentsContext, setCommentsContext]}>
      {props.children}
    </CommentsContext.Provider>
  );
};
