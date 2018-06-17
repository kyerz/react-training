import React from 'react'
import './Movie.css'

const Movie = ({id, title, posterUrl, addMovie}) => {
  return(
    <div className='movie-container'>
      <h4>{title}</h4>
      <img src={posterUrl} alt="poster" /><br/>
      <button onClick={() => addMovie(id)}>Add movie</button>
    </div>
    
  )
}

export default Movie
