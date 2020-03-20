import React from "react";
import "./modal.scss";

function Modal(props) {
    const {closeModal, show, info} = props;
    console.log("Modal -> info", info);
    return (
        <div className={show ? "overlay" : "hide"} onClick={closeModal}>
            <div className="modal">
                <button onClick={closeModal}>X</button>
                <div className="header">
                    <img className="profile-picture" src={info.thumbnail}></img>
                    <div className="name">
                        <span className="modal-label">Name:</span>
                        <span className="modal-value">{info.name}</span>
                    </div>
                </div>
                <div className="body">
                    <div className="age">
                        <span className="modal-label">Age:</span>
                        <span className="modal-value">{info.age}</span>
                    </div>
                    <div className="height space">
                        <span className="modal-label">Height:</span>
                        <span className="modal-value">{info.height}</span>
                    </div>
                    <div className="weight space">
                        <span className="modal-label">Weight:</span>
                        <span className="modal-value">{info.weight}</span>
                    </div>
                    <div className="hair space">
                        <span className="modal-label">Hair color:</span>
                        <span className="modal-value">{info.hair_color}</span>
                    </div>
                    <div className="profession">
                        <span>
                            {info.professions ? info.professions.length >= 2 ? <b>Professions: </b> : <b>Profession: </b> : <b>Profession: </b>}
                            {info.professions ? info.professions.length > 0 ? info.professions.join(', ') : 'Unknown' : 'Unknown'}
                        </span>
                    </div>
                    <div className="friend">
                        <span>
                            {info.friends ? info.friends.length >= 2 ? <b>Friends: </b> : <b>Friend: </b> : ''}
                            {info.friends ? info.friends.length > 0 ? info.friends.join(', ') : '' : ''}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;