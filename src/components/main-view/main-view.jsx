import { useEffect, useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';
import { ProfileView } from '../profile-view/profile-view';

import { Row, Col, Button } from 'react-bootstrap';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (!token) return;

        fetch('https://myflixapi-50hz.onrender.com/movies', {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('movies from api', data);
                const moviesFromApi = data.map((docs) => {
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
                setMovies(moviesFromApi);
            });
    }, [token]);

    return (
        <BrowserRouter>
            <NavigationBar
                user={user}
                onLoggedOut={() => {
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                }}
            />
            <Row id='myFlix-box' className='justify-content-md-center'>
                <Routes>
                    <Route
                        path='/profile'
                        element={
                            <>
                                {!user ? (
                                    <Navigate to='/' />
                                ) : (
                                    <Col md={5}>
                                        <ProfileView movies={movies} />
                                    </Col>
                                )}
                            </>
                        }
                    />

                    <Route
                        path='/signup'
                        element={
                            <>
                                {user ? (
                                    <Navigate to='/' />
                                ) : (
                                    <Col md={5}>
                                        <SignupView />
                                    </Col>
                                )}
                            </>
                        }
                    />

                    <Route
                        path='/login'
                        element={
                            <>
                                {user ? (
                                    <Navigate to='/' />
                                ) : (
                                    <Col md={5}>
                                        <LoginView
                                            onLoggedIn={(user, token) => {
                                                setUser(user);
                                                setToken(token);
                                            }}
                                        />
                                    </Col>
                                )}
                            </>
                        }
                    />

                    <Route
                        path='/movies/:Title'
                        element={
                            <>
                                {!user ? (
                                    <Navigate to='/login' replace />
                                ) : movies.length === 0 ? (
                                    <Col>The list is empty!</Col>
                                ) : (
                                    <Col md={8}>
                                        <MovieView
                                            movies={movies}
                                            user={user}
                                            token={token}
                                        />
                                    </Col>
                                )}
                            </>
                        }
                    />

                    <Route
                        path='/'
                        element={
                            <>
                                {!user ? (
                                    <Navigate to='/login' replace />
                                ) : movies.length === 0 ? (
                                    <Col>The list is empty!</Col>
                                ) : (
                                    <>
                                        <>
                                            {movies.map((movie) => (
                                                <Col
                                                    key={movie.id}
                                                    md={2}
                                                    className='mb-5'
                                                >
                                                    <MovieCard movie={movie} />
                                                </Col>
                                            ))}
                                        </>
                                    </>
                                )}
                            </>
                        }
                    />
                </Routes>
            </Row>
        </BrowserRouter>
    );
};
