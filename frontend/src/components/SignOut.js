import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { logout } from "../store/actions/UserActions";

function SignOut(props) {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout())
    props.history.push(`/signin`);
  });



  return (
    <>

    </>
  );
}
export default SignOut;
