import React, { Fragment } from "react"
import "./rating.scss"
import PropTypes from "prop-types"

const Rating = ({ data, color }) => {
  let { rating, numReviews } = data

  return (
    <Fragment>
      <div className="rating">
        <span>
          <i
            style={{ color }}
            className={
              rating >= 1
                ? "fas fa-star"
                : rating >= 0.5
                ? "fas fa-star-half-alt"
                : "far-fa-star"
            }
          />
        </span>
        <span>
          <i
            style={{ color }}
            className={
              rating >= 2
                ? "fas fa-star"
                : rating >= 1.5
                ? "fas fa-star-half-alt"
                : "far-fa-star"
            }
          />
        </span>
        <span>
          <i
            style={{ color }}
            className={
              rating >= 3
                ? "fas fa-star"
                : rating >= 2.5
                ? "fas fa-star-half-alt"
                : "far-fa-star"
            }
          />
        </span>
        <span>
          <i
            style={{ color }}
            className={
              rating >= 4
                ? "fas fa-star"
                : rating >= 3.5
                ? "fas fa-star-half-alt"
                : "far-fa-star"
            }
          />
        </span>
        <span>
          <i
            style={{ color }}
            className={
              rating >= 5
                ? "fas fa-star"
                : rating >= 4.5
                ? "fas fa-star-half-alt"
                : "far-fa-star"
            }
          />
        </span>{" "}
        <span className="review-item"> {`(${numReviews})`} </span>
      </div>
    </Fragment>
  )
}

Rating.defaultProps = {
  color: "#f8e825",
}

Rating.propTypes = {
  data: PropTypes.object.isRequired,
  color: PropTypes.string,
}

export default Rating
