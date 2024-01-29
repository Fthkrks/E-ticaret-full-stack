import ProductItem from "../Products/ProductItem"
import ProductsData from "../../data.json"
import { useState } from "react";



const NewTrend = () => {

  const [Products] = useState(ProductsData);



  return (
    <section className="products">
    <div className="container">
      <div className="section-title">
        <h2>New Trend</h2>
        <p>Summer Collection New Modern Design</p>
      </div>

      <div className="product-wrapper product-carousel">
        <div className="glide__track">
          <ul className="product-list glide__slides" id="product-list">
            
          {Products.map((product) =>(
                <ProductItem product = {product} key={product.id}/>
              ))}

          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button className="glide__arrow glide__arrow--left">
            <i className="bi bi-chevron-left"></i>
          </button>
          <button className="glide__arrow glide__arrow--right">
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewTrend