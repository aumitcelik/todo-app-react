import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleClick = () => {

        navigate("/")
    }
    return (
        <>
            <div>
                <p>
                    {`   ${localStorage.getItem("username") === null ? "" : "Hello  " + localStorage.getItem("username")} `}
                </p>
            </div>
            <button onClick={handleClick}>Log out</button>
        </>
    )
}
export default Home;