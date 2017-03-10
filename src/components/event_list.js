/**
 * Created by chris on 10/03/17.
 */
var events = [
    {title: "Fat Duck", placeID: " ChIJ9847-dN8dkgRTNy_Eh1e5RE"},
    {title: "Peckhamplex", placeID: "ChIJO4rSTqADdkgRWXF0GwEEESg"}
]

import React from 'react';
import EventDetail from './event_detail';


const EventList = (props) =>  {
    const eventItems = props.events.map((event) => {
        return <EventDetail
            key={event.placeID}
                event={event} />
    });

    return (
        <ul className="col-md-4 list-group">
            {eventItems}
        </ul>
    );
};

export default EventList;