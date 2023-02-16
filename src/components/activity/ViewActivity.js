import React from "react";
import { Link } from 'react-router-dom';

export const AllActivity = (props) =>{
const activities = props.activities;
    return (
    <div>
        <form>
        <>
        <h2>Activities</h2>
         {activities.map((activity) =>{
        return(
            <div key={activity.id}>
                <p>Name: {activity.name}</p>
                <p>Description: {activity.description}</p>
            </div>
              )
    }
 )}
        </>
<createActivity activities={activities}/>
       </form>
    </div>
    );
};
