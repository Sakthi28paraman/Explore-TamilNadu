import React,{useState,useEffect} from "react";
import img1 from '../image/tirunelveli.png'
// import { useNavigate } from "react-router-dom";
import '../mapcss/button.css'


export default function Nellai(){
    const [data,setData] = useState([{city : "",
        description:"",
        imagename:"",
        name:"",
        __v:"",
        _id:""
}]);
    // const navigate  = useNavigate()
    const [city, setCity] = useState('');
    useEffect(()=>{
    },[city])
    const handleSubmit = (e) =>{
        setCity(e.target.id)
        let url = '/api/details';
            if (city) {
              url += `?city=${city}`;
            }
            fetch(url)
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data)
                setData(data)
            })
            .catch((err)=>console.log(err)) 
        // navigate('/showdetails')
        
    }
    const mapStyle = {
        width:"60vw",
        height : "100vh",
        left:"600px"
    }
    const nelButton = {
        position: 'absolute', 
        top: '45%', 
        left: '68%', 
        transform: 'translate(-50%, -50%)',
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        // backgroundColor: '#4CAF50',
        color: '#ECF87F',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
    const curButton = {
        position: 'absolute', 
        top: '35%', 
        left: '34%', 
        transform: 'translate(-50%, -50%)',
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        // backgroundColor: '#4CAF50',
        color: '#ECF87F',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'

    }
    const papaButton = {
        position: 'absolute', 
        top: '55%', 
        left: '45%', 
        transform: 'translate(-50%, -50%)',
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        // backgroundColor: '#4CAF50',
        color: '#ECF87F',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
    const palButton = {
        position: 'absolute', 
        top: '57%', 
        left: '70%', 
        transform: 'translate(-50%, -50%)',
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        // backgroundColor: '#4CAF50',
        color: '#ECF87F',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
    const kalbutton={
        position: 'absolute', 
        top: '57%', 
        left: '70%', 
        transform: 'translate(-50%, -50%)',
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        // backgroundColor: '#4CAF50',
        color: '#ECF87F',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
    return(
        <div className="main">
        <img src={img1}  alt="Nellai Map" style={mapStyle} />
        <button id="Tirunelveli" style={nelButton} onClick={handleSubmit} >Tirunelveli</button>
        <button id="Courtallam" style={curButton} onClick={handleSubmit}>Courtallam</button>
        <button id="Papanasam" style={papaButton} onClick={handleSubmit}>Papanasam</button>
        <button id="Trichendur" style={palButton} onClick={handleSubmit} >palayamkottai</button>
        <button id="Kalugumalai" style={kalbutton} onClick={handleSubmit} >Kalugumalai</button>
        {/* <button id="back"></button> */}
        <div style={{backgroundColor:"#2EFF2E"}}>
            <ul>
            {data.map((detail)=>(
                    <li style={{textAlign:"center",color:"#ECF87F"}}>
                        <img src={`/uploads/${detail.imagename}`} alt= {detail.name}/>
                        <h3> {detail.name} </h3>
                        <h2>{detail.city}</h2>
                        <p>{detail.description}</p>
                    </li> 
            ))}    
            </ul>
        </div>
    </div>
    )   
}