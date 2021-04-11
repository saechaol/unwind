import NavBar from '../components/NavBar';
import './styles.css';
import DashboardCard from '../components/DashboardCard';
import React, { useState, useEffect } from "react";
import axios from 'axios';

const sample = {
    "_id" : 3,
    "activity_name" : "meditate",
    "description" : "Sit back and relax",
    "score" : 25
}

const Home = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        axios.get("https://citrushack-310405.wl.r.appspot.com/api/get/activities")
        .then(res => {
            if (res.data != null) {
                setActivities(res.data)
            }
        })
        .catch(err => {});
    }, []);
    return(
        <div className="home">
            <NavBar />
            <div className="activity-card-container">
                {activities.map((activity, i) => (
                    <DashboardCard key={i} {...activity} />
                ))}
                <DashboardCard {...sample}/>
            </div>
        </div>
    );
};
export default Home;