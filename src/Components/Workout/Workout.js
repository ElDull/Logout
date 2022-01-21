import React from "react";

export const Workout = (props) => {
    const handleGotoWorkout = () => {
        props.gotoWorkout(props.workout);
    }
    const addWorkout = () => {
        props.onAdd(props.workoutName)
    }
    const removeWorkout = () => {
        props.onRemove(props.workouts)
    }
    const exercises = props.workout.exercises.map((exercise, key) => {
        return <li key={key}>{exercise.name} - Sets: {exercise.sets} Reps: {exercise.reps}</li>
    })
    return (
            <div className="Workout">
              <div className="Workout-information">
                <h1 onClick={handleGotoWorkout}>{props.workout.name}</h1>
                <h4>{props.workout.description}</h4>
                <ul>
                    {exercises}
                </ul>
              </div>
            </div>
    )
}