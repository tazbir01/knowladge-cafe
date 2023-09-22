import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark =(blog)=>{
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  const handleToAddTime = (time, id) =>{
    // console.log('adding soon time', time)
    setReadingTime(readingTime + time)

    const remainingBookmarks = bookmarks.filter(bookmarks => bookmarks.id !== id)
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='flex max-w-6xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleToAddTime={handleToAddTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
