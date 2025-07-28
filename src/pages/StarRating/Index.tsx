import React, { useState } from 'react'
import StarRating from './StarRating';

interface IndexProps {

}

const Index: React.FC<IndexProps> = ({ }) => {
  const [filledStars, setFilledStars] = useState(0)
  const handleMaxStars = (index: number) => {
    setFilledStars(index)
  }
  return (
    <>
      <StarRating onClick={handleMaxStars} maxStars={5} filledStars={filledStars} />
    </>
  );
}

export default Index;