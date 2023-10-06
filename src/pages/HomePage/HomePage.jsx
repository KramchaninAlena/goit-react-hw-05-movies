// import { Outlet } from "react-router-dom"
import { useEffect, useState } from 'react';
import { getTrendingMovie } from 'Api/Api';
import { Link } from 'react-router-dom';

export const HomePage = () => {
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
      <h1>Trending today</h1>
      <ul>
        {listFilm.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
    
  )
}
