import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Show (props) {
  const [workout, setWorkout] = useState(null);
  const params = useParams()  
  const URL = "http://localhost:5000/api/workouts/"+params.id;

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
  useEffect(() => {
    getWorkout()
}, [])

  console.log("WORKOUT",workout)
  return(
    <div>
      <h1> {workout?.name} </h1>
      <h2> {workout?.type} </h2>
      <h3> {workout?.duration} </h3>
      <h4> {workout?.style} </h4>
    </div>
  )
}