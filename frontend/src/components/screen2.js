import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'semantic-ui-react'
import { useNavigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';


export const Screen2 = () => {
    const [discos, setDiscos] = useState([]);

    let navigate = useNavigate();
    const handleDiscoClick = (nombreDisco) => {
        // Aquí manejarías el clic en el botón, por ejemplo, podrías hacer otra solicitud fetch
        console.log('Disco seleccionado:', nombreDisco);
        navigate("/screen2_partition");
      };


    useEffect(() => {
        fetch('http://18.117.94.73:3001/discos') // Asegúrate de que la URL coincida con tu configuración de Docker y Golang
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log(data);
                setDiscos(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);


    return (
        <div className='screen2'>
            {discos.map((nombreDisco, index) => (
        <Button color='black' className='disco-button'
          key={index} 
          onClick={() => handleDiscoClick(nombreDisco)}
          
        >
          <FontAwesomeIcon icon={faCompactDisc} />
          <span>{nombreDisco}</span>
        </Button>
      ))}
      <Link to="/screen1"> {/* Cambia "/donde-quiera-regresar" por la ruta a la que quieres que regrese */}
                    <button className="return-button">Regresar</button>
                </Link>
        </div>

    );
}