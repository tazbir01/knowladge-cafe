import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; 

const Blogs = ({handleAddToBookmark, handleToAddTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h3 className="text-xl">Blogs: {blogs.length}</h3>
            {
                blogs.map(blogs=><Blog
                     key={blogs.id}
                      blog={blogs}
                      handleAddToBookmark={handleAddToBookmark}
                      handleToAddTime={handleToAddTime}
                      ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleToAddTime: PropTypes.func
}

export default Blogs;