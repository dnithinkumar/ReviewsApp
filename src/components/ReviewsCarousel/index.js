// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  getReviewDetails = () => {
    const {reviewsList} = this.props
    const {index} = this.state
    return reviewsList[index]
  }

  onClickLeftArrow = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onClickRightArrow = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const rewiewDetails = this.getReviewDetails()
    const {imgUrl, username, companyName, description} = rewiewDetails

    return (
      <div className="review-bg-container">
        <div className="review-container">
          <h1 className="review-heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="profile-image" />
          <div className="controls-container">
            <button
              className="arrow-btn"
              data-testid="leftArrow"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
              />
            </button>
            <p className="username">{username}</p>
            <button
              className="arrow-btn"
              data-testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
