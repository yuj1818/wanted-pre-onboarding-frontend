import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function isUser (SpecificComponent, option=null) {
    function Usercheck(props) {
        const navigate = useNavigate();

        useEffect(() => {
            if(localStorage.getItem('token')) {
                if(!option) {
                    navigate("/todo");
                } 
            } else {
                navigate("/signin");
            }
        },[])

        return (
            <SpecificComponent {...props} />
        )
    }
    return Usercheck;
}

export default isUser;