import Navbar from './components/Navbar'
import Home from './components/Home'
import React, { useEffect, useState } from 'react';
import UseFetch from './components/UseFetch'
import {BrowserRouter as Router , Route , Switch } from 'react-router-dom'
import Create from './components/Create'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/NotFound'

import './App.css';

function App() {

  
  const {data: blogs  , isLoading , error} = UseFetch('http://localhost:8000/blogs');



/* 
  const deleteHandler = (Id) => {
    
    const deletedBlog = blogs.filter(blog => blog.Id !== Id);

    setBlogs(deletedBlog);
  } */
   

 
  return (
    <Router>
    <div className="App">
      <Navbar/>
      

      <div className="content">
        {error && <div> {error} </div> }
        {isLoading &&  <div className="loading" > <h1>loading....</h1> </div>}

        <Switch>
          <Route exact path = "/" >
       { blogs && <Home  blogs = {blogs} /* deleteHandler = {deleteHandler} */ />} 
         </Route>

         <Route exact path = "/Create" >
            <Create/>
         </Route>
         <Route exact path = "/blogs/:id" >
            <BlogDetails/>
         </Route>
         <Route  path = "*" >
          <NotFound/>
         </Route>
       </Switch>
      
    </div>
    </div>
    
    

    </Router>
  );
}

export default App;
