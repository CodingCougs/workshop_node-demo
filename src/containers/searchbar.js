import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <form>
                <input className="searchbar-style"/>
                <span><button >Search</button></span>
            </form>
        );
    }
}