import { useHistory ,  useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

let BlogDetails = () => {
  
    const {id} = useParams()
    const {data: blog, isLoading , error}  = UseFetch('http://localhost:8000/blogs/' + id);
    const History = useHistory();
    

    const HandleDelete = () => {

        fetch('http://localhost:8000/blogs/' + blog.id , {
            method: 'DELETE'
        } ).then(() => {
           History.go(-1);
        })
    }
   

    
    return <div className="blog-details" >
  

   {isLoading && <div> loading...  </div>}
   {error && <div>{error}</div>}
   {blog && (
       <article>
           <h2>{blog.title}</h2>
           <p>wriiten by {blog.author}</p>
           <div>{blog.body} </div>
           <button onClick = {HandleDelete}  >Delete</button>
       </article>

       
   )}
    </div>
}


export default BlogDetails;