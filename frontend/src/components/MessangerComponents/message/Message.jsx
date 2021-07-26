import "./message.css";
import { useEffect, useState } from "react";
import { format } from "timeago.js";
import axios from "axios";

export default function Message({ message, own }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const id = message.sender;

    const getUser = async () => {

      const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
      const header = {
        headers: {

          Authorization: userInfo.token,
        },
      };

      try {
        const res = await axios.get(`api/user/${id}`, header);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [message]);

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={
            user?.profilePicture
              ? user?.image
              : "/assets/person/noAvatar.png"
          }
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}
