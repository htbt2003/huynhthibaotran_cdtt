// import './assets/js/vendor/jquery-1.12.0.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutSite from './layouts/LayoutSite';
import RouterApp from './router';
import LayoutAdmin from "./layouts/LayoutAdmin";
// import { Provider } from "react-redux";
// import store from "./pages/frontend/Cart/stores";
import React, { useEffect } from 'react';
function App() {

  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutSite />}>
            {RouterApp.RouterPublic.map(function (router, index) {
              const Page = router.component;
              return <Route key={index} path={router.path} element={<Page />} />
            })}
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            {RouterApp.RouterPrivate.map(function (router, index) {
              const Page = router.component;
              return <Route key={index} path={router.path} element={<Page />} />
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
