import Topbar from './topbar/topbar';
import Home from './pages/home/home';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Home />
    </BrowserRouter>
  );
}

export default App;
