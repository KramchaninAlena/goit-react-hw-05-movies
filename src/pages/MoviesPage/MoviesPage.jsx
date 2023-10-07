import { getSearchMovie } from "Api/Api";
import {  useState } from "react"
import { Link } from "react-router-dom";
import css from './MoviePage.module.css'

export const MoviesPage = () => {
  const [searshMovie, setSearshMovie] = useState([])
  const [query, setQuery] = useState('')
  const defultImages = 'https://fakeimg.pl/200x300?text=NO+IMAGE'

  const handleChange = ({target: { value }}) => {
    setQuery(value)
  };

  const handleSubmit = (evt) => {
    evt.preventDefault()
    fetchSearchMovie()
    
  } 
  
  const fetchSearchMovie = async() => {
    try {
      const data = await getSearchMovie(query);
      setSearshMovie(data)
      console.log(data)
    } catch (error) {
      
    }
  }
  
  return (
    <>
    <form onSubmit={handleSubmit} className={css.searchForm}>
			<div >
				<input
					name='title'
					type='text'
					value={query}
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
          {searshMovie.map(({id, poster_path, title, release_date}) => (
            <li key={id} className={css.item}>
              <Link to={`${id}`} className={css.link}>
                <div>
                  <div>
                    <img src={poster_path ? `https://image.tmdb.org/t/p/w200/${poster_path}` : defultImages} alt="poster" />
                  </div>
                  <h3 className={css.title}>{release_date ? `${title} (${new Date(release_date).getFullYear()})` : title}</h3>
                  <p></p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
		
    </>
  )
}
