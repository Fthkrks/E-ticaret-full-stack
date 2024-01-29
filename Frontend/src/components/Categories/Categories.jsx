import { useEffect, useState } from "react"
import "./Categories.css"
import CategoriesItem from "./CategoriesItem"


const Categories = () => {

  const [categories, setCategories] = useState([])
  const apiUrl = import.meta.env.VITE_API_BASE_URL





  useEffect(() =>{
    const fetchCategory = async ()=>{
      try {
        const response = await fetch(`${apiUrl}/api/categories`,);
  
        if(response.ok){
          const data = await response.json();
          setCategories(data)
  
  
        }
  
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchCategory();

  }, [apiUrl])

  return (
    <section className="categories">
    <div className="container">
      <div className="section-title">
        <h2>All Categories</h2>
        <p>Summer Collection New Mordern Design</p>
      </div>
      <ul className="category-list">
        {categories.map((category) =>(
          <CategoriesItem key={category._id} category={category}/>
        ))}
      </ul>
    </div>
  </section>
  )
}

export default Categories