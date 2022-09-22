import Movie from './Movie'

function MoviList(props) {
  const { movies } = props
  return (
    <div className="movies">
      {movies.map((e) => (
        <Movie key={e.imdbID} {...e} />
      ))}
    </div>
  )
}
export default MoviList
