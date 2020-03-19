import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from "../components/card"
import "./home.scss";


function Home(props) {
    const [records, setRecords] = useState([]);

    useEffect (() => {
        async function getData() {
            const data = await axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json");
            setRecords(data.data.Brastlewark);
        }
        getData();
    },[])

    return (
        <div className="cardPanel">
            {records.map(p => {
                    return  <Card key={p.id} info={p} />
                }
            )}
        </div>
    );
}

export default Home;