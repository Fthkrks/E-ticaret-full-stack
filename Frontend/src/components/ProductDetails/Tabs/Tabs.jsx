import "./Tabs.css";
import Reviews from "../../Reviews/Reviews";
import { useState } from "react";
import PropTypes from "prop-types";




const Tabs = ({singleProduct, setSingleProduct}) => {
  const [activeTab, setActiveTab] = useState("info");

  const hanldeTabClick = (e, tab) =>{
    e.preventDefault();
    setActiveTab(tab)

  }

  return (
    <div className="single-tabs">
      <ul className="tab-list">
        <li>
          <a href="#" className={`tab-button ${activeTab === "desc" && "active"  }`} onClick={(e) =>{ hanldeTabClick(e, "desc")}}>
            Descriptions
          </a>
        </li>
        <li>
          <a href="#" className={`tab-button ${activeTab === "info" && "active"  }`} onClick={(e) =>{ hanldeTabClick(e, "info")}}>
            Additional Information
          </a>
        </li>
        <li>
          <a href="#" className={`tab-button ${activeTab === "reviews" && "active"  }`} onClick={(e) =>{ hanldeTabClick(e, "reviews")}}  >
            Reviews
          </a>
        </li>
      </ul>
      <div className="tab-panel">
        <div
          className={`tab-panel-desc content ${
            activeTab === "desc" && "active"
          }`}
          id="desc"
        >
          {singleProduct && (
               <div className="product-desc" dangerouslySetInnerHTML={{ __html: singleProduct.description }} />)}
          
        </div>
        <div
          className={`tab-panel-info content ${
            activeTab === "info" && "active"
          }`}
          id="info"
        >
          <h3>Additional Information</h3>
          <table>
            <tbody>
              <tr>
                <th>Color</th>
                <td>
                  <p>
                    Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink, Black,
                    White
                  </p>
                </td>
              </tr>
              <tr>
                <th>Size</th>
                <td>
                  <p>
                    {singleProduct.sizes.map((item, index) =>(
                      <span key={index}>{item.toUpperCase()}  {index < singleProduct.sizes.length -1 && ", "}</span>
                    ))}</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Reviews
          activeTab={activeTab === "reviews" ? "content active" : "content"}
          singleProduct={singleProduct}
          setSingleProduct = {setSingleProduct}
        />
      </div>
    </div>
  );
};

export default Tabs;


Tabs.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func
}