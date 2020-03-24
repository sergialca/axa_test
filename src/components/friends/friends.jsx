import React from 'react';
import "./friends.scss"

function friends(props) {
    const {name, personalData} = props;
    return (
        <span className="friends" onClick={() => personalData(name)}>{name}</span>
    );
}

export default friends;