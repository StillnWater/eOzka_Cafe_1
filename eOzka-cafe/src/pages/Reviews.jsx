import React, { useState, useEffect } from 'react'
import StarRating from '../components/StarRating'

const DEFAULT_REVIEWS = [
  { name: 'Sarah Miller', rating: 5, date: 'June 1, 2026', text: 'The coziest cafe I have ever visited! The cappuccino is divine, and the pastries are baked fresh every single morning.' },
  { name: 'James Carter', rating: 5, date: 'May 28, 2026', text: 'eOzka is my absolute favorite spot to read or work. Super fast internet, beautiful music, and the staff is wonderful.' },
  { name: 'Elena Rostova', rating: 4, date: 'May 15, 2026', text: 'Loved the rose petal latte and the almond cake. The atmosphere is top-tier. Will definitely come back!' }
]

const Reviews = ({ triggerToast }) => {
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('eozka_reviews')
    return saved ? JSON.parse(saved) : DEFAULT_REVIEWS
  })

  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    text: ''
  })

  useEffect(() => {
    localStorage.setItem('eozka_reviews', JSON.stringify(reviews))
  }, [reviews])

  const handleReviewSubmit = (e) => {
    e.preventDefault()
    if (!reviewForm.name || !reviewForm.text) {
      alert('Please fill out your name and review.')
      return
    }
    if (reviewForm.text.length < 10) {
      alert('Review must be at least 10 characters long.')
      return
    }
    const newReview = {
      name: reviewForm.name,
      rating: reviewForm.rating,
      text: reviewForm.text,
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      id: Date.now()
    }
    setReviews(prev => [newReview, ...prev])
    setReviewForm({ name: '', rating: 5, text: '' })
    triggerToast('Review submitted successfully! Thank you.')
  }

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0

  return (
    <div className="page-container container tab-content">
      <div className="section-header">
        <h1 className="section-title">Guest Reviews</h1>
        <p className="section-desc">Read feedback from our coffee lovers and tell us about your experience.</p>
      </div>

      <div className="reviews-grid">
        {/* Write Review & Summary */}
        <div>
          <div className="reviews-summary-box">
            <h3>Overall Rating</h3>
            <div className="avg-rating-text">{averageRating}</div>
            <div className="avg-stars-container">
              <StarRating value={Math.round(Number(averageRating))} readonly />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>based on {reviews.length} reviews</p>
          </div>

          <div className="booking-form-box" style={{ padding: '30px' }}>
            <h3 style={{ marginBottom: '20px', fontSize: '1.4rem' }}>Write a Review</h3>
            <form onSubmit={handleReviewSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={reviewForm.name} 
                  onChange={(e) => setReviewForm(prev => ({ ...prev, name: e.target.value }))} 
                  placeholder="Alice Parker" 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Rating</label>
                <StarRating 
                  value={reviewForm.rating} 
                  onChange={(rating) => setReviewForm(prev => ({ ...prev, rating }))} 
                />
              </div>
              <div className="form-group">
                <label>Review Text</label>
                <textarea 
                  className="form-control" 
                  value={reviewForm.text} 
                  onChange={(e) => setReviewForm(prev => ({ ...prev, text: e.target.value }))} 
                  placeholder="Write your review here (min 10 characters)..." 
                  rows={4} 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* Reviews List */}
        <div className="reviews-list-container">
          {reviews.map(r => (
            <div key={r.id || Math.random()} className="review-item-card">
              <div className="review-item-header">
                <div className="review-item-author-date">
                  <span className="review-item-author">{r.name}</span>
                  <span className="review-item-date">{r.date}</span>
                </div>
                <div className="review-stars">
                  {'★'.repeat(r.rating) + '☆'.repeat(5 - r.rating)}
                </div>
              </div>
              <p className="review-item-comment">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews