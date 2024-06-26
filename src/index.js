import _ from 'lodash'
import React, { Component } from "react";
import ReactDOM from "react-dom";
import youtubeApiSearch from "youtube-api-search";
import API_Key from "./API_key";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const Key = API_Key


// Create a new compnent. This componebt should produce some HTML
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            videos: [],
             selectedVideo: null
        };

        this.videoSearch('surfboard')

    }

    videoSearch(term) {

                // API Search 
                youtubeApiSearch({key: Key, term: term}, (videos) => {
                    this.setState({
                        videos: videos,
                        selectedVideo: videos[0]
                    }); 
        
                });
    
            }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300)

    return (
    <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos}/>
    </div>
    );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM).

// the second argument states where it should be rendered, i.e container
ReactDOM.render(<App />, document.querySelector('.container'))