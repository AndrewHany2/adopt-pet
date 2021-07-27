import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './nav-bar.css'

export default function DashboardNavbar() {

  const userLogin = useSelector(state => state.userLogin)

  return (
    <>
      <ul
        style={{
          height: "80px",
          backgroundColor: "#F9575C",
          lineHeight: "80px"
        }}
        className="nav-dashboard mt-4 mb-5 text-center w-75 mx-auto text-dark"
      >
        <NavLink
          style={{
            color: "white",
            lineHeight: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className="mx-5 nav-box"
          activeClassName="dashboard-active"
          to="/dashboard/posts"
        >
          Post Pet
        </NavLink>
        <NavLink
          style={{
            color: "white",
            lineHeight: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className="mx-5 nav-box"
          activeClassName="dashboard-active"
          to="/dashboard/adoption-requests"
        >
          Adoption Requests
        </NavLink>
        <NavLink
          style={{
            color: "white",
            lineHeight: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className="mx-5 nav-box"
          activeClassName="dashboard-active"
          to="/dashboard/messages"
        >
          Messages
        </NavLink>
        {userLogin.info.userRole === 'SUPER_ADMIN' && <NavLink
          style={{
            color: "white",
            lineHeight: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className="mx-5 nav-box"
          activeClassName="dashboard-active"
          to="/dashboard/set-admin"
        >
          Set Admins
        </NavLink>}
      </ul>
    </>
  );
}
