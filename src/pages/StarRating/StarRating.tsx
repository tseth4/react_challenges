import React from 'react'
import clsx from 'clsx';
import styles from "./StarRating.module.scss"

interface StarRatingProps {
  maxStars: number;
  filledStars: number;
  onClick: (index: number) => void;
}

interface StarProps {
  isFilled: boolean;
  onClick: () => void;
}

const Star: React.FC<StarProps> = ({ isFilled, onClick }) => {
  return (
    <>
      <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(styles.star_rating__icon, {
          [styles.star_rating__icon__filled]: isFilled,
        })} fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    </>
  )
}

const StarRating: React.FC<StarRatingProps> = ({ maxStars, filledStars, onClick }) => {
  return (
    <div className={styles.star_rating}>
      {Array.from({ length: maxStars }, (_, i) => (
        <div key={i}>
          <Star onClick={() => onClick(i + 1)} isFilled={i < filledStars} />
        </div>
      ))}

    </div>
  );
}

export default StarRating;