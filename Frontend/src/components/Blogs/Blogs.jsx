import BlogItem from "./BlogItem"
import "./Blogs.css"

const Blogs = () => {
  return (
    <section className="blogs">
    <div className="container">
      <div className="section-title">
        <h2>From Our Blogs</h2>
        <p>Summer Collection New Modern Design</p>
      </div>
      <div className="blog-wrappper">
        <ul className="blog-list">
            <BlogItem/>
            <BlogItem/>
            <BlogItem/>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Blogs