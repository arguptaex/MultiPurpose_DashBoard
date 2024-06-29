// import React from 'react'
import { addUser } from "@/app/lib/actions";
import styles from "@/components/dashboard/users/addUser/addUsers.module.css";
const AddUserPage = () => {
  return (
    <section className="add-user-section">
      <div className={styles.container}>
        <form action={addUser} className={styles.form}>
          <input type="text" placeholder="username" name="username" required />
          <input type="email" placeholder="email" name="email" required />
          <input
            type="password"
            placeholder="password"
            name="password"
            required
          />
          <input type="phone" placeholder="phone" name="phone" />
          <select name="isAdmin" id="isAdmin">
            <option value={false}>is Admin?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select name="isActive" id="isActive">
            <option value={true}>is Active?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <textarea
            name="address"
            id="address"
            cols={30}
            rows={10}
            placeholder="Address"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default AddUserPage;
