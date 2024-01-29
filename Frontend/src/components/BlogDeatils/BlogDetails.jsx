
import Reviews from "../Reviews/Reviews"
import "./BlogDetails.css"
const BlogDetails = () => {
  return (
    <>
        <section className="single-blog">
    <div className="container">
        <article>
            <figure>
                <a href="">
                    <img src="/img/blogs/blog1.jpg" alt=""/>
                </a>
            </figure>
            <div className="blog-wrapper">
                <div className="blog-meta">
                    <div className="blog-categorie">
                        <a href="#">
                            COLLECTION
                        </a>
                    </div>
                    <div className="blog-date">
                        February 6, 2023
                    </div>
                   <div className="blog-tags">
                    <a href="#">Products</a>,
                    <a href="#">coats</a>
                   </div>
                </div>
                <h1 className="blog-title">
                    The Best Products That Shape Fashion
                </h1>
                <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quia? Debitis a et animi deserunt, 
                        doloremque consequuntur 
                        temporibus explicabo sunt quia voluptatem 
                        cumque eius iure impedit, dicta ipsa magnam totam.</p>

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique officia cum ad, 
                        fuga eveniet quibusdam iste veritatis dicta ab, delectus nobis minus porro v
                        oluptatum. Debitis ullam voluptate quasi ratione molestias?</p>

                    <blockquote>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </blockquote>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolorum tenetur veniam nostrum
                         ducimus voluptas architecto maiores, alias numquam, velit iusto 
                         totam tempora cum distinctio aliquam neque corrupti odit. Ipsa.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque dolorum tenetur veniam nostrum
                        ducimus voluptas architecto maiores, alias numquam, velit iusto 
                        totam tempora cum distinctio aliquam neque corrupti odit. Ipsa.</p>
                </div>
            </div>
            
        </article>
        <Reviews/>

    </div>
</section>
    </>
  )
}

export default BlogDetails