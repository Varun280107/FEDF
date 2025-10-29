import { useState } from 'react'
import './App.css'

function RatingSelect({ rating, onRatingChange }) {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          type="button"
          className={`rating-btn ${value <= rating ? 'active' : ''}`}
          onClick={() => onRatingChange(value)}
        >
          ★
        </button>
      ))}
    </div>
  )
}

function App() {
  const [feedback, setFeedback] = useState([])
  const [feedbackText, setFeedbackText] = useState('')
  const [rating, setRating] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (feedbackText.trim().length > 0 && rating > 0) {
      const newFeedback = {
        id: Date.now(),
        text: feedbackText,
        rating: rating
      }
      setFeedback([...feedback, newFeedback])
      setFeedbackText('')
      setRating(0)
    }
  }

  return (
    <div className="container">
      <h1>Feedback App</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            placeholder="Enter your feedback"
          />
          <RatingSelect rating={rating} onRatingChange={setRating} />
          <button type="submit" disabled={!rating || !feedbackText.trim()}>Submit</button>
        </div>
      </form>
      <div className="feedback-list">
        {feedback.map((item) => (
          <div key={item.id} className="feedback-item">
            <div className="feedback-rating">
              {[...Array(item.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
