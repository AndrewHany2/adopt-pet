import { useEffect, useState } from "react";
import PostDashboard from "../../components/dashboard/postDashboard";
import axios from "axios";
import DashboardNavbar from "../../components/dashboard/nav-bar"
import { Spinner } from 'react-bootstrap';

export default function Posts() {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        async function temp() {
            const userInfo = JSON.parse(window.localStorage.getItem("userInfo"));
            const header = {
                headers: {
                    Authorization: userInfo.token,
                },
            };
            const { data } = await axios.get("/api/admin/pendingPets", header);
            setPets(data?.result);
        }
        temp();
    }, []);

    const handleClick = (id, list) => {
        if (list === "pets") {
            let temp = [...pets];
            const index = temp.findIndex((pet) => pet._id === id);
            temp.splice(index, 1);
            setPets(temp);
        }
    };

    return (
        <>
            <DashboardNavbar />

            {pets?.length ?
                <div className="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">User</th>
                                <th scope="col">Name-pet</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Type</th>
                                <th scope="col">Vaccinated</th>
                                <th scope="col">Size</th>
                                <th scope="col">image</th>
                                <th scope="col">Accept</th>
                                <th scope="col">Decline</th>
                            </tr>
                        </thead>
                        {pets?.map((pet) => {
                            return (
                                <PostDashboard
                                    key={pet._id}
                                    pet={pet}
                                    handleClick={handleClick}
                                />
                            );
                        })}
                    </table>
                </div> :
                <div className="text-center mt-4 mb-5">
                    <span>Loading Post Requests.. &nbsp;&nbsp;</span>
                    <Spinner animation="grow" variant="warning" />
                </div>}
        </>
    )
}