import React, { useState } from 'react';
import NavBar from '../components/nav_bar';
import { TextField, Button, Select, MenuItem , InputLabel , FormControl, createTheme, ThemeProvider, Box} from '@mui/material';
import { useHistory } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import '../stylesheets/page/page.scss';

const centerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
};

const BuscarPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

const handleSearch = () => {
    history.push('/searchservJardinero');
  };

  return (
    <div style={centerStyle}>
      <NavBar/>
      <Box textAlign='center'>
      <div className='page'>
      <h1 className='page__title'>Búsqueda de Servicio</h1>
      <TextField
        color= "success"
        label="Servicio a buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <br></br> <br></br>
      <TextField
        color= "success"
        label="Zona en que buscar"
        value={location}
        
        onChange={(e) => setLocation(e.target.value)}
      />
      <br></br> <br></br>
      <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label" color= "success">Margen de precios</InputLabel>
        <Select
          color= "success" 
          labelId="demo-simple-select-label"
          label="Margen de precios"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        >
          <MenuItem value="">Cualquier precio</MenuItem>
          <MenuItem value="bajo">Bajo</MenuItem>
          <MenuItem value="medio">Medio</MenuItem>
          <MenuItem value="alto">Alto</MenuItem>
        </Select>
      </FormControl>
      <br></br> <br></br>
      <Button color="inherit" variant="contained" display= 'flex' onClick={handleSearch} href="searchservJardinero">
        Buscar
      </Button>

      {/* Aquí puedes agregar un componente de Google Maps si lo necesitas */}
      </div>
      </Box>
    </div>
  );
};

export default BuscarPage;
