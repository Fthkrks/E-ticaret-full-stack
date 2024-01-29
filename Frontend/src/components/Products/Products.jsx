import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Slider from "react-slick";
import PropTypes from "prop-types";
import "./Products.css"



const NextBtn  = ({onClick}) =>{
  return(
    <button onClick={onClick} className="glide__arrow glide__arrow--right">
    <i className="bi bi-chevron-right"></i>
  </button>
  )

}


NextBtn.propTypes = {
  onClick: PropTypes.func
}

const PrevBtn = ({onClick}) =>{
  return (
    <button onClick={onClick} className="glide__arrow glide__arrow--left">
    <i className="bi bi-chevron-left"></i>
  </button>

  )

}


PrevBtn.propTypes = {
  onClick: PropTypes.func
}


const Products = () => {

  const [Products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL





  useEffect(() =>{
    const fetchProducts = async ()=>{
      try {
        const response = await fetch(`${apiUrl}/api/products`,);
  
        if(response.ok){
          const data = await response.json();
          setProducts(data)
  
  
        }
  
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchProducts();

  }, [apiUrl])





  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,

        }
      }
    ]
  }


  return (
    <section className="products">
      <div className="container">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Modern Design</p>
        </div>

        <div className="product-wrapper product-carousel">

              <Slider {...sliderSettings} >
              {Products.map((product) =>(
                <ProductItem product = {product} key={product._id}/>
              ))}
                
              </Slider>




        </div>
      </div>
    </section>
  );
};

export default Products;
