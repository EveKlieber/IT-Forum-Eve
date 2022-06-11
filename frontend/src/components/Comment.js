import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

export default function Comment(props) {
  const [message, setMessage] = useState(props.comment.message);
  const [isEdit, setIsEdit] = useState(false);

  const putMessage = async () => {
    const res = await axios.put("https://it-forum-eve.herokuapp.com/", {
      id: props.comment.id,
      message: message,
    });
    setIsEdit(!isEdit);
  };

  return (
    <div className="comment">
      <div className="avatar-container">
        <img src={props.comment.avatar} className="avatar" alt="" />
        <h3>{props.comment.name}</h3>
      </div>
      <h5>{props.comment.title}</h5>

      {!isEdit ? <p>{message}</p> : null}
      {isEdit ? (
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      ) : null}

      <p className="data"> {props.comment.date}</p>

      <button onClick={() => props.onDelete(props.comment.id)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      {!isEdit ? (
        <button
          onClick={() => {
            setIsEdit(!isEdit);
          }}
        >
          {/* <FontAwesomeIcon icon={faTrashCan} /> */}
          edit
        </button>
      ) : null}

      {isEdit ? <button onClick={putMessage}>Done</button> : null}
    </div>
  );
}
