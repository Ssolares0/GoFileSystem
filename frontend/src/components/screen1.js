import React, { useState, useEffect } from 'react';
import SidebarExampleVisible from './slidebar.js';
import { Form, TextArea,Button } from 'semantic-ui-react'


export const Screen1 = () => {
    const [text, setText] = useState('');

    const handleChange = async(e) => {
        
        e.preventDefault();
        await fetch('http://localhost:3001/analizador', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                "comandos": [text],

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())

            .then(result => {
                // Aquí puedes trabajar con la respuesta JSON recibida
                //lo mostramos en el text area 2
                // si el texto recibido es undefined lo omitimos

               // document.querySelector('.text-area2').value = result.salida;
            })
            .catch(error => {
                console.log('Error:', error);
                // Manejo de errores
            });
    }

   
     
    const handleTextAreaChange = event => {
        const text = event.target.value;

        setText(text);
    };

    return (
        <div className="container">
        <div className="form-area">
            <Form>
                <TextArea className="textarea-expandida" rows={2} placeholder='Tell us more' value={text} onChange={handleTextAreaChange} />
              
            </Form>
            <div className="buttons">
                <Button onClick={handleChange} primary>Enviar</Button>
                <Button secondary>Secondary</Button>
            </div>
        </div>
        <div>
            <SidebarExampleVisible />
        </div>
    </div>
    );
}