export const MovieView = ({ movie, onBackClick }) => {
    console.log('MOVIE', movie);

    return (
        <div className='movieView-card'>
            <div>
                <img className='movieView-image' src={movie.ImagePath} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.Title}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.Director.Name}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span>{movie.Genre.Name}</span>
            </div>

            <button onClick={onBackClick}>Back</button>
        </div>
    );
};
