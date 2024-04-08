import React from "react";
import ReactDOM from "react-dom";
import API_Key from "./API_key";
import SearchBar from "./components/search_bar";

const Key = API_Key

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