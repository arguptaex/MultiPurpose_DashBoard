// import React from 'react'

import { deleteUser } from "@/app/lib/actions";
import { fetchUsers } from "@/app/lib/data";
import Pagination from "@/components/dashboard/pagination/pagination";
import Search from "@/components/dashboard/search/search";
import UserImage from "@/components/dashboard/users/userImage/userImage";
import "@/components/dashboard/users/users.css";
import Image from "next/image";
import Link from "next/link";

const UsersPage = async ({ searchParams }) => {
  const q = searchParams?.query || "";
  const page = searchParams?.page || 1;
  // console.log("searchParams.query", searchParams.query, "q is :", q);

  const { count, users } = await fetchUsers(q, page);
  // console.log("FETCHED USER: ", users);

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
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="users-table-user">
                    <Image
                      src="/avatar.png"
                      // onError={handleImgError}
                      alt="sadadada"
                      width={40}
                      height={40}
                      className="user-table-userImage"
                    />
                    {/* <UserImage userImage={user.img} /> */}
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>25.06.2024</td>
                <td>{user.isAdmin ? "Admin" : "User"}</td>
                <td>{user.isActive ? "Active" : "Inactive"}</td>
                <td>
                  <div className="user-table-buttons">
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className="button view-btn">View</button>
                    </Link>

                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={user.id} />
                      <button className="button delete-btn">Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination count={count} />
      </div>
    </section>
  );
};

export default UsersPage;
