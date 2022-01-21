import React from "react";
import { Workout } from "../Workout/Workout";

export const WorkoutList = (props) => {
    const workouts = props.workouts.map((workout, key) => {
        return <Workout key={key} gotoWorkout={props.onClick} workout={workout} />
    });
    const handleAddWorkout = () => {
        const newWorkout = {};
        props.addWorkout(newWorkout)
    }
    return (
        <div className="WorkoutList">
            {workouts}
            <button className="Workout-action" onClick={handleAddWorkout}>Add Workout</button>
        </div>
    )
}
export default WorkoutList;