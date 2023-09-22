import PropTypes from 'prop-types'; 

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className=' bg-white my-3 p-3 rounded-md'>
            <h2 className='text-lg font-semibold'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.array
}

export default Bookmark;