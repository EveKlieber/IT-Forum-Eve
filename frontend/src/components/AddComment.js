import { CommentsContext } from "../context/CommentsContext";
import { useState, useContext } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const AddComment = (props) => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`;

  const [newComment, setNewComment] = useState({
    name: "",
    title: "",
    message: "",
    type: props.type,
    date: date,
    id: "",
    avatar: "",
  });

  const onSubmit = async (e) => {
    // e.preventDefault();
    console.log("submit");
    const res = await axios.post("https://it-forum-eve.herokuapp.com/", newComment);
  };

  return (
    <form onSubmit={onSubmit} className="messageform">
      <label>Your name: </label>

      <input
        name="name"
        type="text"
        required
        placeholder="Entry your name"
        onChange={(e) => {
          setNewComment({ ...newComment, name: e.target.value });
        }}
      />

      <label>Comment title:</label>
      <input
        name="title"
        type="text"
        placeholder="Entry comment title"
        onChange={(e) => {
          setNewComment({ ...newComment, title: e.target.value });
        }}
      />

      <textarea
        onChange={(e) => {
          setNewComment({ ...newComment, message: e.target.value, id: uuid() });
        }}
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="Entry your message"
        required
      ></textarea>
      <div className="avatar-section">
        <input
          onChange={(e) => {
            setNewComment({ ...newComment, avatar: e.target.value });
          }}
          id="avatar1"
          type="radio"
          value="https://gravatar.com/avatar/2a3c28d5008533b6788f01b0ef120bfa?s=400&d=robohash&r=x"
          name="avatar"
        />
        <label className="img-label" htmlFor="avatar1" id="avatar1"></label>
        <input
          onChange={(e) => {
            setNewComment({ ...newComment, avatar: e.target.value });
          }}
          id="avatar2"
          type="radio"
          value="https://gravatar.com/avatar/aea2e64024cf413d614d6063ee133d01?s=400&d=robohash&r=x"
          name="avatar"
        />
        <label className="img-label" htmlFor="avatar2" id="avatar2"></label>
        <input
          onChange={(e) => {
            setNewComment({ ...newComment, avatar: e.target.value });
          }}
          id="avatar3"
          type="radio"
          value="https://gravatar.com/avatar/be5988f4f3cca321736a528e981c2e43?s=400&d=robohash&r=x"
          name="avatar"
        />
        <label className="img-label" htmlFor="avatar3" id="avatar3"></label>

        <input
          onChange={(e) => {
            setNewComment({ ...newComment, avatar: e.target.value });
          }}
          id="avatar4"
          type="radio"
          value="https://gravatar.com/avatar/dd7bba5b9c99f676cdf8cec71fd6c5de?s=400&d=robohash&r=x"
          name="avatar"
        />
        <label className="img-label" htmlFor="avatar4" id="avatar4"></label>

        <input
          onChange={(e) => {
            setNewComment({ ...newComment, avatar: e.target.value });
          }}
          id="avatar5"
          type="radio"
          value="https://gravatar.com/avatar/673fd6757fca9d88a7b16f6e6e1efeb3?s=400&d=robohash&r=x"
          name="avatar"
        />
        <label className="img-label" htmlFor="avatar5" id="avatar5"></label>
        <input
          onChange={(e) => {
            setNewComment({ ...newComment, avatar: e.target.value });
          }}
          id="avatar6"
          type="radio"
          value="https://gravatar.com/avatar/840f10eb6c53847e66cc435043567f84?s=400&d=robohash&r=x"
          name="avatar"
        />
        <label className="img-label" htmlFor="avatar6" id="avatar6"></label>
      </div>

      <button type="submit">Add Comment</button>
    </form>
  );
};

export default AddComment;
