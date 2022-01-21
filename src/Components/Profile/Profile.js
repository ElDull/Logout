import React from "react";
import WorkoutList
 from "../WorkoutList/WorkoutList";
export const Profile = (props) => {
    return (
        <div className="menu">
            <WorkoutList workouts={props.workouts} onClick={props.onClick}/>
        </div>
    )
}

export default Profile;