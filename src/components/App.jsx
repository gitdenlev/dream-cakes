import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';


import { Routes, Route, NavLink } from 'react-router-dom';


export const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/dream-cakes' element={<Home />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
};
