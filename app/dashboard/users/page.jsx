// import React from 'react'
import Pagination from "@/components/dashboard/pagination/pagination";
import Search from "@/components/dashboard/search/search";
import "@/components/dashboard/users/users.css";
import Image from "next/image";
import Link from "next/link";
const UsersPage = () => {
  return (
    <section className="users-section">
      <div className="container">
        <div className="top">
          <Search placeholder="Search for a User..." />
          <Link href="/dashboard/users/add">
            <button className="addButton">Add New</button>
          </Link>
        </div>
        <table className="users-table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="users-table-user">
                  <Image
                    src="/avatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className="user-table-userImage"
                  />
                  Archit Gupta
                </div>
              </td>
              <td>ag213@snu.edu.in</td>
              <td>25.06.2024</td>
              <td>Admin</td>
              <td>active</td>
              <td>
                <div className="user-table-buttons">
                  <Link href="/dashboard/users/test">
                    <button className="button view-btn">View</button>
                  </Link>
                  <button className="button delete-btn">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </section>
  );
};

export default UsersPage;
