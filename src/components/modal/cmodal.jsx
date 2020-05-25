import React, { Component, Fragment } from 'react';
import Friends from "../friends/friends";
import "./modal.scss";

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friendRecord: {},
            firstContact: {},
            showButton: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.oneRecord !== prevProps.oneRecord) {
            this.setState({
                friendRecord: this.props.oneRecord,
                firstContact: this.props.oneRecord,
                showButton: false
            });
        }
      }
      back = () => {
        this.setState({friendRecord: this.state.firstContact, showButton: false});
      }

    render() {
        let {friendRecord, showButton} = this.state;
        const {show, closeModal} = this.props;
        let cont = 0;
        const loadPersonalData = (n) => {
            this.setState({showButton: true});
            this.props.info.map( i => {
                if(i.name === n){
                    this.setState({friendRecord: i});
                }
                return n;
            })
        }
        return (
            <Fragment>
            <div className={show ? "overlay" : "hide"} onClick={closeModal}></div>
            <div className={show ? "wrapper" : "hide"}>
                <div className="modal">
                    <button className="close-button" onClick={closeModal}>X</button>
                    <button className={showButton ? "back-button" : "hide"} onClick={() => this.back()} >&lt;back</button>
                    <div className="header">
                        <img className="profile-picture" src={friendRecord.thumbnail} alt="profile"></img>
                        <div className="name">
                            <span className="modal-label">Name:</span>
                            <span className="modal-value">{friendRecord.name}</span>
                        </div>
                    </div>
                    <div className="body">
                        <div className="age">
                            <span className="modal-label">Age:</span>
                            <span className="modal-value">{friendRecord.age}</span>
                        </div>
                        <div className="height space">
                            <span className="modal-label">Height:</span>
                            <span className="modal-value">{friendRecord.height}</span>
                        </div>
                        <div className="weight space">
                            <span className="modal-label">Weight:</span>
                            <span className="modal-value">{friendRecord.weight}</span>
                        </div>
                        <div className="hair space">
                            <span className="modal-label">Hair color:</span>
                            <span className="modal-value">{friendRecord.hair_color}</span>
                        </div>
                        <div className="profession">
                            <span>
                                {friendRecord.professions ? friendRecord.professions.length >= 2 ? <b>Professions: </b> : <b>Profession: </b> : <b>Profession: </b>}
                                {friendRecord.professions ? friendRecord.professions.length > 0 ? friendRecord.professions.join(', ') : 'Unknown' : 'Unknown'}
                            </span>
                        </div>
                        <div className="friend">
                            <span>
                                {friendRecord.friends ? friendRecord.friends.length === 0 ? '' : friendRecord.friends.length >= 2 ? <b>Friends: </b> : <b>Friend: </b> : ''}
                                {friendRecord.friends ? friendRecord.friends.map(f => {
                                    cont++
                                    return <Friends name={f} key={cont} personalData={loadPersonalData}/>;
                                }) : ''}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        );
    }
}

export default Modal;