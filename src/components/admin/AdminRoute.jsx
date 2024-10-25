import { useSelector } from "react-redux";
import Admin from "./Admin"
import Login from "./AdminLogin"

export default function AdminRoute(){

    const user = useSelector((state) => state.user.user);

    return(
        <div>
        {user.username?
            <Admin />:
            <Login />
        }
        </div>
    )
}