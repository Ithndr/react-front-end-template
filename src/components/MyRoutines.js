import React, { useState, useEffect } from 'react';
import { attachActivityToRoutine } from "../api/fetch";

const MyRoutines = ({ user, activities }) => {
    const [myRoutines, setMyRoutines] = useState([]);
    const [count, setCount] = useState("");
    const [duration, setDuration] = useState("");
    const [activity, setActivity] = useState(null);

    const handleSubmit = ({ routineId }) => {
        const activity = attachActivityToRoutine({
            routineId,
            count,
            duration,
            activity,
        });
    };
    const getMyRoutines = async () => {
        const token = window.localStorage.getItem('token');
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${user.username}/routines`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }
        );
        const result = await response.json();
        return result;
    };

    const getRoutinesByUser = async () => {
        const myRoutine = await getMyRoutines();
        console.log(myRoutine.length)
        setMyRoutines(myRoutine)
    }
    useEffect(() => {
        getRoutinesByUser();
    }, [])
    console.log(myRoutines)
    return (
        <div>
            {myRoutines.map((routine) => {
                return (
                    <div key={routine.id}>
                        <p>Name: {routine.name}</p>
                        <p>Id: {routine.id}</p>
                        <form onSubmit={(ev) => {
                            ev.preventDefault();
                            handleSubmit({ routineId: routine.id })
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
                            <select>
                                {activities.map((activity) => (
                                    <option value={activity.id}>{activity.name}</option>
                                ))}
                            </select>
                            <button>Add Activity</button>
                        </form>
                    </div>
                )
            })}
        </div>
    )

}
export default MyRoutines;

