const List = ({ movies, minDuration }) => {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{minDuration < movie.duration_seconds && movie.title}</h3>
        </div>
      ))}
    </>
  );
};

export default List;
