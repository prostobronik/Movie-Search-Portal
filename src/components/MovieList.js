import Movie from './Movie'

function MoviList(props) {
  const { movies = [] } = props
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((e) => <Movie key={e.imdbID} {...e} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  )
}
export default MoviList
