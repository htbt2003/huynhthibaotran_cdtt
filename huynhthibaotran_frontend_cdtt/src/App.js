import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutSite from './layouts/LayoutSite';
import RouterApp from './router';
import LayoutAdmin from "./layouts/LayoutAdmin";
import { Provider } from "react-redux";
import store from "./pages/frontend/Cart/stores";
import React, { useEffect, useState } from 'react';
import Login from "./pages/frontend/Login";
import Register from "./pages/frontend/Register";
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

function App() {
  const [Authenticated, setAuthenticated] = useState(false);
  const [loading, setloading] = useState(true);

  // useEffect(() => {
  //   axios.get(`http://huynhthibaotran_backend_cdtt.test/api/checkingAuthenticated`).then(res => {
  //     if (res.status === 200) {
  //       setAuthenticated(true);
  //       console.log(true)
  //     }
  //     setloading(false);
  //   });

  //   // return () => {
  //   //   setAuthenticated(false);
  //   // };
  // }, []);
  console.log(localStorage.getItem('auth'))
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutSite />}>
            {RouterApp.RouterPublic.map(function (router, index) {
              const Page = router.component;
              return <Route key={index} path={router.path} element={<Page />} />
            })}
          </Route>
          <Route path='/dang-nhap' element={<Login />}></Route>
          <Route path='/dang-ky' element={<Register />}></Route>
          {
            localStorage.getItem('auth') == 'admin' ?
            (
              <Route path="/admin" element={<LayoutAdmin />}>
                {RouterApp.RouterPrivate.map(function (router, index) {
                  const Page = router.component;
                  return <Route key={index} path={router.path} element={<Page />} />
                })}
              </Route>
            )
            :
            (
              <Route path="*" element={<Navigate to="/dang-nhap" />} />
            )
          }
          
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
