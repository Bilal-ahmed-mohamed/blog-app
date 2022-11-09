import { Link } from "react-router-dom";

let Home = ({blogs , setBlogs}) => {




    return <div className="home" >

        <h1>ALL BLOGS</h1>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.Id}>
                
              <Link to = {`/blogs/${blog.id}`} >
              <h2>{blog.Title}</h2>
              </Link>
             
               
                          
                <span>  <i>written by {blog.author}</i> </span>
              
            </div>
        ) )}


    </div>
}

export default Home;