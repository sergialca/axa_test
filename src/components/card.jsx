import React from 'react';
import "./card.scss";

function Card(props) {
    return (
        <div className="wrap">
            <div className="name">
                <p className="card-label">Name:</p>
                <p className="card-value">{props.info.name}</p>
            </div>
            <div className="age">
                <p className="card-label">Age:</p>
                <p className="card-value">{props.info.age}</p>
            </div>
            <div className="height">
                <p className="card-label">Height:</p>
                <p className="card-value">{props.info.height}</p>
            </div>
            <div className="profession">
                <p>
                    {props.info.professions.length >= 2 ? <b>Professions: </b> : <b>Profession: </b>}
                    {props.info.professions.length > 0 ? props.info.professions.join(', ') : 'Unknown'}
                </p>
            </div>
        </div>
    );
}

export default Card;