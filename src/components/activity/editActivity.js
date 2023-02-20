import React, {useState}from 'react';
import { editActivities} from '../../api/fetch';

const UpdateActivities = () => {
    const token = window.localStorage.getItem('token'); 
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
   
    return (
        <div>
               
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
                
            <button onClick={ev => {editActivities({token, name, description, activityId})}}> Submit </button>
            {edit && routineId === routine.id ? <UpdateRoutine token={token} routineId={routineId} /> : null}
        </div>
        
    )
    
}

export default UpdateActivities