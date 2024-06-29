import Image from "next/image";
import Link from "next/link";
import "@/components/dashboard/products/products.css";
import Search from "@/components/dashboard/search/search";
import Pagination from "@/components/dashboard/pagination/pagination";
import { fetchProducts } from "@/app/lib/data";
import { deleteProduct } from "@/app/lib/actions";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.query || "";
  const page = searchParams?.page || 1;
  console.log("searchParams.query", searchParams.query, "q is :", q);

  const { count, products } = await fetchProducts(q, page);
  // console.log(" getting products", products);

  // const arr = products.map((product) => {
  // //   return product.title;
  // // });
  // console.log(arr);
  return (
    <section className="products-section">
      <div className="container">
        <div className="top">
          <Search placeholder="Search for a product..." />
          <Link href="/dashboard/products/add">
            <button className="addButton">Add New</button>
          </Link>
        </div>
        <table className="products-table">
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <div className="products-table-product">
                    <Image
                      src="/avatar.png"
                      alt=""
                      width={40}
                      height={40}
                      className="product-table-productImage"
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>{product.price}</td>
                <td>Admin</td>
                <td>{product.stock}</td>
                <td>
                  <div className="product-table-buttons">
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className="button view-btn">View</button>
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={product.id} />
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

export default ProductsPage;
