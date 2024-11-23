import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ProfilePage from './pages/Profile/ProfilePage';
import ListPage from './pages/List/ListPage';
import MapPage from './pages/Map/MapPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/list/president" element={<ListPage />} />
          <Route path="/list/govern" element={<ListPage />} />
          <Route path="/profile/president" element={<ProfilePage />} />
          <Route path="/profile/govern" element={<ProfilePage />} />
          <Route path="/profile/map" element={<MapPage />} />
          
          <Route path='/*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;