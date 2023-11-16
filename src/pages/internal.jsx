import React, { useState } from 'react';
import { Button, TextField, Box} from '@mui/material';
import NavBar from '../components/nav_bar';
import Perfil from '../assets/user.png';

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

export const InternalPage = () => {
  const [userName, setUserName] = useState('Juan Perez');
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(userName);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setUserName(newName);
    setEditing(false);
  };

  return (
    <div style={centerStyle}>
      <NavBar />
      <div className='page' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Box textAlign='center'>
        <h1>{userName}</h1>

        <img src={Perfil} height={200} alt='Imagen del usuario' />
        {editing ? (
          <div>
            <br />
            <TextField
              color= "success" 
              label="Nuevo Nombre"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <br /><br />
            <Button color="inherit" variant='contained' onClick={handleSave}>
              Actualizar
            </Button>
          </div>
        ) : (
          <div>
            <br />
            <Button color='inherit' variant='contained' onClick={handleEdit}>
              Cambiar Nombre
            </Button>
          </div>
        )}
        </Box>
      </div>
    </div>
  );
}

export default InternalPage;
