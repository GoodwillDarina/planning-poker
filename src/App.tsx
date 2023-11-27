import { useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header.tsx';

import { Home, CreateRoom, Room } from './pages';

export function App() {
  const location = useLocation();
  const isHomePage = useMemo(() => location.pathname === '/', [location]);
  const pageName = useMemo(() => {
    switch(location.pathname) {
      case '/create': 
        return 'Create room';
      default: 
        return 'Planning Poker';
    }
  }, [location]);

  return (
    <div className='flex flex-col justify-between h-screen'>
      { !isHomePage && <Header title={pageName} />}
      <main className='max-w-4xl w-full h-full py-3 px-2 mx-auto text-center'>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/create' element={ <CreateRoom /> } />
          <Route path='/room/:roomId'  element={ <Room /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}