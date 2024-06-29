// import React from 'react'
import { addProduct } from "@/app/lib/actions";
import styles from "@/components/dashboard/products/addProduct/addProducts.module.css";
const AddProductPage = () => {
  return (
    <section className="add-product-section">
      <div className={styles.container}>
        <form action={addProduct} className={styles.form}>
          <input type="text" placeholder="title" name="title" required />
          <select name="category" id="category">
            <option value="general">Choose a category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <input type="number" placeholder="price" name="price" />
          <input type="number" placeholder="stock" name="stock" />
          <input type="text" placeholder="color" name="color" />
          <input type="text" placeholder="size" name="size" />
          <textarea
            name="desc"
            id="desc"
            cols={30}
            rows={16}
            placeholder="Description"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default AddProductPage;
