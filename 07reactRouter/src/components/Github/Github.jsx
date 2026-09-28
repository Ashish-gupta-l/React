import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const [data,setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Ashish-gupta-l')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         setData(data);
    //     })
    // },[])
    const data = useLoaderData();
    return (
        <div>Follower :{data.followers}
        <img src={data.avatar_url} alt="GitHub Picture" width={300} />
        </div>
    )
}

export default Github

//hook
export const githubInfo = async() => {
   const response = await fetch('https://api.github.com/users/Ashish-gupta-l')
   return response.json()
}