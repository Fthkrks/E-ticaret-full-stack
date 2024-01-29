import "./Policy.css";

const Policy = () => {
  return (
    <section className="policy">
    <div className="container">
      <ul className="policy-list">
        <li className="policy-item">
          <i className="bi bi-truck"></i>
          <div className="policy-text">
            <strong>FREE DELIVERY</strong>
            <br/>
            <span>From $49.99</span>
          </div>
        </li>
          
        <li>
          <i className="bi bi-headphones"></i>
          <div className="policy-text">
            <strong>SUPPORT 24 / 7</strong>
            <br/>
            <span>Online 24 hours</span>
          </div>
        </li>
        <li>
          <i className="bi bi-arrow-clockwise"></i>
          <div className="policy-text">
            <strong>30 DAYS RETURN</strong>
            <br/>
            <span>Simply return if within 30 days</span>
          </div>
        </li>
        <li>
          <i className="bi bi-credit-card"></i>
          <div className="policy-text">
            <strong>PAYMENT METHOD</strong>
            <br/>
            <span>Secture Payment</span>
          </div>
        </li>

        
      </ul>
    </div>
  </section>
  )
}

export default Policy