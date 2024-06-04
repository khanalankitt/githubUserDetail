"use client"
import { useState } from "react";
export default function Box(){
    const [user,setUser] = useState('');
    function setUserName(e){
        setUser(e.target.value);
    }
    const search = async  (e) => {
        e.preventDefault();
        const response = await fetch("https://api.github.com/users/"+user);   
        const result = await response.json();
        console.log(result);
    }
    return(
        <>
            <form>
                <label htmlFor="#input">Enter the github username</label>
                <input type="text" name="input" id="input" onChange={setUserName}/>
                <input type="submit" value="Search" onClick={search}/>
            </form>
        </>
    );
}