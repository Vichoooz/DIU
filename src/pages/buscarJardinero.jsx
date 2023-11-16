import React, { useState } from 'react';
import NavBar from '../components/nav_bar';
import { TextField, Button, Select, MenuItem, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

const BuscarPage = () => {
  const [contratado, setContratado] = useState(false); // Estado para controlar la visibilidad del Snackbar

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

  const handleClickContratar = () => {
    setContratado(true); // Establecer el estado a true al hacer clic en Contratar
  };

  const handleCloseSnackbar = () => {
    setContratado(false); // Establecer el estado a false al cerrar el Snackbar
  };

  const handleClickChatear = () => {
    // Redirigir a la página de chat
    history.push('/chat');
  };

  return (
    <div style={centerStyle}>
      <NavBar />
      <h1>Servicio</h1>

      <div>
        <h3>Jardinero Disponible:</h3>
        <p>Nombre: {jardinero.nombre}</p>
        <p>Precio: {jardinero.precio}</p>
      </div>

      <div>
        <h3>Comentario:</h3>
        <p>{comentarioAleatorio}</p>
      </div>

      <Button color="inherit" variant="contained" onClick={handleClickContratar}>
        Contratar
      </Button>
      <br />
      <Button color="inherit" variant="contained" onClick={handleClickChatear} href="chat">
        Chatear
      </Button>

      <Snackbar open={contratado} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <MuiAlert elevation={6} variant="filled" severity="success" onClose={handleCloseSnackbar}>
          Contratado!
        </MuiAlert>
      </Snackbar>

      {/* Aquí puedes agregar un componente de Google Maps si lo necesitas */}
    </div>
  );
};

export default BuscarPage;
