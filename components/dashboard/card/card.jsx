
import { MdSupervisedUserCircle } from "react-icons/md";
import './card.css';
const Card = () => {
  return (
    <section className="card-section">
      <div className="container">
        <MdSupervisedUserCircle size={24}/>
        <div className="texts">
          <span className="title">Total Users</span>
          <span className="number">10.273</span>
          <span className="detail">
            <span className="positive">12%</span> more than previous week</span>
        </div>
      </div>
    </section>
  )
}

export default Card