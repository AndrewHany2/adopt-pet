import { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavbar from "../../components/dashboard/navbar/nav-bar";
import Message from "../../components/dashboard/message/message";
import { Spinner } from "react-bootstrap";

export default function Messages(props) {

    const [messages, setMessages] = useState(null);

    useEffect(() => {
        if (!window.localStorage.getItem("userInfo")) {
            props.history.push("/signin");
            return;
        }
        async function temp() {
            const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
            const header = {
                headers: {
                    Authorization: userInfo.token,
                },
            };
            const response = await axios.get(
                `/api/contactus?status=UNREAD`,
                header
            );
            setMessages(response.data);
        }
        temp();
    }, []);

    const handleClick = (id) => {
        let temp = [...messages];
        const index = temp.findIndex(message => message._id === id);
        temp.splice(index, 1);
        setMessages(temp);
    };

    return (
        <>
            <DashboardNavbar />
            {!messages ? (
                <div className="text-center mt-4 mb-5">
                    <span>Loading Adoption Requests.. &nbsp;&nbsp;</span>
                    <Spinner animation="grow" variant="warning" />
                </div>
            ) : messages?.length > 0 ? (
                <div className="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">email</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Message</th>
                                <th scope="col">Read</th>
                            </tr>
                        </thead>
                        {messages &&
                            messages?.map(message => {
                                return (
                                    <Message
                                        key={message._id}
                                        message={message}
                                        handleClick={handleClick}
                                    />
                                );
                            })}
                    </table>
                </div>
            ) : (
                <div className="alert alert-info w-50 my-5 mx-auto text-center display-4 p-0" style={{ height: '350px', lineHeight: '350px' }}>
                    No Messages
                </div>
            )}
        </>
    )
}