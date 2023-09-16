import { useState } from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            Title: 'The Shawshank Redemption',
            Description:
                'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            Genre: 'Drama',
            Director: 'Frank Darabont',
            ImageURL:
                'https://i.ebayimg.com/images/g/XxMAAOSw~zFg4aCs/s-l1600.jpg',
        },
        {
            id: 2,
            Title: 'The Godfather',
            Description:
                'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
            Genre: 'Crime',
            Director: 'Francis Ford Coppola',
            ImageURL: 'https://img.fruugo.com/product/4/49/14441494_max.jpg',
        },
        {
            id: 3,
            Title: 'Pulp Fiction',
            Description:
                'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
            Genre: 'Crime',
            Director: 'Quentin Tarantino',
            ImageURL: 'https://static.posters.cz/image/750webp/1288.webp',
        },
        {
            id: 4,
            Title: 'Inception',
            Description:
                'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
            Genre: 'Sci-Fi',
            Director: 'Christopher Nolan',
            ImageURL:
                'https://i.ebayimg.com/images/g/CuEAAOSwIuFkrzt2/s-l500.jpg',
        },
        {
            id: 5,
            Title: 'The Dark Knight',
            Description:
                'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
            Genre: 'Action',
            Director: 'Christopher Nolan',
            ImageURL:
                'https://i.ebayimg.com/images/g/eW4AAOSw3ChkxmMO/s-l500.jpg',
        },
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

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
