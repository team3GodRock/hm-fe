import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ProfilePage from './pages/Profile/ProfilePage';
import MapPage from './pages/Map/MapPage';

function App() {
  return (
    <RecoilRoot> {/* Recoil 상태 관리를 위한 루트 */}
      <Router>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
