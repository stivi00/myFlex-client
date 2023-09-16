export const MovieCard = ({ movie, onMovieClick }) => {
    return (
        <div
            onClick={() => {
                onMovieClick(movie);
            }}
        >
            <img
                className='thumbnails'
                src={movie.ImageURL}
                alt={movie.Title}
            />
        </div>
    );
};
