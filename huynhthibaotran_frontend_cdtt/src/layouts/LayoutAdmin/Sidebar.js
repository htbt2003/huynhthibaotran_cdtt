import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';
import { AiFillHome } from "react-icons/ai";
import { MdFormatListBulletedAdd, MdFormatListBulleted  } from "react-icons/md";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
function Sidebar () {
  const [state, setState] = useState({
    SanPham: false,
    BaiViet: false,
    QLBH: false,
    QLNH: false,
    chartsMenuOpen: false,
    GiaoDien: false,
    HeThong: false,
  });  
  const toggleMenuState = (menuState) => {
    if (state[menuState]) {
      setState({[menuState] : false});
    } else if(Object.keys(state).length === 0) {
      setState({[menuState] : true});
    } else {
      Object.keys(state).forEach(i => {
        setState({[i]: false});
      });
      setState({[menuState] : true});
    }  
  };
// console.log(state)
  const onRouteChanged = () => {
    document.querySelector('#sidebarbar').classList.remove('active');
    Object.keys(state).forEach(i => {
      setState(prevState => ({ ...prevState, [i]: false }));
    });
  };

  useEffect(() => {
    onRouteChanged();
    // add class 'hover-open' to sidebarbar navitem while hover in sidebarbar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebarbar .nav-item').forEach((el) => {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebarbar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebarbar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }, []);
    return (
      <nav className="sidebarbar sidebarbar-offcanvas" id="sidebarbar">
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="!#" className="nav-link" onClick={evt =>evt.preventDefault()}>
              <div className="nav-profile-image">
                {/* <img src={ require("../../assets/images/faces/face1.jpg") } alt="profile" /> */}
                <span className="login-status online"></span> {/* change to offline or busy as needed */}
              </div>
              <div className="nav-profile-text">
                <span className="font-weight-bold mb-2"><Trans>David Grey. H</Trans></span>
                <span className="text-secondary text-small"><Trans>Project Manager</Trans></span>
              </div>
              <BsBookmarkCheckFill color="#1bcfb4"/>
            </a>
          </li>
          {/* <li className='nav-item'>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-title"><Trans>Dashboard</Trans></span>
              <MdFormatListBulleted />
            </Link>
          </li> */}
          <li className='nav-item'>
            <div className={ state.SanPham ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('SanPham') } data-toggle="collapse">
              <span className="menu-title"><Trans>Sản phẩm</Trans></span>              
              <MdFormatListBulletedAdd />
            </div>
            <Collapse in={ state.SanPham }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className='nav-link' to="/admin/product"><GoArrowRight /><Trans>Tất cả sản phẩm</Trans></Link></li>
                <li className="nav-item"> <Link className='nav-link' to="/admin/productstore"><GoArrowRight /><Trans>Kho hàng</Trans></Link></li>
                <li className="nav-item"> <Link className='nav-link' to="/admin/category"><GoArrowRight /><Trans>Danh mục</Trans></Link></li>
                <li className="nav-item"> <Link className='nav-link' to="/admin/brand"><GoArrowRight /><Trans>Thương hiệu</Trans></Link></li>
                <li className="nav-item"> <Link className='nav-link' to="/admin/productsale"><GoArrowRight /><Trans>Khuyến mãi</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className='nav-item'>
            <div className={ state.BaiViet ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('BaiViet') } data-toggle="collapse">
              <span className="menu-title"><Trans>Bài viết</Trans></span>              
              <MdFormatListBulletedAdd />
            </div>
            <Collapse in={ state.BaiViet }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className='nav-link' to="/admin/post"><GoArrowRight /><Trans>Tất cả bài viết</Trans></Link></li>
                <li className="nav-item"> <Link className='nav-link' to="/admin/topic"><GoArrowRight /><Trans>Chủ đề</Trans></Link></li>
                <li className="nav-item"> <Link className='nav-link' to="/admin/page"><GoArrowRight /><Trans>Trang đơn</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className='nav-item'>
            <div className={ state.QLBH ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('QLBH') } data-toggle="collapse">
              <span className="menu-title"><Trans>Quản lý bán hàng</Trans></span>              
              <MdFormatListBulletedAdd />
            </div>
            <Collapse in={ state.QLBH }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className='nav-link' to="/admin/order"><GoArrowRight /><Trans>Tất cả đơn hàng</Trans></Link></li>
                <li className="nav-item"> <Link className='nav-link' to="/admin/delivery"><GoArrowRight /><Trans>Xuất hàng</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className='nav-item'>
            <Link className="nav-link" to="/admin/customer">
              <span className="menu-title"><Trans>Khách hàng</Trans></span>
              <MdFormatListBulleted />
            </Link>
          </li>
          <li className='nav-item'>
            <Link className="nav-link" to="/admin/contact">
              <span className="menu-title"><Trans>Liên hệ</Trans></span>
              <MdFormatListBulleted />
            </Link>
          </li>

          <li className='nav-item'>
            <div className={ state.GiaoDien ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('GiaoDien') } data-toggle="collapse">
              <span className="menu-title"><Trans>Giao diện</Trans></span>              
              <MdFormatListBulletedAdd />
            </div>
            <Collapse in={ state.GiaoDien }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className='nav-link' to="/admin/menu"><GoArrowRight /><Trans>Menu</Trans></Link></li>
                <li className="nav-item"> <Link className='nav-link' to="/admin/banner"><GoArrowRight /><Trans>Banner</Trans></Link></li>
              </ul>
            </Collapse>
          </li>
          <li className='nav-item'>
            <div className={ state.HeThong ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => toggleMenuState('HeThong') } data-toggle="collapse">
              <span className="menu-title"><Trans>Hệ thống</Trans></span>              
              <MdFormatListBulletedAdd />
            </div>
            <Collapse in={ state.HeThong }>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className='nav-link' to="/admin/user"><GoArrowRight /><Trans>Thành viên</Trans></Link></li>
                <li className="nav-item"> <Link className='nav-link' to="/admin/config"><GoArrowRight /><Trans>Cấu hình</Trans></Link></li>
              </ul>
            </Collapse>
          </li>

        </ul>
      </nav>
    );

  // isPathActive(path) {
  //   return props.location.pathname.startsWith(path);
  // }

  function componentDidMount() {
    onRouteChanged();
    // add class 'hover-open' to sidebarbar navitem while hover in sidebarbar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebarbar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebarbar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebarbar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default Sidebar;