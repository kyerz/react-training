import React, { Component } from 'react'
import Movie from './components/Movie/Movie.js'

import './App.css'

class App extends Component {

  state = {
    genderList: [],
    movieList: [],
    favMovies: []
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json')
    .then(res => res.json())
    .then(data => this.setState( { genderList: data.genres , movieList: data.movies } ))
  }

  //add movie on favMovies tab state
  addFavoriteMovie = id => {
    if(this.state.favMovies.find(movie => movie.id === id)) {
      return
    }
    const favMovie = this.state.movieList.find(movie => movie.id === id)
    this.setState({ favMovies: [...this.state.favMovies, favMovie] })
  }

  removeFavoriteMovie = id => {

    const newFavMovies = this.state.favMovies.filter( movie => id !== movie.id)
    this.setState( { favMovies: newFavMovies} )

  }

  render() {
    
    //show movies list
    const movieList = this.state.movieList.map(movie =>  <Movie key={movie.id} {...movie} addMovie={this.addFavoriteMovie}/>)
    const favMovieList = this.state.favMovies.map(movie => {
      return(
        <div key={movie.id}>
          <h4>{movie.title}</h4>
          <img src={movie.posterUrl} alt="poster" /><br/>
          <button onClick={() => this.removeFavoriteMovie(movie.id)}>remove</button>
        </div>    
      )
    })

    return (
      <div className="App">
      <h1>Popcorn Time</h1>
      <h2>Favorites Movies</h2>
      {favMovieList}
      <h2>Movies List</h2>
      {movieList}
      </div>
    )
  }
}

export default App
