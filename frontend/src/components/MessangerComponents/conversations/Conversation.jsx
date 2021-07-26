import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";
import { Spinner } from "react-bootstrap";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find(m => m !== currentUser);

    const getUser = async () => {
      try {

        const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
        const header = {
          headers: {

            Authorization: userInfo.token,
          },
        };

        const res = await axios.get(`api/user/${friendId}`, header);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return user ?
    (
      <div className="conversation">
        <img
          className="conversationImg"
          src={
            user?.profilePicture
              ? user?.image
              : "/assets/person/noAvatar.png"
          }
          alt=""
        />
        <span className="conversationName">{`${user?.firstName} ${user?.lastName}`}</span>
      </div>
    )
    : (
      <div className="conversation">
        <Spinner animation="border" style={{ color: '#F9BE4F' }} />
      </div>
    )
}
