/**
 * Created by chris on 04/03/2017.
 */
import React, { Component } from 'react';

class SearchBar extends Component{
    render() {
        return <input onChange={(event) => console.log(event.target.value)} />;
    }
}




export default SearchBar;
