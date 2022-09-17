import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import Card from 'react-bootstrap/Card';

export default function Create() {
    const [content, setContent] = useState('');

    console.log(Checkbox)
    const postData = () => {
        axios.post(`https://6323959b5c1b435727983807.mockapi.io/todos`, {
            content,
        })
    }
    return (
        <Card>
        <div>
            <h5>Create</h5>
            <Form className="create-form">
                <Form.Field>
                    <input minlength="3" placeholder='todo task' onChange={(e) => setContent(e.target.value)} />
                </Form.Field>
              <br/>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            <br/>

        </div>
        </Card>
    )
}
