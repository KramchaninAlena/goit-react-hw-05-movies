import { getReviewsMovie } from "Api/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './Reviews.module.css'

 const Reviews = () => {
    const {movieId} = useParams()
    const [reviewMovie, setReviewMovie] = useState([])
     
    useEffect(() => {
        const fetchCreditsMovies = async () => {
          try {
            const data = await getReviewsMovie(movieId);
            setReviewMovie(data);
            // console.log(reviewMovie);
        } catch (error) {
            console.error(error); 
        }
    };
    
    fetchCreditsMovies();
}, [movieId]);

  return (

    <div>
        <ul className={css.list}>
            {reviewMovie.length ? reviewMovie.map(({author, content, id}) => (
                <li key={id}>
                    <h3>Author: {author}</h3>
                    <p>{content}</p>
                </li>
            )) : <p>We don`t have any reviews for this movie.</p>}
        </ul>
    </div>
  )
}
export default Reviews;