import React, { useState } from "react";

export const createActivity = ({token})=> {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (ev) => {
        try {
            ev.preventdefault();
            window.localStorage.setItem("token", token);
            const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
                method: "POST",
                body: JSON.stringify({
                  name: name,
                  description: description
                })
              })
              const data = await response.json();
              console.log(data);
              setName({data});
              
        } catch (error) {
            console.error(error);
        }
    }
 return (
    <div className="newActivity">
       <h3>Create an Activity</h3>
        <form onSubmit={handleSubmit} className="information">
        <input
         placeholder="name"
         value={name}
         onChange={(ev) => setName(ev.target.value)}
        ></input>
        <input
        placeholder="description"
        value={description}
        onChange={(ev) => setDescription(ev.target.value)}
        ></input>
        <button>Create Activity</button>
        </form>
        </div>
 )
}
