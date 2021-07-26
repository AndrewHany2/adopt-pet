import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './nav-bar.css'

export default function DashboardNavbar() {

  const userLogin = useSelector(state => state.userLogin)

  return (
    <>
      <ul
        style={{
          height: "50px",
          borderRadius: "20px",
          backgroundColor: "#F9575C",
        }}
        className="mt-4 mb-5 text-center w-75 mx-auto text-dark"
      >
        <Link
          activeClassName="is-active"
          style={{
            color: "white",
            lineHeight: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className="mx-5"
          to="/dashboard/posts"
        >
          Post Pet
        </Link>
        <Link
          activeClassName="is-active"
          style={{
            color: "white",
            lineHeight: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className="mx-5"
          to="/dashboard/adoption-requests"
        >
          Adoption Requests
        </Link>
        <Link
          activeClassName="is-active"
          style={{
            color: "white",
            lineHeight: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className="mx-5"
          to="/dashboard/messages"
        >
          Messages
        </Link>
        {userLogin.userRole === 'SUPER_ADMIN' && <Link
          activeClassName="is-active"
          style={{
            color: "white",
            lineHeight: "50px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
          className="mx-5"
          to="/dashboard/set-admin"
        >
          Set Admins
        </Link>}
      </ul>
    </>
  );
}
