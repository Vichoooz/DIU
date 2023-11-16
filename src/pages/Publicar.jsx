import React, { useState } from 'react';
import NavBar from '../components/nav_bar';
import { TextField, Button, Select, MenuItem , InputLabel , FormControl, Box} from '@mui/material';

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

const PublicPage = () => {
  const [servicio, setServicio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [categoria, setCategoria] = useState('');

    const handleSearch = () => {  
    history.push('/searchservJardinero');
    }  

  return (
    <div style={centerStyle}>
      <NavBar />
      <Box textAlign='center'>
      <div className='page'>
      
      <h1 className='page__title'>Publicar Servicio</h1>
      <form>
        <TextField
          color='success'
          label="Nombre del Servicio"
          value={servicio}
          onChange={(e) => setServicio(e.target.value)}
        />
        <br></br> <br></br>
        <TextField
          color='success'
          label="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <br></br> <br></br>
        <TextField
          color='success'
          label="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <br></br> <br></br>
        <TextField
          color='success'
          label="Ubicación"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
        />
        <br></br> <br></br>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" color='success'>Categoría</InputLabel>
          <Select
            color='success'
            labelId="demo-simple-select-label"
            label="Categoría"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <MenuItem value="jardineria">Jardinería</MenuItem>
            <MenuItem value="limpieza">Limpieza</MenuItem>
            {/* Agrega más categorías según tus necesidades */}
          </Select>
        </FormControl>
        <br></br> <br></br>
        <Button
          color="inherit"
          variant="contained"
          onClick={handleSearch}
          href="searchservJardinero"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Publicar
        </Button>
        


      </form>
      
      </div>
      </Box>
    </div>
  );
};

export default PublicPage;
