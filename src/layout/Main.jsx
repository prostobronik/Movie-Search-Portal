import React from "react"
import MoviList from "../components/MovieList"
import Preloader from "../components/Preloader"
import Search from "../components/Search"

const API_KEY = process.env.REACT_APP_API;

class Main extends React.Component {
   state = {
      movies : [],
      loading: true,
   }

   componentDidMount() {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}=matrix`)
         .then(response => response.json())
         .then(data => this.setState({movies: data.Search, loading:false}))
         .catch((err)=> {
            console.eroor(err);
            this.setState({loading:false})
         })
   }


   searchMovies = (str,type = 'all') => {
      this.setState({loading: true})
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search,loading:false}))
      .catch((err)=> {
         console.eroor(err);
         this.setState({loading:false})
      })
   }

   render() {
      const {movies, loading} = this.state
      return(
         <main className="container content">
            <Search searchMovies={this.searchMovies}/>
            {
             loading ? <Preloader/>  : (<MoviList movies = {movies}/>) 
            } 
         </main>

      )
   }

}

export default Main