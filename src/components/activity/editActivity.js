import React, {useState}from 'react';
import { editActivities} from '../../api/fetch';

const UpdateActivities = (props) => {
    const activityId = props.activityId;
    const token = window.localStorage.getItem('token'); 
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [edit, setEdit] = useState(false);

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
        </div>
        
    )
    
}

export default UpdateActivities