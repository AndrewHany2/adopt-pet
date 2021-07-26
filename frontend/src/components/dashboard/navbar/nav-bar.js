import { Link } from "react-router-dom";
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
        <Link
          style={{
            color: "white",
            lineHeight: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className="mx-5 nav-box"
          to="/dashboard/posts"
        >
          Post Pet
        </Link>
        <Link
          style={{
            color: "white",
            lineHeight: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className="mx-5 nav-box"
          to="/dashboard/adoption-requests"
        >
          Adoption Requests
        </Link>
        <Link
          style={{
            color: "white",
            lineHeight: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className="mx-5 nav-box"
          to="/dashboard/messages"
        >
          Messages
        </Link>
        {userLogin.info.userRole === 'SUPER_ADMIN' && <Link
          style={{
            color: "white",
            lineHeight: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className="mx-5 nav-box"
          to="/dashboard/set-admin"
        >
          Set Admins
        </Link>}
      </ul>
    </>
  );
}
