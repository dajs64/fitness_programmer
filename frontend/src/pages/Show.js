import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { alignPropType } from "react-bootstrap/esm/types";

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
    <div className="cardshow">
      <Card style={{ width: '21rem' }}className="mt-0 mb-4">
      <Card.Body>
        <Card.Title className="my-auto"> {workout?.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{workout?.type}</Card.Subtitle>
        <Card.Text>
        {workout?.duration} 
        </Card.Text>
        <Card.Text>
        {workout?.style}
        </Card.Text>
        <Card.Text>
        {workout?.difficulty}
        </Card.Text>
        <Card.Text>
        {workout?.location}
        </Card.Text>
        <Button variant="info"onClick={handleUpdateClick}>Update Workout</Button>{' '}
        <Button variant="danger"onSubmit={deleteWorkout}>Delete Workout</Button>{' '}
      </Card.Body>
    </Card>
    </div>
  )

}

// export default TextExample;