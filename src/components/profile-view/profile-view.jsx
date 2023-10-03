import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProfileView = ({ movies }) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);

    // this code should work
    const favoriteMovies = movies.filter((m) =>
        user.FavoriteMovies.includes(m.id)
    );

    console.log('favsss', favoriteMovies);

    const handleUpdate = () => {};

    return (
        <>
            <Row className='justify-content-center'>
                <Col md={5}>
                    <h1 className='profile'>Welcome {user.Username} </h1>
                </Col>
            </Row>
        </>
    );
};
