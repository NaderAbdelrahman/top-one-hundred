import React from 'react';
import PropTypes from 'prop-types';
import '../scss/album.scss'

export default function Album(props) {
    return (
        <div className="album__wrapper">
            <p className="album__ranking">{ props.ranking }.</p>
            <img className="album__image" src={ props.imgSrc } alt=""/>
            <p className="album__name">{ props.name }</p>
            <p className="album__artist">{ props.artist }</p>
        </div>
    );

}

Album.propTypes = {
    ranking: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    itemCount: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
};
