import React, { Component } from 'react';

// --------Import other components here---------
import SearchBar from '../containers/searchbar';
require('../../style/style.css');
// ---------------------------------------------


export default class App extends Component {
    render() {
        // Insert JSX to be rendered to localhost here
        return (
        <div>
            <SearchBar />
        </div>
        );
    }
}
