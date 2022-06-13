// Import useParams to grab the workoutId
// On page load, fetch the workout based on that id
// Display the workout data in the console

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Show (props) {
  const [workout, setWorkout] = useState(null);
  const params = useParams()  
  const URL = "http://localhost:5000/api/workouts/"+params.id;
  const navigate = useNavigate()
  
  const getWorkout = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      console.log("DATA",data)
      setWorkout(data)
  } 
  useEffect(() => {
    getWorkout()
}, [])

const handleUpdateClick = async (e) => {
  console.log('Update Clicked...', workout);
  e.preventDefault();

  await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({...workout, id: params.id}),
  });

  // Grab the newly updated workout data from state and PUT to the database 
  //     1. Update will send a `PUT` request to the DB and then call `getWorkout()` and redirect you back to the single workout view
 
}



const handleChange = (e) => {
  setWorkout({...workout, [e.target.name]: e.target.value});
}


  console.log("WORKOUT", workout)
  return(
    <div>
      <input
          type="text"
          value={workout?.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
      />
      <input
          type="text"
          value={workout?.type}
          name="type"
          placeholder="type"
          onChange={handleChange}
      />
      <input
          type="text"
          value={workout?.duration}
          name="duration"
          placeholder="duration"
          onChange={handleChange}
      />
      <input
          type="text"
          value={workout?.style}
          name="style"
          placeholder="style"
          onChange={handleChange}
      />
      <input
          type="text"
          value={workout?.difficulty}
          name="difficulty"
          placeholder="difficulty"
          onChange={handleChange}
      />
      <input
          type="text"
          value={workout?.location}
          name="location"
          placeholder="location"
          onChange={handleChange}
      />
      <button onClick={handleUpdateClick}>Update Workout</button>
    </div>
  )
}