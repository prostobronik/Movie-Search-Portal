import React from "react"
import MoviList from "../components/MovieList"
import Preloader from "../components/Preloader"

class Main extends React.Component {
   state = {
      movies : [],
   }

   componentDidMount() {
      fetch("http://www.omdbapi.com/?apikey=910c2e82&s=matrix")
         .then(response => response.json())
         .then(data => this.setState({movies: data.Search}))
   }

   render() {
      const {movies} = this.state
      return(
         <main className="container content">
            {
             movies.length ?  (<MoviList movies = {movies}/>) : <Preloader/>
            } 
         </main>

      )
   }

}

export default Main