import React, { useState, useEffect, Fragment } from 'react';
import axios from "axios";
import Card from "../components/card/card";
import Modal from "../components/modal/modal";
import "./home.scss";


function Home(props) {
    const [records, setRecords] = useState([]);
    const [oneRecord, setOneRecord] = useState({})
    const [modal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);
    const addOneRecord = p => setOneRecord(p);

    useEffect (() => {
        async function getData() {
            const data = await axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");
            setRecords(data.data.Brastlewark);
        }
        getData();
    },[])

    return (
        <Fragment>
            <Modal closeModal={closeModal} show={modal} info={oneRecord}/>
            <div className="cardPanel">
                {records.map(p => {
                        return <Card key={p.id} info={p} onClick={openModal} addOneRecord={addOneRecord}/>
                    }
                )}
            </div>
        </Fragment>
    );
}

export default Home;