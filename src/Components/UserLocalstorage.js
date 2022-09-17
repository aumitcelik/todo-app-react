import React, { useState } from "react";
import "./Components.css";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";


function UserLocalstorage() {
    const [username, setUsername] = useState('');
    const  navigate = useNavigate();

    function onChangeUsername(e) {
        setUsername(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        localStorage.setItem('username', username);
        navigate("/home");
    }


    return (
        <>
            <div>
                <div>
                    <Container className="center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Body style={{ backgroundColor: '#1976d2' }}>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input minlength="3" placeholder="Username"  type="text" value={username} onChange={onChangeUsername} />
                                    </div>
                                    <br/>
                                    <button>Log in</button>
                                </form>
                            </Card.Body>
                        </Card>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default UserLocalstorage;
