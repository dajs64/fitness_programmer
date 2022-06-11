import { useState } from "react";
import {Link} from "react-router-dom"


function Workout(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        title: "",
    });

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createWorkout(newForm);
        setNewForm({
            name: "",
            type: "",
            duration: "",
            style: "",
            difficulty: "",
            location: "",
        });
    };

    // loaded function
    const loaded = () => {
        return props.workout.map((workout) => (
            <div key={workout._id} className="workout">
                <Link to={`/workout/${workout._id}`}><h1>{workout.name}</h1></Link>
                {/* <img src={person.image} alt={person.name} /> */}
                <h3>{workout.title}</h3>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.name}
                    name="name"
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Workout" />
            </form>
            {props.workout ? loaded() : loading()}
        </section>
    );
}

export default Workout;