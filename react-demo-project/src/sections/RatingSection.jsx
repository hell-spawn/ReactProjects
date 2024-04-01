import { useState } from 'react'
import StarRating from "../components/star-rating/StarRating"


const RatingSection = () => {
  
  const [rate, setRate] = useState(0);


  return (
    <>
      <h1>Rating Section</h1>
      <StarRating count={10} rate={rate} color="#f6ff38" onRating={setRate} />
      <p>Rating {rate} </p>
    </>
  );
}

export default RatingSection
