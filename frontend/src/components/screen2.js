import React, { useState, useEffect } from 'react';

import axios from 'axios';


export const Screen2 = () => {
    const [discos, setDiscos] = useState([]);

    
        
       
    
    useEffect(() => {
        fetch('http://localhost:3001/Obtener_Discos') // Asegúrate de que la URL coincida con tu configuración de Docker y Golang
          .then(response => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Network response was not ok.');
          })
          .then(data => {
            setDiscos(data);
          })
          .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
          });
      }, []);
    

    return (
        <div className='screen2'>
            {discos.map(disco => (
                <div key={disco.nombre}>
                    {/* Renderizar disco */}
                </div>
            ))}
        </div>
    );
}