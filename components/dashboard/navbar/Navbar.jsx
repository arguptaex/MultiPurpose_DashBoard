
"use client"
import { usePathname } from 'next/navigation';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

import './navbar.css';


const Navbar = () => {

  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-title">
          {pathname.split("/").pop()}
          </div>
        <div className="nav-menu">
          <div className="nav-search">
            <MdSearch />
            <input type="text" placeholder="Search..." className="search-input" />

          </div>
          <div className="icons">
            <MdOutlineChat size={20}/>
            <MdNotifications size={20}/>
            <MdPublic size={20}/>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar