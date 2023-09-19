export const MovieView = ({ movie, onBackClick }) => {
    console.log('MOVIE', movie);

    return (
        <div className='movieView-card'>
            {/* <div>
                <img src={movie.ImageURL} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.Title}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.Director}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span>{movie.Genre}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{movie.Description}</span>
            </div>
            <button onClick={onBackClick}>Back</button> */}
        </div>
    );
};
