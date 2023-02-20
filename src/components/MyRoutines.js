import React, { useState, useEffect } from 'react';
import { attachActivityToRoutine } from "../api/fetch";

const MyRoutines = (props) => {
    const token = props.token;
    const activities = props.activities;
    const user = props.user;
    const routineId = props.routineId;
    const [myRoutines, setMyRoutines] = useState([]);
    const [count, setCount] = useState("");
    const [duration, setDuration] = useState("");
    const [activity, setActivity] = useState(null);

    return (
        <div>
            <form onSubmit={(ev) => {
                ev.preventDefault();
                attachActivityToRoutine({ token, activityId: activity, count, duration, routineId}

                )
            }}>
                <input name="count"
                    placeholder='count'
                    value={count}
                    onChange={(ev) => setCount(ev.target.value)}
                />
                <input name="duration"
                    placeholder='duration'
                    value={duration}
                    onChange={(ev) => setDuration(ev.target.value)}
                />
                <select onChange={ev => { setActivity(ev.target.value) }}>
                    {activities.map((activity) => (
                        <option key={activity.id} value={activity.id} >{activity.name}</option>
                    ))}
                </select>
                <button>Add Activity</button>
            </form>
        </div>
    )

}
export default MyRoutines;

