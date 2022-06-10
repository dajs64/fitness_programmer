import React, { Component }  from 'react';
import { useEffect, useState } from "react";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Workout from "../pages/Workouts.js";
import Show from "../pages/Show";

function Main(props) {
    const [workout, setWorkout] = useState(null);

    const URL = "http://localhost:8000/workouts/";

    // const getWorkout = () => {
    //     fetch(URL)
    //     .then(response => response.json())
    //     .then(result => setWorkout(result))
    // }
    const getWorkout = async () => {
        const response = await fetch("http://localhost:8000/api/workouts/")
        const data = await response.json()
        console.log(data)
        setWorkout(data)
    } 


    // const createWorkout = async (workout) => {
    //     // make post request to create a workout
    //     await fetch(URL, {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
	// 	        body: JSON.stringify(Workout),
    //     });
    //     // update list of workouts
    //     getWorkout();
    // };

    // useEffect(() => getWorkout(), []);
    useEffect(() => {
        getWorkout()
    }, [])

    return (
        <main>
            <Routes>
                <Route 
                    path='/' 
                    element={<Workout 
                        Workout={workout} 
                        // createWorkout={createWorkout} 
                    />} 
                />
                <Route
                    path="/workout/:id"
                    render={(rp) => (
                        <Show
                        {...rp}
                        />
                    )}
                />
            </Routes>
        </main>
    );
}

export default Main;