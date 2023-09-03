import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import Cart from 'pages/Cart/Cart';

import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/dream-cakes" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
};
