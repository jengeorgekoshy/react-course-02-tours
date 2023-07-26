import { useState } from 'react'

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false)

  const handleReadmore = () => {
    setReadmore(!readmore)
  }

  return (
    <article key={id} className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readmore ? info : `${info.substring(200)}...`}
          <button type="button" className="info-btn" onClick={handleReadmore}>
            {readmore ? 'Show less' : 'Read more'}
          </button>
        </p>
        <button
          type="button"
          className="delete-btn btn-block btn"
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  )
}
export default Tour
