import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//import App from './components/app';
import SearchBar from './components/searchbar';
import EventList from './components/event_list';

import reducers from './reducers';


const API_KEY = 'AIzaSyBjkq8WtVUEGRfCnKrcHpSG-T8A1EqoJwE'
const createStoreWithMiddleware = applyMiddleware()(createStore);

/*
var googleMapsClient = require('@google/maps').createClient({
  key: API_KEY
});

// Geocode an address.
googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});
*/
var events = [
    {title: "Fat Duck", placeID: " ChIJ9847-dN8dkgRTNy_Eh1e5RE"},
    {title: "Peckhamplex", placeID: "ChIJO4rSTqADdkgRWXF0GwEEESg"}
]

const App = () => {
    return (
    <div>
        <SearchBar/>
        <EventList events={events}/>
    </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('.container'))