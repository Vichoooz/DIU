import React from 'react';
import NavBar from '../components/nav_bar';

const HomePage = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className='page'>
      <main>
        <h1 className='page__title'>Página de Inicio</h1>
        {/* Aquí iría el contenido principal de tu página */}
      </main>
      <footer>
        {/* Aquí puedes agregar un pie de página si lo deseas */}
      </footer>
      </div>
    </div>
  );
}

export default HomePage;
