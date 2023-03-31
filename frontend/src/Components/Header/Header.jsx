import React ,{useContext}from 'react'
import { Container ,Button,Row} from 'react-bootstrap'
import { Link, NavLink ,useNavigate} from "react-router-dom";
import './Header.css'
import { AuthContext } from '../../context/AuthContext';

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "#",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];
const Header = () => {
  const navigate = useNavigate()
  const {user, dispatch} = useContext(AuthContext)

  const logout = ()=>{
    dispatch({type:'LOGOUT'})
    navigate('/')
  }
  
  return (
    // <div>
    //   <Container>
    //     <Row>
    //       <div className="nav_wrapper d-flex align-items-center justify-content-between">
    //         <div className="logo">{/* <img src= { logo} alt='' /> */}</div>
    //         <div className="navigation">
    //           <ul className="menu d-flex align-items-center gap-5">
    //             {nav_links.map((item, index) => (
    //               <li className="nav_item" key={index}>
    //                 <NavLink
    //                   to={item.path}
    //                   className={(navClass) =>
    //                     navClass.isActive ? "active__link" : ""
    //                   }
    //                 >
    //                   {item.display}
    //                 </NavLink>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>
    //         {/* Buttons */}
    //         <div className="nav_right d-flex align-items-center gap-4">
    //           <div className="nav_btns d-flex align-items-center gap-4">
    //             <Button className="btn secondary__btn">
    //               <Link to="/login">Login</Link>
    //             </Button>
    //             <Button className="btn primary__btn">
    //               <Link to="/register">Register</Link>
    //             </Button>
    //           </div>
    //           <span className="mobile_menu">
    //             <i class="ri-menu-line"></i>
    //           </span>
    //         </div>
    //       </div>
    //     </Row>
    //   </Container>
    // </div>
    <div>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">{/* <img src= { logo} alt='' /> */}</div>
            <div className="navigation">
              <div className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <div className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active__link" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                {user ? (
                  <>
                    <h5 className="mb-0">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn btn-white">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn btn-baby-blue">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
              <span className="mobile_menu">
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Header