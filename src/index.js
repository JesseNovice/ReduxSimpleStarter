import React, { Component } from "react";
import ReactDOM from "react-dom";
import youtubeApiSearch from "youtube-api-search";
import API_Key from "./API_key";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
const Key = API_Key


// Create a new compnent. This componebt should produce some HTML
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: [] };
        // API Search 
        youtubeApiSearch({key: Key, term: 'surfboards'}, (videos) => {
            this.setState({videos}); // because the key value pair is the same name it is resolved as this.setState({videos: videos});
        });
    }

    render() {
    return (
    <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
    </div>
    );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM).

// the second argument states where it should be rendered, i.e container
ReactDOM.render(<App />, document.querySelector('.container'))