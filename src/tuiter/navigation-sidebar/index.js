import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";  
import { FiHome, FiSearch, FiBell, FiMail, FiBookmark, FiList, FiUser, FiMoreHorizontal } from "react-icons/fi";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { pathname } = useLocation();
  const [ignore, tuiter, active] = pathname.split("/");
  const links = [
    { name: "home", icon: <FiHome /> },
    { name: "explore", icon: <FiSearch /> },
    { name: "notifications", icon: <FiBell /> },
    { name: "messages", icon: <FiMail /> },
    { name: "bookmarks", icon: <FiBookmark /> },
    { name: "lists", icon: <FiList /> },
    { name: "profile", icon: <FiUser /> },
    { name: "more", icon: <FiMoreHorizontal /> }
  ];
  return (
    <div className="list-group">
      {links.map(({ name, icon }) => 
        <Link to={`/tuiter/${name}`} className={`list-group-item text-capitalize ${active === name ? "active" : ""}`}>
          {icon} {name}
        </Link>
      )}
      {!currentUser && <Link className="list-group" to="/tuiter/login">   Login   </Link>}
     {!currentUser && <Link className="list-group" to="/tuiter/register">Register</Link>}
     { currentUser && <Link className="list-group" to="/tuiter/profile"> Profile </Link>}
    </div>
  );
};
export default NavigationSidebar;
