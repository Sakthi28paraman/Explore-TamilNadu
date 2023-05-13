import React,{useState,useEffect} from "react";
import img1 from '../image/tuty.png'
// import { useNavigate } from "react-router-dom";



export default function Tuty(){
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
        width:"80vw",
        height : "100vh"
    }
    const kvpButton = {
        position: 'absolute', 
        top: '300px', 
        left: '800px', 
        transform: 'translate(-50%, -50%)',
        margin: '10px',
        padding: '10px 20px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
    const etmButton = {
        position: 'absolute', 
        top: '250px', 
        left: '1000px', 
        transform: 'translate(-50%, -50%)',
        margin: '10px',
        padding: '10px 20px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'

    }
    const tutyButton = {
        position: 'absolute', 
        top: '480px', 
        left: '1030px', 
        transform: 'translate(-50%, -50%)',
        margin: '10px',
        padding: '10px 20px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
    const trcButton = {
        position: 'absolute', 
        top: '550px ', 
        left: '1040px', 
        transform: 'translate(-50%, -50%)',
        margin: '10px',
        padding: '10px 20px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
    return(
        <div>
        <img src={img1}  alt="Tuty Map" style={mapStyle} />
        {/* <IconButton onClick={e=>navigate=('/map')}> <ArrowBackIcon /> </IconButton> */}
        <button id="Kovilpatti" style={kvpButton} onClick={handleSubmit} >Kovilpatti</button>
        <button id="Ettayapuram" style={etmButton} onClick={handleSubmit}>Ettayapuram</button>
        <button id="Tuticorin" style={tutyButton} onClick={handleSubmit}>Tuticorin</button>
        <button id="Trichendur" style={trcButton} onClick={handleSubmit} >Trichendur</button>
        {/* <button id="back"></button> */}
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
    </div>
    )   
}