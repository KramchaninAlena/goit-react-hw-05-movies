import { getSearchMovie } from "Api/Api";
import {  useCallback, useEffect, useRef, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom";
import css from './MoviePage.module.css'

 const MoviesPage = () => {
  const [searshMovie, setSearshMovie] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') ?? ''
  const location = useLocation()
  // console.log('locationMovie', location)

  const ref = useRef(query)
  const defultImages = 'https://fakeimg.pl/200x300?text=NO+IMAGE'

   const handleChange = ({target: { value }}) => {
    value ? setSearchParams({q : value}) : setSearchParams({})
    console.log(query)
   };
     
  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetchSearchMovie(query)
    evt.currentTarget.search.value = ''
    };
    
  const fetchSearchMovie = useCallback(async (searchText) => {
      try {
        const data = await getSearchMovie(searchText);
        setSearshMovie(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }, []);

useEffect(() => {
      ref.current && fetchSearchMovie(ref.current)
     }, [fetchSearchMovie]);

    return (
    <>
    <form onSubmit={handleSubmit} className={css.searchForm}>
			<div >
				<input
					name='search'
					type='text'
					// value={searchQuery}
          onChange={handleChange}
          className={css.input}
				/>
			</div>
			<button type='submit' className={css.searchFormButton}>
				Search
			</button>
      </form>
      <div className={css.container}>
        <ul className={css.list}>
        {searshMovie.length ? (
    searshMovie.map(({ id, poster_path, title, release_date }) => (
      <li key={id} className={css.item}>
        <Link to={`${id}`} state={{ from: location }} className={css.link}>
          <div>
            <div>
              <img src={poster_path ? `https://image.tmdb.org/t/p/w200/${poster_path}` : defultImages} alt="poster" />
            </div>
            <h3 className={css.title}>{release_date ? `${title} (${new Date(release_date).getFullYear()})` : title}</h3>
            <p></p>
          </div>
        </Link>
      </li>
    ))
  ) : (
    <p className={css.text}>Not found</p>
  )}
        </ul>
      </div>
		
    </>
  )
}
export default MoviesPage;  