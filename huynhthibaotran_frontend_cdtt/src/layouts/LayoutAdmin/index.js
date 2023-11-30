import Header from './Header.js';
import Footer from './Footer.js';
import { Outlet } from 'react-router-dom';

function LayoutAdmin() {
  document.title = "Admin"
    return ( 
      <>
        <Header/>
        <seciton className="maincontent">
            <div className="container-fluid my-3">
              <Outlet/>
            </div>
        </seciton>
        <Footer/>
      </>
     );
}

export default LayoutAdmin;