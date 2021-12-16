import { Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
import Publisher from './pages/Publisher';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/publisher" element={<Publisher />} />
    </Routes>
  );
}
