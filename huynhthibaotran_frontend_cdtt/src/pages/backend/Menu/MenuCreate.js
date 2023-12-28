import { Link, useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import MenuServices from '../../../services/MenuServices';
import MenuCategoryCreate from './MenuCategoryCreate';
import MenuBrandCreate from './MenuBrandCreate';
import MenuTopicCreate from './MenuTopicCreate';
import MenuPageCreate from './MenuPageCreate';

function MenuCreate() {
    const [position, setPosition] = useState("");
    return (
        <form method='post'>
            <div>
                <div className="">
                    <ul className="list-group">
                        <li className="list-group-item mb-2">
                            <select name="postion" className="form-control" value={position} onChange={(e)=> setPosition(e.target.value)}>
                                <option value="mainmenu">Main Menu</option>
                                <option value="footermenu">Footer Menu</option>
                            </select>
                        </li>
                        <MenuCategoryCreate position={position}/>
                        <MenuBrandCreate position={position}/>
                        <MenuTopicCreate position={position}/>
                        <MenuPageCreate position={position}/>
                        <li className="list-group-item mb-2 border nav-item">
                            <a
                                className="nav-link menu-expanded"
                                href="#multiCollapseLink"
                                data-toggle="collapse"
                            //aria-expanded="false"
                            >
                               Tùy biến liên kết
                            </a>
                            <div
                                className="multi-collapse border-top mt-2 collapse"
                                id="multiCollapseLink"
                            >
                                <div className="mb-3">
                                    <label>Tên menu</label>
                                    <input type="text" name="name" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label>Liên kết</label>
                                    <input type="text" name="link" className="form-control" />
                                </div>

                                <div className="my-3">
                                    <button
                                        name="ADDCATEGORY"
                                        type="submit"
                                        className="btn btn-sm btn-success form-control"
                                    >
                                        Thêm
                                    </button>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>



            </div>
        </form>
    );
}

export default MenuCreate;