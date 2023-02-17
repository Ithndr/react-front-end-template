import React, {useState} from 'react';
import { createNewRoutine } from '../../api/fetch';

const AllRoutines = (props) => {
    const routines = props.routines;
    const user= props.user;
    const token = props.token;
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPiblic] = useState('');
    return (
       <div> 
        <h2> Routines</h2>
        { user.username ? 
            <div> 
            <form onSubmit = {() => createNewRoutine({token, name, goal, isPublic})}>
                <input
                    placeholder = 'Name'
                    value = {name}
                    onChange = {(ev) => setName(ev.target.value)}
                />
                <input
                    placeholder = 'Goal'
                    value = {goal}
                    onChange = {(ev) => setGoal(ev.target.value)}
                />
                <input 
                    type= 'checkbox'
                    value = {isPublic}
                    onChange = {(ev) => setIsPiblic(ev.target.checked)}
                />
            </form>
            <button onClick = {() => createNewRoutine({token, name, goal})}> Create New Routine </button>    
        </div> 
            : null}
    
        {
            routines.map((routine) => {
             return  <div key={routine.id}>
                    <h3> Name: {routine.name} </h3> 
                    <p> Creator : {routine.creatorName} </p>
                    <p> Goal: {routine.goal} </p>
                    <p> Activities: {routine.activities.length} </p>
                </div>
               
            })
        }
       </div>
    )
}

export default AllRoutines;