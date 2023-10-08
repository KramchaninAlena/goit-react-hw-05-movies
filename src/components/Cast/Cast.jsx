import { getCreditsMovie } from "Api/Api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './Cast.module.css'

 const Cast = () => {
    const {movieId} = useParams()
    const [creditsMovie, setCreditsMovie] = useState([])
    const defultImages = 'https://fakeimg.pl/200x300?text=NO+IMAGE'
    useEffect(() => {
        const fetchCreditsMovies = async () => {
          try {
            const data = await getCreditsMovie(movieId);
            setCreditsMovie(data);
            // console.log(creditsMovie);
        } catch (error) {
            console.error(error); 
        }
    };
    
    fetchCreditsMovies();
}, [movieId]);

  return (
    
    <div className={css.container}>
<ul className={css.cast}>
    {creditsMovie.map(({ id, character, name, profile_path }) => (
        <li key={id}>
        <img src={profile_path ? `https://image.tmdb.org/t/p/w200/${profile_path}` : defultImages} alt="poster" />
        <h3>{name}</h3>
        <p>Character: {character}</p>
        </li>
    ))}
</ul>
    </div>
  )
}
export default Cast;