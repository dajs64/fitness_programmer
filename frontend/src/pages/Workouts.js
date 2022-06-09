import { useState } from 'react';
import { Link } from 'react-router-dom';

function workout(props) {
    console.log(props)
    const loaded = () => {
        return props.workout.map((workout) => (
                <div key={workout._id} className='workout'>
                    <Link to={`/workout/${workout._id}`}>
                        <h1>{workout.name}</h1>
                        <img src={workout.image} alt={workout.name} />
                        <h3>{workout.title}</h3>
                    </Link>
                </div>
            )
        )
    }

    const loading = () => {
        return <h1>Loading.........</h1>
    }

    return props.workout ? loaded() : loading()
}

export default workout