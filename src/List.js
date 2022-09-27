const List = ({ movies, minDuration }) => {
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>
          {minDuration < movie.duration_seconds && movie.title}
        </div>
      ))}
    </>
  );
};

export default List;
