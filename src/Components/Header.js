import React from "react";
import "./Components.css";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";


export default function Header() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }

    return (
        <AppBar position="static">
            <Toolbar>

                <div class="col-xs-6 col-sm-3">
                    <p >
                        {`   ${localStorage.getItem("username") === null ? "" : "Hello  " + localStorage.getItem("username")} `}
                    </p>
                </div>
                <div class="col-xs-6 col-sm-7"/>

                <div class="col-xs-6 col-sm-2">
                    <Button onClick={handleClick} color="inherit">Log out</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}
