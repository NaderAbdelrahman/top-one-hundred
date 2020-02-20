import React from 'react';
import axios from 'axios';
import Album from "../components/album";
import '../scss/album.list.scss'

export default class AlbumList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rawAlbumArray: [],
            inputValue: '',
        };
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {
        this.setState({inputValue: event.target.value});
    }

    componentDidMount() {
        axios.get('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
            .then((response) => {
                this.setState({rawAlbumArray: response.data.feed.entry});
            })
    }


    render() {
        let filteredArray = this.state.rawAlbumArray.filter((albumObj) => {
            return albumObj["im:name"].label.toLowerCase().indexOf(this.state.inputValue) !== -1
        });
        return (
            <div>
                <input className="album-list__input" type="text" value={this.state.inputValue} onChange={this.changeHandler} />
                <div className="album-list__wrapper">
                    {
                        filteredArray.map((albumObj, index) => {
                            return <Album
                                ranking={ index + 1 }
                                imgSrc={ albumObj["im:image"][2].label }
                                name={ albumObj["im:name"].label }
                                artist={ albumObj["im:artist"].label }
                                price={ albumObj["im:price"].label }
                                itemCount={ albumObj["im:itemCount"].label }
                                genre={ albumObj.category.attributes.label }
                                releaseDate={ albumObj["im:releaseDate"].label }
                            />
                        })
                    }
                </div>
            </div>
        )
    }


}

