import { useEffect, useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import PropTypes from 'prop-types';

export const MainView = () => {
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch('https://myflixapi-50hz.onrender.com/movies')
            .then((response) => response.json())
            .then((data) => {
                console.log('movies from api', data);
                const moviesFromAp = data.map((docs) => {
                    return {
                        id: docs._id,
                        Actors: docs.Actors,
                        Director: docs.Director,
                        Featured: docs.Featured,
                        Genre: docs.Genre,
                        Title: docs.Title,
                        ImagePath: docs.ImagePath,
                    };
                });
                setMovies(moviesFromAp);
            });
    }, []);

    if (selectedMovie) {
        return (
            <MovieView
                movie={selectedMovie}
                onBackClick={() => setSelectedMovie(null)}
            />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty</div>;
    }

    return (
        <div className='my-flix'>
            {movies.map((movie) => (
                <MovieCard
                    className='thumbnails'
                    key={movie.id}
                    movie={movie}
                    onMovieClick={() => {
                        setSelectedMovie(movie);
                    }}
                />
            ))}
        </div>
    );
};
