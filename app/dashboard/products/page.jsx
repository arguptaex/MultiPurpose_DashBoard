import Image from "next/image";
import Link from "next/link";
import "@/components/dashboard/products/products.css";
import Search from "@/components/dashboard/search/search";
import Pagination from "@/components/dashboard/pagination/pagination";

const ProductsPage = async ({ searchParams }) => {
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
            <tr>
              <td>
                <div className="products-table-product">
                  <Image
                    src="/avatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className="product-table-productImage"
                  />
                  Archit Gupta
                </div>
              </td>
              <td>ag213@snu.edu.in</td>
              <td>25.06.2024</td>
              <td>Admin</td>
              <td>active</td>
              <td>
                <div className="product-table-buttons">
                  <Link href="/dashboard/products/test">
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

export default ProductsPage;
