import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// import './App.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

function LayoutAdmin () {

    return (
      <div className="container-scroller">
        <Header/>
        <div className="container-fluid page-body-wrapper">
          <Sidebar/>
          <div className="main-panel">
            <div className="content-wrapper">
              <Outlet/>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    );


}

export default LayoutAdmin;
