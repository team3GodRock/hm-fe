import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import ProfilePage from './pages/Profile/ProfilePage';
import MapPage from './pages/Map/MapPage';

function App() {
  return (
    <MapPage/>
  );
}

export default App;
