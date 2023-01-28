import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Card (props) {

    return (
        <div>
            <div className="card--container">
                    <img src={props.card.imageUrl} className="card--photo" alt="travel location"/>
                <div className="card--content">
                        <FontAwesomeIcon icon={faLocationDot} className="location--icon"/>
                        <span className="uppercase location">{props.card.location}</span>
                        <a href={props.card.googleMapsUrl} className="location--link">View on Google map</a>
                        <h1 className="card--title">{props.card.title}</h1>
                        <p className="card--date">{props.card.startDate} - {props.card.endDate}</p>
                        <p className="card--text">{props.card.description}</p>
                </div>
            </div>
            <hr className="line" />
        </div>
    )
}
export default Card;