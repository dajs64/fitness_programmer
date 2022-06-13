import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Show (props) {
  const [workout, setWorkout] = useState(null);
  const params = useParams()  
  const URL = "http://localhost:5000/api/workouts/"+params.id;
  const navigate = useNavigate()
  

  // const getWorkout = () => {
  //     fetch(URL)
  //     .then(response => response.json())
  //     .then(result => setWorkout(result))
  // }
  const getWorkout = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      console.log("DATA",data)
      setWorkout(data)
  } 

const deleteWorkout = async e => {
  e.preventDefault()
  const deletedWorkout=await fetch(URL, {
      method: "delete",
      })
      console.log(deletedWorkout)
      props.getWorkouts()
      navigate("/")
}

useEffect(() => {
  getWorkout()
}, [])

const handleUpdateClick = (e) => {
  console.log('Update Clicked...');
  e.preventDefault();

  navigate(`/workout/${params.id}/edit`)
}

  console.log("WORKOUT", workout)
  return(
    <div>
      <h1> {workout?.name} </h1>
      <h2> {workout?.type} </h2>
      <h3> {workout?.duration} </h3>
      <h4> {workout?.style} </h4>
      <h5> {workout?.difficulty} </h5>
      <h6> {workout?.location} </h6>
      <button onClick={handleUpdateClick}>Update Workout</button>
      <div>
          <form onSubmit={deleteWorkout}>
            <button>Delete Workout</button>
          </form>
      </div>
    </div>
  )
}