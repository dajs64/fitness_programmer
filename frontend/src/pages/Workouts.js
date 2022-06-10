import { useState } from 'react';
import { Link } from 'react-router-dom';

function workout(props) {
    console.log(props)
    const loaded = () => {
        return props.workouts.map((workout) => (
                <div key={workout._id} className='workout'>
                    <Link to={`/workout/${workout._id}`}>
                        <h1>{workout.name}</h1>
                        <img src={workout.image} alt={workout.name} />
                        {/* <h3>{workout.title}</h3>
                        <h4>{workout.type}</h4>
                        <h5>{workout.duration}</h5> */}
                    </Link>
                </div>
            )
        )
    }

    const loading = () => {
        return <h1>Loading.........</h1>
    }

    return props.workouts ? loaded() : loading()
}

export default workout