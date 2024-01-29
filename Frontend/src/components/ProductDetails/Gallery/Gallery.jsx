import { useState } from "react";
import "./Gallery.css";
import Slider from "react-slick";
import PropTypes from "prop-types";






const PrevBtn = ({onClick}) =>{
  return (
    <button
    className="glide__arrow glide__arrow--left"
    data-glide-dir="<"
    onClick={onClick}
    style={{cursor: "pointer", zIndex: "2"}}
  >
    <i className="bi bi-chevron-left"></i>
  </button>

  )

}


PrevBtn.propTypes = {
  onClick: PropTypes.func
}



const NextBtn  = ({onClick}) =>{
  return(
      <button
      className="glide__arrow glide__arrow--right"
      data-glide-dir=">"
      onClick={onClick}
      style={{cursor: "pointer", zIndex: "2"}}
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  )

}


NextBtn.propTypes = {
  onClick: PropTypes.func
}



const Gallery = ({singleProduct}) => {
  const [activeImage, setActiveImg] = useState({
    img: singleProduct.img[0],
    imgIndex:0
  });


  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
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
    <div className="product-gallery">
      <div className="single-image-wrapper">
        <img src={`${activeImage.img}`} id="single-img" alt="product" />
      </div>
      <div className="product-thumb">
        <div className="glide__track" data-glide-el="track">
          <ol
            className="galery-thumbs glide__slides"
            style={{
              transition:
                "transform 0ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s; width: 615px; transform: translate3d(0px, 0px, 0px)",
            }}
          >
            <Slider {...sliderSettings}>
            {singleProduct.img.map((itemImg, index) => (
                  <li
                    className="glide__slide glide__slide--active"
                    key={index}
                    onClick={() => setActiveImg({
                      img: itemImg,
                      imgIndex: index
                    })}
                        >
                    <img
                      src={`${itemImg}`}
                      className=  {`img-fluid ${activeImage.imgIndex === index && "active"} `}
                      alt=""
                    />
                  </li>
            ))}
            </Slider>


          </ol>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          {/* <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <i className="bi bi-chevron-right"></i>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;


Gallery.propTypes = {
  singleProduct: PropTypes.object,
}