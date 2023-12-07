import Header from './Header';
import { Link, Outlet } from 'react-router-dom';
// import Footer from './Footer';
import Copyright from './Copyright';
// import "./LayoutSiteStyle.css"
import Home from '../../pages/frontend/Home';
import React, { useEffect } from 'react';
import '../../assets/css/plugin.css';
// import '../../assets/css/bundle.css';
// import '../../assets/js/main.js';

function LayoutSite() {
    useEffect(() => {
        // Load jQuery
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'assets/js/vendor/jquery-1.12.0.min.js';
        jqueryScript.async = true;
        document.body.appendChild(jqueryScript);
    
        // Load Popper.js
        const popperScript = document.createElement('script');
        popperScript.src = 'assets/js/popper.js';
        popperScript.async = true;
        document.body.appendChild(popperScript);
    
        // Load Bootstrap
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = 'assets/js/bootstrap.min.js';
        bootstrapScript.async = true;
        document.body.appendChild(bootstrapScript);
    
        // Load other scripts
        const ajaxMailScript = document.createElement('script');
        ajaxMailScript.src = 'assets/js/ajax-mail.js';
        ajaxMailScript.async = true;
        document.body.appendChild(ajaxMailScript);
    
        const pluginsScript = document.createElement('script');
        pluginsScript.src = 'assets/js/plugins.js';
        pluginsScript.async = true;
        document.body.appendChild(pluginsScript);
    
        const mainScript = document.createElement('script');
        mainScript.src = 'assets/js/main.js';
        mainScript.async = true;
        document.body.appendChild(mainScript);
    
        // Cleanup function
        return () => {
          document.body.removeChild(jqueryScript);
          document.body.removeChild(popperScript);
          document.body.removeChild(bootstrapScript);
          document.body.removeChild(ajaxMailScript);
          document.body.removeChild(pluginsScript);
          document.body.removeChild(mainScript);
        };
      }, []);

    return (
        <>
            <div className="pos_page">
                <div className="container">
                    {/*pos page inner*/}
                    <div className="pos_page_inner">

                        {/*header area */}
                        <Header />
                        {/*header end */}

                        {/*pos home section*/}
                        <Outlet />
                        {/*pos home section end*/}

                    </div>
                    {/*pos page inner end*/}
                </div>
            </div>

            <Copyright />

            <Link
                id="scrollUp"
                href="#top"
                style={{ position: "fixed", zIndex: 2147483647, display: "none" }}
            >
                <i className="fa fa-angle-double-up" />
            </Link>
        </>

    );
}

export default LayoutSite;