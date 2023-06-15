import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import { routes } from './utils/routes';
import { Details } from './pages/Details';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={`${routes.details}/:id`} element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
