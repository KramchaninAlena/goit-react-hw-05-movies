// import { Outlet } from "react-router-dom"
import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'Api/Api';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css'
const defultImages = 'https://fakeimg.pl/200x300?text=NO+IMAGE'

 const HomePage = () => {
const [listFilm, setListFilm] = useState([])
    useEffect(() => {
        const fetchTrendingMovie = async () => {
          try {
            const data = await getTrendingMovie()
            setListFilm(data)
            
          } catch (error) {
            console.log(error)
          }
         
        }
        fetchTrendingMovie()
      },[]); 
      console.log(listFilm)
  return (
    <>
      <div className={css.container}>
      <h1 className={css.title}>Trending today</h1>
      <ul className={css.list}>
        {listFilm.map(({ id, poster_path, title, release_date }) => (
          <li key={id} className={css.item}>
          <Link to={`movies/${id}`} className={css.link}>
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
export default HomePage;