import './history.css';
import ActivityCard from '../components/ActivityCard';
import React, { useState, useEffect } from "react";
import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';
import axios from 'axios';

const sample = {
    "_id" : 3,
    "activity_name" : "meditate",
    "description" : "Sit back and relax",
    "score" : 25
}
const History = () => {
    const isLoggedIn = useSelector(state => state.userReducer.isLoggedIn);
    const [userActivities, setUserActivities] = useState([]);
    const [history, setHistory] = useState([]);
    const user = useSelector(state => state.userReducer.user);

    useEffect(() => {
        axios.get("http://localhost:5000/api/user/activities")
        .then(res => {
            if (res.data != null) {
                setUserActivities(res.data)
            }
        })
        .catch(err => {});
    }, []);
    useEffect(() => {
        axios.get("http://localhost:5000/api/get/activity", {
            _id: 1
        })
        .then(res => {
            if (res.data != null) {
                setHistory(history => [...history, res.data]);
            }
        })
        .catch(err => {});
    }, []);

    return(
        <div className="history">
            <NavBar />
            <div className="history-card-container">
                {/* {history.map((hist, i) => ( */}
                  <ActivityCard {...sample} />
                  <ActivityCard {...sample} />
                  <ActivityCard {...sample} />
                  <ActivityCard {...sample} />
                  <ActivityCard {...sample} />
                  <ActivityCard {...sample} />
                  <ActivityCard {...sample} />
                  <ActivityCard {...sample} />
                {/* ))}  */}
            </div>
        </div>
    );
};

export default History;