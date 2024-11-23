import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ProfilePage from './pages/Profile/ProfilePage';
import ListPage from './pages/List/ListPage';
import MapPage from './pages/Map/MapPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;