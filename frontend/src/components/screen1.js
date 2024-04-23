import React, { useState, useEffect } from 'react';
import SidebarExampleVisible from './slidebar.js';
import { Form, TextArea,Button } from 'semantic-ui-react'


export const Screen1 = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const send = () => {
        console.log(text);
    }
     const vista2 = () => {
        window.location.href = '/vista2';
     }

    return (
        <>
            <SidebarExampleVisible/>
            <Form>
                <TextArea rows={2} placeholder='Tell us more' value={text} onChange={handleChange} />
            </Form>
            <div>
                <Button  onClick={send}primary>Primary</Button>
                <Button  onClick={vista2}secondary>Secondary </Button>
            </div>
        </>
    );
}