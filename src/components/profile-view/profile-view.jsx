import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { Form, Button, Card, Row, Col, Modal } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';

export const ProfileView = ({ movies }) => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);

    const [showModal, setShowModal] = useState(false);

    // this code should work
    const favoriteMovies = movies.filter((m) =>
        user.FavoriteMovies.includes(m.id)
    );

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleUpdate = () => {};

    const handleDeleteUser = () => {
        fetch(`https://myflixapi-50hz.onrender.com/users/${user.Username}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (response.ok) {
                setUser(null);

                alert('Your account has been deleted');
            } else {
                alert('something went wrong.');
            }
        });
    };

    return (
        <>
            <Row className='justify-content-center'>
                <Col>
                    <h1 className='profile'>Welcome {user.Username} </h1>

                    <Row>
                        <Col>
                            <h3 className='favorite-title'>Favorite movies:</h3>
                        </Col>
                    </Row>
                    <Row className='justify-content-center'>
                        {favoriteMovies.map((movie) => (
                            <Col className='mb-4' key={movie.title}>
                                <MovieCard movie={movie} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col md={5}>
                    <Button
                        variant='link'
                        className='text-danger'
                        onClick={handleShowModal}
                    >
                        Delete my account
                    </Button>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete your account?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleDeleteUser}>
                        Yes
                    </Button>
                    <Button variant='secondary' onClick={handleCloseModal}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
