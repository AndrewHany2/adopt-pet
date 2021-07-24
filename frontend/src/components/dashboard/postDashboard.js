import React from "react"

function PostDashboard(){
    return(
<div className="table-responsive">
   <table class="table">
    <thead>
        <tr>
        <th scope="col">User</th>
        <th scope="col">Name-pet</th>
        <th scope="col">Gender</th>
        <th scope="col">Type</th>
        <th scope="col">DateOfBirth</th>
        <th scope="col">Size</th>
        <th scope="col">image</th>
        <th colSpan="true" className="text-center">status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">Email@gmail.com</th>
        <td>Fluffy</td>
        <td>Female</td>
        <td>dog</td>
        <td>7-7-2020</td>
        <td>Medium</td>
        <td><img src="../resources/adoption1-185x185.jpg" width="50" className="rounded-circle"/></td>
        <td><button className="btn btn-success">Accept</button></td>
        <td><button className="btn btn-danger">Reject</button></td>
        </tr>
    </tbody>
    </table>
</div>
    ) 

}
export default PostDashboard