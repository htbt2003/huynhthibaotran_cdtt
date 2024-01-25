import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuServices from '../../services/MenuServices';

function MenuItem(props) {
    const rowmenu = props.menu
    const [menuchilds, setMenuChilds] = useState([]);
  useEffect(function(){
    (async function(){
      
      const result = await MenuServices.getByParentId("mainmenu", rowmenu.id)
      setMenuChilds(result.menus)

    })();
  },[])
  if(menuchilds==null){
    return(
        <li>
            <Link to={rowmenu.link}>{rowmenu.name}</Link>
        </li>
    )
  }
  else{
    return (
        <>
        <li>
        <Link to={rowmenu.link}>{rowmenu.name}</Link>
        <div className="mega_menu jewelry">
          <div className="mega_items jewelry">
            <ul>
                {menuchilds.map(function(menu, index){
                    return (
                        <li>
                            <Link to={menu.link} key={index}>{menu.name}</Link>
                        </li>
                    );
                })}
            </ul>
          </div>
        </div>
      </li>

        {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle text-white" to={rowmenu.link}role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {rowmenu.name}
            </Link>
            <ul className="dropdown-menu">
                {menus.map(function(menu1, index){
                    return <li><Link className="dropdown-item" key={index} to={menu1.link}>{menu1.name}</Link></li>
                })}
            </ul>
        </li> */}

        </>
    );
  }
}

export default MenuItem;