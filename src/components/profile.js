import React, { useState } from 'react';

export const Profile = (props) => {
    const user = props.user;
    const routines = props.routines;
    const activities = props.activities;
    if (!user.username) {
        return <h1>Please log in before viewing profile</h1>
    }
    else {
        return (
            <form>
                <div>
                    <h1>{user.username}'s Profile</h1>
                    <div className='myRoutines'>
                        <h2>My Routines</h2>
                        {
                            routines.map((routine) => {
                                if(routine.creatorId === user.id){
                                return <div key={routine.id}>
                                    <h3> Name: {routine.name} </h3>
                                    <p> Goal: {routine.goal} </p>
                                    <p> Activities: {routine.activities.length} </p>
                                    {user.id === routine.creatorId ? <button className='deleteButton' onClick={console.log('Delete will happen here')}>Delete</button>: null}
                                </div>
                                }
                            })
                        }
                    </div>
                </div>
            </form>
        )
    }
};
