import React from "react";
import ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_Key = 'AIzaSyCIsI8PM98cbKbjL5GNjQBzdrKdHIapch4'

// Create a new compnent. This componebt should produce some HTML
const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM).

// the second argument states where it should be rendered, i.e container
ReactDOM.render(<App />, document.querySelector('.container'))