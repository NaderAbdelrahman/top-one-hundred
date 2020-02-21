import React from 'react';
import PropTypes from 'prop-types';
import '../scss/album.scss'



export default class Album extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
        };
        console.log(new Date(this.props.releaseDate));
    }

    getDateString(dateString) {
        let d = new Date(dateString);
        let date = d. getDate();
        let month = d. getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
        let year = d. getFullYear();
        return month + "/" + date + "/" + year;
    }

    render() {
        return (
            <div className="album__wrapper">
                <p className="album__ranking">{ this.props.ranking }.</p>
                <img
                    className="album__image"
                    src={ this.props.imgSrc }
                    alt="album_image"
                    onClick={ () => this.setState({popup: !this.state.popup}) }
                />
                <p className="album__name">{ this.props.name }</p>
                <p className="album__artist">{ this.props.artist }</p>
                {
                    this.state.popup
                        ?
                        <div className="album--popup__wrapper">
                            <div className="album--popup__card">
                                <img
                                    className="album--popup__image"
                                    src={ this.props.imgSrc }
                                    alt="album_image"
                                    />
                                <div className="album--popup__text-wrapper">
                                    <p className="album--popup__name">{ this.props.name }</p>
                                    <p className="album--popup__artist">{ this.props.artist }</p>
                                    <p className="album--popup__price">Price: { this.props.price }</p>
                                    <p className="album--popup__itemCount">Number of Songs: { this.props.itemCount }</p>
                                    <p className="album--popup__genre">Genre: { this.props.genre }</p>
                                    <p className="album--popup__releaseDate">Release Date: { this.getDateString(this.props.releaseDate) }</p>
                                </div>
                                <div className="album--popup__close" onClick={() => this.setState({popup: false})}>X</div>
                            </div>
                        </div>

                        : null
                }
            </div>
        );
    }


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
