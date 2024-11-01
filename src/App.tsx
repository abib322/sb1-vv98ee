import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PhotoSessions from './pages/PhotoSessions';
import Calendar from './pages/Calendar';
import Clients from './pages/Clients';
import Gallery from './pages/Gallery';
import Finance from './pages/Finance';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/seances" element={<PhotoSessions />} />
            <Route path="/calendrier" element={<Calendar />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/galerie" element={<Gallery />} />
            <Route path="/finances" element={<Finance />} />
            <Route path="/parametres" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;