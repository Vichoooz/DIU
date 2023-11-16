import React, { useState } from 'react';
import NavBar from '../components/nav_bar';
import { TextField, Button, Select, MenuItem } from '@mui/material';

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

const BuscarPage = () => {
  const jardinero = {
    nombre: 'Jardinero Ejemplo',
    precio: 'Precio Medio',
  };

  const comentarios = [
    'Excelente servicio de jardinería.',
    'El jardín luce espectacular gracias a este profesional.',
    'Muy recomendado para tareas de jardinería.',
  ];

  // Función para obtener un comentario aleatorio
  const obtenerComentarioAleatorio = () => {
    const indice = Math.floor(Math.random() * comentarios.length);
    return comentarios[indice];
  };

  const comentarioAleatorio = obtenerComentarioAleatorio();

  const handleClick = () => {
    history.push('/chat');
  };

  return (
    <div style={centerStyle}>
      <NavBar />
      <h1>Búsqueda de Servicio</h1>

      <div>
        <h3>Jardinero Disponible:</h3>
        <p>Nombre: {jardinero.nombre}</p>
        <p>Precio: {jardinero.precio}</p>
      </div>

      <div>
        <h3>Comentario:</h3>
        <p>{comentarioAleatorio}</p>
      </div>
       <Button color= "inherit" variant="contained" onClick={() => { /* No hacer nada */ }}>
        Contratar
      </Button>
      <br />
      <Button color= "inherit" variant="contained" onClick={handleClick} href="chat">
        Chatear
      </Button>

      {/* Aquí puedes agregar un componente de Google Maps si lo necesitas */}
    </div>
  );
};

export default BuscarPage;
