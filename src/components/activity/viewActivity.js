import React, { useState } from "react";
import { createNewActivity,editActivities } from "../../api/fetch";
import UpdateActivities from "./editActivity";

export const AllActivity = (props) =>{
const activities = props.activities;
const user = props.user;
const token = props.token;
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [edit, setEdit] = useState(false)
const [activityId, setActivityId] = useState('')

const handleEdit = (ev, id) => {
    ev.preventDefault()
    console.log(id)
    setActivityId(id)
    setEdit(!edit)
}
    return (
    <div className="allActivities">
        <h2>Activities</h2>
        { user.username ? 
            <div className="allActivities-form"> 
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
           // console.log('this is activity',activity)
        return(
            <div className="singleActivity" key={activity.id}>
                <p>Name: {activity.name}</p>
                <p>Description: {activity.description}</p>
                    <div> 
                        <button onClick = {() => editActivities({ name, description, activityId})}> Edit </button>  
                    </div>
            </div>
           
              )
              
    }
 )}
    </div>
    );
};
