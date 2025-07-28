import React from 'react'
import StarRating from './StarRating';

interface IndexProps {

}

const Index: React.FC<IndexProps> = ({ }) => {
  return (
    <>
      <StarRating maxStars={5} filledStars={3}/>
    </>
  );
}

export default Index;