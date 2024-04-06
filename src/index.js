import React from "react";
import ReactDOM from "react-dom";
// Create a new compnent. This componebt should produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put it on the page (in the DOM).

// the second argument states where it should be rendered, i.e container
ReactDOM.render(<App />, document.querySelector('.container'))