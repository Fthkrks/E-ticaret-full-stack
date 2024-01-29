import "./CategoriesItem.css"
import PropTypes from "prop-types";

const CategoriesItem = ({category}) => {
  return (
    <li className="category-item">
    <a href="#">
      <img
        src={category.img}
        alt=""
        className="category-image"
      />
      <span className="category-title">{category.name}</span>
    </a>
  </li>
  )
}

export default CategoriesItem



CategoriesItem.propTypes ={
  category: PropTypes.object,
  


}