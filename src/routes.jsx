import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Auth from './pages/Auth';
import Publisher from './pages/Publisher';

import { Context } from './components/App';

export default function Router() {
  const { state } = useContext(Context);
  const isLoggedIn = !!state.userId;
  // TODO: Change Auth to Advertiser when this page is done
  const Home = state.userRole === 'publisher' ? Publisher : Auth;

  return (
    <Routes>
      <Route path="/login" element={isLoggedIn ? <Auth /> : <Home />} />
      <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
    </Routes>
  );
}
