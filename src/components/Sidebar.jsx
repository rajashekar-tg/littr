import React, { useState } from "react";
import Logo from "./Logo.png";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaSignOutAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    // {
    //     path:"/",
    //     name:"Dashboard",
    //     icon:<FaTh/>
    // },
    {
      path: "/pricing",
      name: "Pricing",
      icon: <FaUserAlt />,
    },
    // {
    //     path:"/analytics",
    //     name:"Analytics",
    //     icon:<FaRegChartBar/>
    // },
    // {
    //     path:"/comment",
    //     name:"Comment",
    //     icon:<FaCommentAlt/>
    // },
    // {
    //     path:"/product",
    //     name:"Product",
    //     icon:<FaShoppingBag/>
    // },
    // {
    //     path:"/productList",
    //     name:"Product List",
    //     icon:<FaThList/>
    // },
    {
      path: "/login",
      name: "Sign Out",
      icon: <FaSignOutAlt />,
    },
  ];

  return (
    <div style={{ marginLeft: "0px", display: "flex" }}>
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img
              width="100rem"
              style={{ marginLeft: "2rem", marginRight: "2rem" }}
              src={Logo}
              onClick={toggle}
              alt="Logo"
            />
          </h1>
          <div
            style={{
              marginLeft: isOpen ? "50px" : "0px",
              display: isOpen ? "none" : "block",
            }}
            className="bars"
          >
            <FaBars onClick={toggle} style={{ color: "black" }} />
          </div>
        </div>
        {menuItem.map(
          (item, index) => (
            console.log(item.path),
            (
              <NavLink
                to={item.path}
                key={index}
                className="link"
                activeclassName="active"
              >
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text text-dark"
                >
                  {item.name}
                </div>
              </NavLink>
            )
          )
        )}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
