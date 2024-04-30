import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Reports = () => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/reportes')
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);


    return (
        <div>
            <div className="containerRepo">

                <div className="button-grid">
                    {images.map((image, index) => (
                        <button key={index} onClick={() => setSelectedImage(image.data)}>
                            Show {image.name}
                        </button>
                    ))}

                </div>
                {selectedImage && <img src={selectedImage} alt="Selected" />}
                <Link to="/screen1"> {/* Cambia "/donde-quiera-regresar" por la ruta a la que quieres que regrese */}
                    <button className="return-button">Regresar</button>
                </Link>

            </div>
        </div>
    );
}