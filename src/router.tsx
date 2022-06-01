import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu';
import Home from './pages/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;