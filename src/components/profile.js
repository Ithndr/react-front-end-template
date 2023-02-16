import React, { useState } from 'react';

export const Profile = (props) => {
    const user = props.user;
    const routines = props.routines;
    const myActivites = props.activities;
    console.log(myActivites);
    console.log(props);
    if (!user.username) {
        return <h1>Please log in before viewing profile</h1>
    }
    else {
        return (
            <form>
                <div>
                    <h1>{user.username}'s Profile</h1>
                    <div className='myRoutines'>
                        {
                            routines.map((routine) => {
                                if(routine.creatorId === user.id){
                                return <div key={routine.id}>
                                    <h3> Name: {routine.name} </h3>
                                    <p> Goal: {routine.goal} </p>
                                    <p> Activities: {routine.activities.length} </p>
                                </div>
                                }
                            })
                        }
                    </div>
                    <div className='myActivities'>
                    {
                            activities.map((activity) => {
                                if(routine.creatorId === user.id){
                                return <div key={routine.id}>
                                    <h3> Name: {routine.name} </h3>
                                    <p> Goal: {routine.goal} </p>
                                    <p> Activities: {routine.activities.length} </p>
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
