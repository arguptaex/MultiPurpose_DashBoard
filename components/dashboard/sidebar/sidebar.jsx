import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import "./sidebar.css";

import avatar from "@/assets/avatar.png";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <section className="sidebar-section">
      <div className="container">
        <div className="user">
          <Image
            className="userImage"
            src={avatar}
            alt=""
            width="50"
            height="50"
          />
          <div className="userDetail">
            <span className="username">Archit Gupta</span>
            <span className="userTitle">Admin</span>
          </div>
        </div>

        <ul className="list">
          {menuItems.map((cat) => (
            <li key={cat.title}>
              <span className="cat">
                {cat.title}
                {cat.list.map((item) => (
                  <MenuLink item={item} key={item.title} />
                ))}
              </span>
            </li>
          ))}
        </ul>

        <button className="logout-btn">
          <MdLogout />
          Logout
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
