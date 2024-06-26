import styles from "@/components/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <section className="singleUser-section">
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src="/avatar.png" alt="" fill />
          </div>
          Archit Gupta
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <label>Username</label>
            <input type="text" name="username" placeholder="Archit gupta" />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Architgupta@gmail.com"
            />
            <label>Password</label>
            <input type="password" name="password" placeholder="Archit gupta" />
            <label>Phone</label>
            <input type="text" name="phone" placeholder="+1213131" />
            <label>Address</label>
            <input type="text" name="address" placeholder="+India" />

            <label>Is Admin?</label>
            <select name="isAdmin" id="isAdmin">
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
            <label>Is Active?</label>
            <select name="isActive" id="isActive">
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SingleUserPage;
