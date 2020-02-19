import React from 'react';
import axios from 'axios';
import '../scss/album.list.scss'

export default class AlbumList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rawAlbumArray: [],
        }
    }

    componentDidMount() {
        axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
            .then((response) => {
                this.setState({rawAlbumArray: response.data.feed.entry});
            })
    }

    render() {
        return (
            <div className="album-list__wrapper">
                {
                    this.state.rawAlbumArray.map((albumObj) => {
                        return <div className="album__wrapper">
                            <img src={albumObj["im:image"][2].label} alt=""/>
                            <p>{albumObj.title.label}</p>
                        </div>
                    })
                }
            </div>
        )
    }

}

