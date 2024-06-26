// import React from 'react'
import Image from "next/image";
import "./transactions.css";

const Transactions = () => {
  return (
    <section className="transactions-section">
      <div className="title">Latest Transactions</div>
      <table className="table">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="table-user">
                <Image
                  src="/avatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="userImage"
                />
                Archit Gupta
              </div>
            </td>
            <td>
              <span className={`pending status`}>Pending</span>
            </td>
            <td>25.06.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="table-user">
                <Image
                  src="/avatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="userImage"
                />
                Archit Gupta
              </div>
            </td>
            <td>
              <span className={`cancelled status`}>Cancelled</span>
            </td>
            <td>25.06.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="table-user">
                <Image
                  src="/avatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="userImage"
                />
                Archit Gupta
              </div>
            </td>
            <td>
              <span className={`done status`}>Done</span>
            </td>
            <td>25.06.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className="table-user">
                <Image
                  src="/avatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="userImage"
                />
                Archit Gupta
              </div>
            </td>
            <td>
              <span className={`pending status`}>Pending</span>
            </td>
            <td>25.06.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Transactions;
