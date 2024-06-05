"use client"
import { useState } from "react";
import Image from 'next/image';
export default function Box(){
    const [user, setUser] = useState('');
    const [result, setResult] = useState(null);
    function setUserName(e){
        setUser(e.target.value);
    }
    const search = async  (e) => {
        e.preventDefault();
        const response = await fetch("https://api.github.com/users/"+user);   
        const data = await response.json();
        console.log(result);
        setResult(data);
    }
    return(
        <>
            <form id="form">
                <label htmlFor="#input">Enter the github username</label>
                <input type="text" name="input" id="input" onChange={setUserName}/>
                <input type="submit" value="Search" id="submit" onClick={search}/>
            </form>
            {result &&
                <div className="user">
                    <div className="photo">
                        <Image 
                            src={`${result.avatar_url}`}
                            alt="user" 
                            width="100"
                            height="100"
                        />     
                        <h2>{result.name}</h2>   
                        <p>{result.bio}</p>
                        <p>
                            <span>{result.followers}</span> followers
                           | <span>{result.following}</span> following</p>
                    </div>
                </div>
            }  
        </>
    );
}