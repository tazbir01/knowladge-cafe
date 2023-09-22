import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, readingTime }) => {
    // console.log(bookmarks)
    return (
        <div className="w-1/3">
            <div className="ml-5 bg-violet-100 border-violet-600 mt-6 rounded-md">
                <p className="text-2xl font-bold text-violet-500 text-center p-5">Spent time on read: {readingTime} Min</p>
            </div>
            <div className=" ml-5 bg-slate-300 p-4 mt-4 rounded-md">
                <h4 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h4>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>

    );
};

Bookmarks.propTypes = {
    bookmark: PropTypes.object,
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;