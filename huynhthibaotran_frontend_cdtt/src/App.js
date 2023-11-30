// import './assets/js/vendor/jquery-1.12.0.min.js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutSite from './layouts/LayoutSite';
import RouterPrivate from './router/RouterPrivate';
import RouterPublic from './router/RouterPublic';
import LayoutAdmin from "./layouts/LayoutAdmin";
// import { Provider } from "react-redux";
// import store from "./pages/frontend/Cart/stores";
import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'popper.js';
// import 'ajax-mail.js';
// import 'plugins.js';
// import 'main.js';
function App() {
  
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutSite />}>
            {RouterPublic.map(function (router, index) {
              const Page = router.component;
              return <Route key={index} path={router.path} element={<Page />} />
            })}
          </Route>
          <Route path="/admin" element={<LayoutAdmin />}>
            {RouterPrivate.map(function (router, index) {
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
