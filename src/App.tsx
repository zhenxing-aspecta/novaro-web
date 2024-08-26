import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page';

function App() {
  return (
    <Routes>
      {/* landing-page 登录页 */}
      <Route path="/landing-page" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
