// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount = () => {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const modifiedData = {
      id: data.id,
      title: data.title,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      topic: data.topic,
      author: data.author,
      content: data.content,
    }

    this.setState({blogItemDetails: modifiedData, isLoading: false})
  }

  render() {
    const {blogItemDetails, isLoading} = this.state
    const {id, avatarUrl, imageUrl, title, author, content} = blogItemDetails

    return (
      <div className="blog-details-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#BBB0FF" height={50} width={50} />
        ) : (
          <>
            <h1 className="topic-heading">{title}</h1>
            <div className="avatar-section">
              <img
                src={avatarUrl}
                alt={`avatarUrl:${id}`}
                className="avatarUrl-blog-details-image "
              />
              <p className="author-name">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog-details-image " />
            <p className="blog-content">{content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
