import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PropertiesPage } from './pages/PropertiesPage';
import { PropertyPage } from './pages/PropertyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PropertiesPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/property/:id" element={<PropertyPage />} />
      </Routes>
    </Router>
  );
}

export default App;