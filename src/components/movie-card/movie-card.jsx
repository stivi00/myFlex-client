export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div
            onClick={() => {
                onMovieClick(movie);
            }}
        >
            <img
                className='thumbnails'
                src={movie.ImagePath}
                alt={movie.Title}
            />
        </div>
    );
};
