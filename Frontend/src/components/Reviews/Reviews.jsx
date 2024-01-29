import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import PropTypes from "prop-types";
import "./Reviews.css";
import { useEffect, useState } from "react";
import { message } from "antd";

const Reviews = ({ æctiveTab, singleProduct, setSingleProduct }) => {
  const [users, setUsers] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const thisReview = [];




  useEffect(() => {
    const fetchUSers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users`);

        if (response.ok){
          const data = await response.json();
          setUsers(data);
        } else{
          message.error("Data get error");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUSers();
  }, [apiUrl]);




  singleProduct.reviews.forEach((review) =>{
    const matchinUsers = users?.filter((user) => user._id === review.user);

    matchinUsers.forEach((matchinUser) =>{
      thisReview.push({
        review: review,
        user: matchinUser
      });
    })
  })



  return (
    <div className={`tab-panel-reviews ${æctiveTab}`}>
      <h3>2 reviews for Basic Colored Sweatpants with Elastic Hems</h3>
      {singleProduct.reviews.length > 0 ? (
        <div className="comments">
          <ol className="comment-list">
            {thisReview.map((item, index) => (
              <ReviewItem key={index} reviewItem={item} />
            ))}
          </ol>
        </div>
      ) : (
        <h1>Hiç yorum yok </h1>
      )}

      <div className="review-form-wrapper">
        <h2>Add a review</h2>
        <ReviewForm
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />
      </div>
    </div>
  );
};




export default Reviews;

Reviews.propTypes = {
  æctiveTab: PropTypes.string,
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};
