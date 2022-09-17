import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Update() {
    const  navigate = useNavigate();
    const [id, setID] = useState(null);
    const [content, setContent] = useState('');


    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setContent(localStorage.getItem('content'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://6323959b5c1b435727983807.mockapi.io/todos/${id}`, {
            content,
        }).then(() => {
            navigate("/home");
        })
    }
    return (
        <div className='center'>
            <Form className="create-form">
                <Form.Field>
                    <label>Content</label><br/>
                    <input minlength="3" placeholder='Content'  onChange={(e) => setContent(e.target.value)}/>
                </Form.Field>
                <br/>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
