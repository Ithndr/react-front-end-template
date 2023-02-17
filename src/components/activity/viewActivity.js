import React from "react";

export const AllActivity = (props) =>{
const activities = props.activities;
    return (
    <div>
        <form>
        <>
        <h2>Activities</h2>
         {activities.map((activity) =>{
        return(
            <div style={{border: '1px solid black'}} key={activity.id}>
                <p>Name: {activity.name}</p>
                <p>Description: {activity.description}</p>
            </div>
              )
    }
 )}
        </>
{/* <createActivity activities={activities}/> */}
       </form>
    </div>
    );
};
