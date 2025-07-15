import {useNavigate} from "react-router";
import {logoutUser} from "~/appwrite/auth";
import {useEffect} from "react";

const PageLayout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate('/dashboard'); // remove this line, also when removing this, remember to set default 'type' as 'user', instead of 'admin', in appwrite 'users' table attributes
    },[])
    const handleLogout = async () => {
        await logoutUser();
        navigate('/sign-in');
    }
    return (
        <div>
            <button
                onClick={handleLogout}
                className="cursor-pointer"
            >
                <img
                    src="/assets/icons/logout.svg"
                    alt="logout"
                    className="size-6"
                />
            </button>
            <button onClick={()=>{navigate('/dashboard')}}>
                Dashboard
            </button>
        </div>
    )
}
export default PageLayout
