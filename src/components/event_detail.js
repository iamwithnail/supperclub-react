/**
 * Created by chris on 10/03/17.
 */
import React from 'react';

const EventDetail = ({event}) => {

    return <li className="list-group-item" >
        <div className="media-left"> {event.title} </div>
        <div className="media-body">{event.placeID}</div>
        </li>
};

export default EventDetail;