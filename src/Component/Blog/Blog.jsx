import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleToAddTime}) => {
    // console.log(blog)
    const {title,cover_img, author_img, reading_time,hashtags, author_name, date, id} = blog
 
    

    return (
        <div>
            <img className='rounded-md' src={cover_img} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center my-5'>
                <div className='flex items-center gap-2'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h4 className='text-2xl font-bold'>{author_name}</h4>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <span>{reading_time} min</span>
                    <button onClick={() => handleAddToBookmark(blog)}  className='text-red-500'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold mb-4'>{title}</h1>
            <p>{hashtags}</p>
            <p onClick={() =>handleToAddTime(reading_time, id)} className='mb-14 mt-5 text-blue-700 font-semibold underline'>Mark as read</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleToAddTime: PropTypes.func
}
export default Blog;