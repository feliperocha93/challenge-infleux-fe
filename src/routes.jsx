import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Advertiser from './pages/Advertiser';
import Auth from './pages/Auth';
import Publisher from './pages/Publisher';

import { Context } from './components/App';

export default function Router() {
  const { state } = useContext(Context);
  const isLoggedIn = state?.user?.userId && state?.user?.userId !== '';

  const Home = state?.user?.userRole === 'publisher' ? <Publisher /> : <Advertiser />;

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? Home : <Navigate to="/login" />} />
      <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <Auth />} />
      <Route path="*" element={isLoggedIn ? <Navigate to="/login" /> : <Navigate to="/" />} />
    </Routes>
  );
}
