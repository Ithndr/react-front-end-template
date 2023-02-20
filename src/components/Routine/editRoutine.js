import React, {useState}from 'react';
import { editRoutine} from '../../api/fetch';

const UpdateRoutine = (props) => {
    const token = window.localStorage.getItem('token');
    const routineId = props.routineId;
    console.log(props)
    console.log(token)
    console.log(routineId)
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false)
    return (
        <div className='editRoutine-form'>
               
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
                <div>
                <input
                    type= 'checkbox'
                    value = {isPublic}
                    onChange = {(ev) => setIsPublic(ev.target.checked)}
                />
                <label>Will this routine be public?</label>
                </div>
            
            <button onClick={ev => {editRoutine({token, name, goal, isPublic, routineId})}}> Submit </button>
        </div>
        
    )
    
}

export default UpdateRoutine