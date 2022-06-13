import { useState } from 'react';
import { Link } from 'react-router-dom';

function workout(props) {
    console.log(props)
    const loaded = () => {
        return ( 
            <div>
                {props.workouts.map((workout) => (
                    <div key={workout._id} className='workout'>
                    <Link to={`/workout/${workout._id}`} className='workoutlist'>
                        <h1>{workout.name}</h1>
                    </Link>
                </div>
                ))}
                <Link to={'/add-workout'} className="create">Create Workout</Link>
            </div>
        ) 
    }

    const loading = () => {
        return <h1>Loading.........</h1>
    }

    return props.workouts ? loaded() : loading()
}

export default workout