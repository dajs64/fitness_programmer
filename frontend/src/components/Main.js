import React, { Component }  from 'react';
import { useEffect, useState } from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Workout from "../pages/Workouts.js";
import Show from "../pages/Show";
import AddWorkout from "../pages/AddWorkout"
// import new from "..pages/NewWorkout";
function Main(props) {
    const [workouts, setWorkouts] = useState(null);

    const URL = "http://localhost:5000/api/workouts/";

    // const getWorkout = () => {
    //     fetch(URL)
    //     .then(response => response.json())
    //     .then(result => setWorkout(result))
    // }
    const getWorkouts = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        // console.log(data)
        setWorkouts(data)
    } 

    const createWorkout = async (workout) => {
        console.log("counterstrike")
        // make post request to create a workout
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
		        body: JSON.stringify(workout),
        });
        // update list of workouts
        getWorkouts();
    };

    // useEffect(() => getWorkout(), []);
    useEffect(() => {
        getWorkouts()
    }, [])
    return (
        <main>
            <Routes>
                <Route 
                    path='/' 
                    element={<Workout workouts={workouts}/>} 
                />
                <Route
                    path="/workout/:id"
                    element={<Show/>}
                />
                <Route
                    path="/add-workout"
                    element={<AddWorkout createWorkout={createWorkout}/>}
                />
            </Routes>
        </main>
    );
}

export default Main;