import React, { useState } from "react";
import { createNewActivity, editActivities } from "../../api/fetch";
import UpdateActivities from "./editActivity";

export const AllActivity = (props) => {
    const activities = props.activities;
    const user = props.user;
    const token = window.localStorage.getItem('token');
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
            {activities.map((activity) => {
                // console.log('this is activity',activity)
                return (
                    <div className="singleActivity" key={activity.id}>
                        <p> Name:  {activity.name}</p>
                        <p> Description:  {activity.description}</p>
                        {user.username ?
                            <div className="allActivities-form">
                                <form>
                                    {<button className='editButton' onClick={ev => { handleEdit(ev, activity.id) }}>Edit</button>}
                                    {edit && activityId === activity.id ? <UpdateActivities token={token} activityId={activityId} /> : null}
                                </form>
                            </div>
                            : null}
                    </div>


                )

            }
            )}
        </div>
    );
};
