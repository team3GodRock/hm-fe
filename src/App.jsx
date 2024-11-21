import { BrowserRouter, Route } from "react-router-dom";
import './App.css'

import ProfilePage from './pages/ProfilePage';

function App() {

  return (
    <>
      <Route>
        <BrowserRouter>
          <Route path="/profile" component={ProfilePage} />
        </BrowserRouter>
      </Route>
    </>
  )
}

export default App
