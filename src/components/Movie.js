import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Movie({id, movieImg, title, rating, summary, genres}){
    return (
        <div>
            <img src={movieImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link> ({rating})
                {/* <a href='/movie'>{title}</a> */}
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => <li key={g}>{g}</li>)}
            </ul>
        </div>
    )
}

Movie.prototype = {
    id:PropTypes.number.isRequired,
    movieImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;