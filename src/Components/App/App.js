import React,{ useState } from "react";
import './App.css';
import Profile from '../Profile/Profile';

export const App = () => {
    const workouts_test = [{
        id:0,
        name:"Full Body #1",
        description: "First full body workout, lower body emphasis",
        exercises: [
            {
                name: "Pull ups",
                sets: 4,
                reps: "6-8",
                weight: 0
            },
            {
                name: "Barbell Bench Press",
                sets: 4,
                reps: 6,
                weight: 0
            },
            {
                name: "Squat",
                sets: 4,
                reps: 6,
                weight: 0
            },
        ]
    },
    {
        id:1,
        name:"Full Body #2",
        description: "Second full body workout, back emphasis",
        exercises: [
            {
                name: "Pull ups",
                sets: 4,
                reps: "6-8",
                weight: 0
            },
            {
                name: "Barbell Bench Press",
                sets: 4,
                reps: 6,
                weight: 0
            },
            {
                name: "Squat",
                sets: 4,
                reps: 6,
                weight: 0
            },
        ]
    },
    {
        id:2,
        name:"Full Body #3",
        description: "Last full body workout, chest/glute emphasis",
        exercises: [
            {
                name: "Pull ups",
                sets: 4,
                reps: "6-8",
                weight: 0
            },
            {
                name: "Barbell Bench Press",
                sets: 4,
                reps: 6,
                weight: 0
            },
            {
                name: "Squat",
                sets: 4,
                reps: 6,
                weight: 0
            },
        ]
    }];
    const [workouts, setWorkouts] = useState(workouts_test);
    const gotoWorkout = (workout) => {
        console.log(`Workout ${workout.name} Clicked!`)
    }
    return (
        <div>
            <Profile workouts={workouts} onClick={gotoWorkout}/>
        </div>
    )
}

export default App;