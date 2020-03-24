import React from 'react';
import "./friends.scss"

function friends(props) {
    const {name, personalData} = props;
    console.log("friends -> name, personalData", name, personalData);
    
    return (
        <span className="friends" onClick={() => personalData(name)}>{name}</span>
    );
}

export default friends;