import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

let Create = () => {

  
    const [Title , setTitle] = useState('')
    const [body , setBody] = useState('')
    const [author , setAuthor] = useState('')
    const [Pending , setPending] = useState(false)
    const History = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {Title, body, author};
        setPending(true)

        fetch('http://localhost:8000/blogs' , {
            method:'POST',
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setPending(false)
            History.go(-1);  /* wen u want to go back to previous page */
           /*  History.push('/'); */  /* wen u want to go to a certeain page */
        })
      
    }




     
    return <div className="create">
        <h2>ADD A NEW BLOG</h2>
        
        <form onSubmit={handleSubmit} >
            <label>Blog Title:</label>
            <input 
            type ="text"
            required
            value = {Title}
            onChange={ (e) => setTitle(e.target.value)}
            />

            <label>Blog Body:</label>
            <textarea
            required
            value = {body}
            onChange= { (e) => setBody(e.target.value)}
            >
            </textarea>

            <label>Blog Author:</label>
            <select
            value = {author}
            onChange={ (e) => setAuthor(e.target.value)}


            >
                <option value="Bilal">Bilal</option>
                <option value="Frank">Frank</option>
            </select>
            { !Pending && <button>Add Blog</button>}
            { Pending && <button disabled >Adding Blog .....</button>}

            
        </form>
       
        
    </div>
}

export default Create;