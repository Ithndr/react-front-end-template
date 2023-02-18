import React, { useState } from "react";
import { createActivity } from "./createActivity";
import { createNewActivity } from "../../api/fetch";

export const AllActivity = (props) =>{
const activities = props.activities;
const user = props.user;
const token = props.token;
const [name, setName] = useState('');
const [description, setDescription] = useState('');

    return (
    <div>
        <h2>Activities</h2>
        {/* <createActivity activities={activities}/> */}
        { user.username ? 
            <div> 
            <form>
                <input
                    placeholder = 'Name'
                    value = {name}
                    onChange = {(ev) => setName(ev.target.value)}
                />
                <input
                    placeholder = 'Description'
                    value = {description}
                    onChange = {(ev) => setDescription(ev.target.value)}
                />
            </form>
            <button onClick = {() => createNewActivity({token, name, description})}> Create New Activity </button>    
        </div> 
            : null}
         {activities.map((activity) =>{
        return(
            <div style={{border: '1px solid black'}} key={activity.id}>
                <p>Name: {activity.name}</p>
                <p>Description: {activity.description}</p>
            </div>
              )
    }
 )}
    </div>
    );
};
