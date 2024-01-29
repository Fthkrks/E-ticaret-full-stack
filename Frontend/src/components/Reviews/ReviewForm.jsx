import { useState } from "react";
import PropTypes from "prop-types";
import { message } from "antd";

const ReviewForm = ({singleProduct, setSingleProduct}) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")): null
  const apiUrl = import.meta.env.VITE_API_BASE_URL;


  const handleRatingHandle = (e, newRating) =>{
    e.preventDefault();
    setRating(newRating);

  }

  const handleSubmit = async(e) => {
    e.preventDefault();


  const formData = {
      reviews:[
        ...singleProduct.reviews,
        {
          text: review,
          rating: parseInt(rating),
          user: user.id || user._id
        }
      ]
    }

    try {
      const res = await fetch(`${apiUrl}/api/products/${singleProduct._id}`, {
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if(!res.ok){
        message.error("Bir şeyler yanlış gitti");
        return;
      }

      const data = await res.json();
      setSingleProduct(data);
      setRating(0);
      setReview("");
      message.success("Yorum Başarıyla Eklendi")


    } catch (error) {
      console.log(error);
      message.error("Bir şeyler yanlış gitti")
    }
  };
  


  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <p className="comment-note required">
        Your email address will not be published. Required fields are marked
        <span>*</span>
      </p>
      <div className="comment-rating">
        <label>
          Your Rating
          <span className="required">*</span>
        </label>
        <div className="stars">
          <a href="#" className={`star ${rating === 1 && "active"}`} onClick={(e) =>handleRatingHandle(e, 1)}>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className={`star ${rating === 2 && "active"}`} onClick={(e) =>handleRatingHandle(e, 2)}>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className={`star ${rating === 3 && "active"}`} onClick={(e) =>handleRatingHandle(e, 3)}>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className={`star ${rating === 4 && "active"}`} onClick={(e) =>handleRatingHandle(e, 4)}>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
          <a href="#" className={`star ${rating === 5 && "active"}`} onClick={(e) =>handleRatingHandle(e, 5)}>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </a>
        </div>
      </div>
      <div className="comment-form-comment form-comment">
        <label htmlFor="comment">
          Your review
          <span className="required">*</span>
        </label>
        <textarea id="comment" cols="50" rows="10" value={review} onChange={(e) => setReview(e.target.value)}></textarea>
      </div>

      <div className="comment-form-cookies">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">
          Save my name, email and website in this browser for next time I
          comment
          <span className="required">*</span>
        </label>
      </div>
      <div className="form-submit">
        <input type="submit" className="btn btn-third" />
      </div>
    </form>
  );
};

export default ReviewForm;


ReviewForm.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func
}
