import React, {useState,useEffect } from "react";
// import { Axios } from "axios";

export default function ShowResult(){
    const [data,setData] = useState([]);
    const [city, setCity] = useState('');

useEffect(()=>{
    let url = '/api/details';
    if (city) {
      url += `?city=${city}`;
    }
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>setData(data))
    .catch((error)=>console.log(error))
    console.log(data);
},[city])
    return(
        <div>
            <ul>
            {data.map((detail)=>(
                    <li>
                        <img src={`/uploads/${detail.imagename}`} alt= {detail.name} />
                        <h3> {detail.name} </h3>
                        <h2>{detail.city}</h2>
                        <p>{detail.description}</p>
                    </li> 
            ))}    
            </ul>
        </div>
    )
}