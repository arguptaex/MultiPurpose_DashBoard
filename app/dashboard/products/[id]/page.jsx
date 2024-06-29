import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import { Product } from "@/app/lib/models/models";
import styles from "@/components/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  // console.log(product.category);
  return (
    <section className="singleProduct-section">
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src="/avatar.png" alt="" fill />
          </div>
          {product.title}
        </div>
        <div className={styles.formContainer}>
          <form action={updateProduct} className={styles.form}>
            <input type="hidden" name="id" value={product.id} />
            <label>Title</label>
            <input type="text" name="title" placeholder={product.title} />
            <label>Price</label>
            <input type="number" name="price" placeholder={product.price} />
            <label>Stock</label>
            <input type="number" name="stock" placeholder={product.stock} />
            <label>Color</label>
            <input type="text" name="color" placeholder={product.color} />
            <label>Size</label>
            <input type="text" name="size" placeholder="+India" />
            <label>Category</label>
            <select name="category" id="category">
              <option value="phone" selected={product.category === "general"}>
                No Category
              </option>

              <option value="kitchen" selected={product.category === "kitchen"}>
                Kitchen
              </option>
              <option value="phone" selected={product.category === "phone"}>
                Phone
              </option>
              <option
                value="computer"
                selected={product.category === "computer"}
              >
                Computers
              </option>
            </select>
            <label>Description</label>
            <textarea
              name="desc"
              id="desc"
              rows={10}
              placeholder={product.desc}
            ></textarea>
            '<button>Update</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
