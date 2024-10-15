import React,{useRef,useEffect,useContext} from 'react';
import {Container,Row,Button} from 'reactstrap';
import { NavLink,Link,useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './header.css';
import { AuthContext } from '../../context/AuthContext';

const nav__link=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/content',
    display:'Content'
  },
  {
    path:'/tours',
    display:'Tours'
  }
];

const Header = () => {
  const headerRef=useRef(null);
  const menuRef = useRef(null);
  const navigate=useNavigate();
  const {user,dispatch}=useContext(AuthContext);

  const logout=()=>{
    dispatch({type:'LOGOUT'});
    navigate('/');
  }

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (headerRef.current) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          headerRef.current.classList?.add("sticky__header");
        } else {
          headerRef.current.classList?.remove("sticky__header");
        }
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className="header bg-dark">
      <Container>
        <Row>
          {/* Logo */}
          <div className='nav__wrapper d-flex align-items-center justify-content-between'>
            <div className='logo'>
              <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill="white"
                className="bi bi-binoculars-fill" viewBox="0 0 16 16">
                <path
                  d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5z" />
              </svg>
              <img src={logo} alt='' />
            </div>
          
            {/* menu */}
            <div className='navigation'  ref={menuRef} onClick={toggleMenu}>
              <ul className='menu d-flex align-items-center gap-5'>
                {
                  nav__link.map((item,index)=>(
                    <li className='nav__item' key={index}>
                      <NavLink to={item.path} className={navClass=>navClass.isActive?'active__link':''}>{item.display}</NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>  
            {/* menu end */}      
            <div className='nav__right d-flex align-items-center gap-4'>
              <div className='nav__btns d-flex align-items-center gap-4'>
                {
                  user ? (
                    <>
                      <h5 className="mb-0 text-white">{user.username}
                      </h5>
                      <Button className="btn primary__btn" onClick={logout}>
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button className='btn navt__btn'><Link to='/login'>Login</Link></Button>
                      <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button>
                    </>
                  )
                }
                
              </div>
              <span className="mobile__menu" onClick={toggleMenu}>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>

    </header>);
};

export default Header;