import React from "react";
import axios from "axios";

import './message.css'

export default function Message(props) {
    const handleClickRead = async () => {
        const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
        const header = {
            headers: {
                Authorization: userInfo.token,
            },
        };
        const id = props.message._id;
        await axios.patch(`/api/contactus/${id}`, { status: 'READ' }, header);
        props.handleClick(props.message._id);
    };

    return (
        <tbody>
            <tr>
                <td className="noWhiteSpaceTable">{props.message.name}</td>
                <td className="noWhiteSpaceTable">{props.message.email}</td>
                <td className="noWhiteSpaceTable">{props.message.subject}</td>
                <td className="noWhiteSpaceTable">{props.message.message}</td>
                <td>
                    <button className="btn btn-success noWhiteSpaceTable" onClick={handleClickRead}>
                        Mark As Read
                    </button>
                </td>
            </tr>
        </tbody>
    );
}