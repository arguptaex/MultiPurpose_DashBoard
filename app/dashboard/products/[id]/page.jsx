import styles from "@/components/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <section className="singleProduct-section">
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src="/avatar.png" alt="" fill />
          </div>
          Archit Gupta
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <label>Title</label>
            <input type="text" name="title" placeholder="Archit gupta" />
            <label>Price</label>
            <input type="number" name="price" placeholder={55} />
            <label>Stock</label>
            <input type="number" name="stock" placeholder={23} />
            <label>Color</label>
            <input type="text" name="color" placeholder="blue" />
            <label>Size</label>
            <input type="text" name="size" placeholder="+India" />

            <label>Category</label>
            <select name="cat" id="cat">
              <option value="kitchen">Kitchen</option>
              <option value="computers">Computers</option>
            </select>
            <label>Description</label>
            <textarea
              name="desc"
              id="desc"
              rows={10}
              placeholder="Description"
            ></textarea>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
