import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Workout from "../pages/workouts";
import Show from "../pages/Show";

function Main(props) {
    const [workout, setWorkout] = useState(null);

    const URL = "http://localhost:3000/workout/";

    const getWorkout = () => {
        fetch(URL)
        .then(response => response.json())
        .then((result) => setWorkout(result))
    }

    const createWorkout = async (workout) => {
        // make post request to create a workout
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
		        body: JSON.stringify(Workout),
        });
        // update list of workouts
        getWorkout();
    };

    useEffect(() => getWorkout(), []);

    return (
        <main>
            <Routes>
                <Route 
                    path='/' 
                    element={<Workout 
                        Workout={Workout} 
                        createWorkout={createWorkout} 
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