// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link-style">
      <div className="blog-item-container">
        <img src={imageUrl} alt={title} className="blog-image" />
        <div className="blog-content-container">
          <p className="blog-title">{topic}</p>
          <h1 className="blog-topic">{title}</h1>
          <div className="avatar-author-box">
            <img
              src={avatarUrl}
              alt={`avatatUrl${id}`}
              className="avatar-image"
            />
            <p className="blog-title">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
