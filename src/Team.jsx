import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)
    const teamStyle = {
        border : "2px solid purple",
        margin: "15px",
        padding: "10px",
        borderRadius: "15px"

    }
    const handleAdd = () => {
        const newAddPlayer = team + 1; 
        setTeam(newAddPlayer)
    }
    const handleRemove = () => {
        const newAddPlayer = team - 1; 
        setTeam(newAddPlayer)
    }
    return(

        <div style={teamStyle}>
            <h3>Players:{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}