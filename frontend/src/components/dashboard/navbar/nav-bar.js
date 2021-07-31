import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import './nav-bar.css'

export default function DashboardNavbar() {

  const userLogin = useSelector(state => state.userLogin)

  return (
    <>
      <ul
        style={{
          // height: "50px",
          backgroundColor: "#F9575C",
          lineHeight: "35px",
          fontSize: "0.8rem",
          padding:"6px 0px"
        }}
        className="nav-dashboard mt-4 mb-5 text-center mx-auto text-dark"
      >
        <NavLink
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold"
          }}
          className="mx-1 nav-box"
          activeClassName="dashboard-active"
          to="/dashboard/posts"
        >
          Posts
        </NavLink>
        <NavLink
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
          className="mx-1 nav-box"
          activeClassName="dashboard-active"
          to="/dashboard/adoption-requests"
        >
          Adoption
        </NavLink>
        <NavLink
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
          className="mx-1 nav-box"
          activeClassName="dashboard-active"
          to="/dashboard/messages"
        >
          Messages
        </NavLink>
        {userLogin.info.userRole === 'SUPER_ADMIN' && <NavLink
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
          className="mx-1 nav-box"
          activeClassName="dashboard-active"
          to="/dashboard/set-admin"
        >
          Admins
        </NavLink>}
      </ul>
    </>
  );
}
