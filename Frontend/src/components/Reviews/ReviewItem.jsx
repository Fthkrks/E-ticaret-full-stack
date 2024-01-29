import PropTypes from "prop-types";




const ReviewItem = ({reviewItem}) => {

  const options = {year: "numeric", month: "long", day: "numeric"}
  const formattedDate = new Date(reviewItem.user.createdAt).toLocaleDateString("tr-TR", options);

  return (
    <li className="comment-item">
      <div className="comment-avatar">
        <img src={reviewItem.user.avatar} style={{width: "60px"}} alt="" />
      </div>
      <div className="comment-text">
        <ul className="comment-star">
          {Array.from({length: reviewItem.review.rating}, (_, index) =>{
            return(
              <li key={index}>
              <i className="bi bi-star"></i>
            </li>
            )

          })}


        </ul>
        <div className="comment-meta">
          <strong>{reviewItem.user.username}</strong>-<time>{formattedDate}</time>
        </div>
        <div className="comment-desc">
          <p>{reviewItem.review.text}</p>
        </div>
      </div>
    </li>
  );
};

export default ReviewItem;



ReviewItem.propTypes = {
  reviewItem: PropTypes.object
}
