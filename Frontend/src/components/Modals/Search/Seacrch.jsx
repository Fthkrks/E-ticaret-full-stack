
import "./Search.css";
import PropTypes from "prop-types";
import { message } from "antd";
import { useState } from "react";

const Seacrch = ({ isSearch, setIsSearch }) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [searchResults, setSearchResults] = useState(null);



  const handleCloseModal = () =>{
    setIsSearch(false);
    searchResults(null)
  }


  const handleSearch = async(e) =>{
    e.preventDefault();
    const productName = e.target[0].value;


    if(productName.trim().length === 0){
      message.warning("cannot search with empty characters");
      return;
    }


    try {
      const res = await fetch(`${apiUrl}/api/products/search/${productName}`);

      if(!res.ok){
        message.warning("Product get error")
      }

      const data = await res.json();
      setSearchResults(data);


    } catch (error){
      console.log(error);

      
    }


  }



  return (
    <div className={`modal-search ${isSearch && "show"} `}>
      <div className="modal-wrapper">
        <i className="bi bi-x-circle" id="close-modal-search" onClick={handleCloseModal}></i>
        <h3 className="modal-title">Search For Products</h3>
        <p className="modal-text">
          Start typing to see products you are looking for.
        </p>
        <form className="search-form" onSubmit={handleSearch}>
          <input type="text" placeholder="Search a product" />
          <button>
            <i className="bi bi-search"></i>
          </button>
        </form>
        <div className="search-results">
          <div className="search-heading">
            <h3>RESULTS FROM PRODUCT</h3>
          </div>
          <div className="results" style={{display: `${searchResults?.length === 0 || !searchResults ? "flex":"grid" }`}}>

            {!searchResults &&(
              <b className="result-item" style={{justifyContent: "center", width: "100%", fontSize: "15px"}}>
                Ürün Ara...
              </b>
            )}


            {searchResults?.length === 0 &&(
                  <a
                  href="#"
                  className="result-item"
                  style={{
                    justifyContent: "center",
                    width: "100%",
                    fontSize: "15px"
                  }}
                >
                  😔Aradığınız Ürün Bulunamadı😔
                </a>
              
            )}
            {searchResults?.map((resultsItem) =>(
              <a href="#" className="result-item" key={resultsItem._id}>
                          <img
                            src={resultsItem.img[0]}
                            alt="product"
                            className="search-thumb"
                          />
                          <div className="search-info">
                            <h4>{resultsItem.name}</h4>
                            <span className="search-sku">Search SKU:</span>
                            <span className="search-price">{parseInt(resultsItem.price.current).toFixed(2)}$</span>
                          </div>
              </a>
            ))}


          </div>
        </div>
      </div>
      <div className="modal-overlay" onClick={handleCloseModal}></div>
    </div>
  );
};

export default Seacrch;

Seacrch.propTypes = {
    isSearch: PropTypes.bool,
    setIsSearch: PropTypes.func

}
