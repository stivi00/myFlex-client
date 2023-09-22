import { useEffect, useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (!token) return;

        fetch('https://myflixapi-50hz.onrender.com/movies', {
            headers: { Authorization: `Bearer ${token}` },
        })
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
    }, [token]);

    if (!user) {
        return (
            <>
                <LoginView
                    onLoggedIn={(user, token) => {
                        setUser(user);
                        setToken(token);
                    }}
                />
                or
                <SignupView />
            </>
        );
    }

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

            <button
                onClick={() => {
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                }}
            >
                Logout
            </button>
        </div>
    );
};
