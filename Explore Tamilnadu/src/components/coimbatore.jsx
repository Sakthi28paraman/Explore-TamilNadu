import React,{useState,useEffect} from "react";
import img1 from '../image/Coimbatore.png'
import '../mapcss/button.css'
// import { useNavigate } from "react-router-dom";



export default function Coimbatore(){
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
        height : "90vh"
    }
    const ishaButton = {
        position: 'absolute', 
        top: '150px', 
        left: '650px', 
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
    const vlpButton = {
        position: 'absolute', 
        top: '500px', 
        left: '60%', 
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
    const kvkButton = {
        position: 'absolute', 
        top: '250px', 
        left: '560px', 
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
    const CoimbatoreButton = {
        position: 'absolute', 
        top: '150px', 
        left: '850px', 
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
        <img src={img1}  alt="Coimbatore Map" style={mapStyle} />
        {/* <IconButton onClick={e=>navigate=('/map')}> <ArrowBackIcon /> </IconButton> */}
        <button id="Isha" style={ishaButton} onClick={handleSubmit} >Isha</button>
        <button id="Valparai" style={vlpButton} onClick={handleSubmit}>Valparai</button>
        <button id="Kovai Kutralam" style={kvkButton} onClick={handleSubmit}>KovaiKutralam</button>
        <button id="Coimbatore" style={CoimbatoreButton} onClick={handleSubmit}>Coimbatore</button>
        {/* <button id="Trichendur" style={trcButton} onClick={handleSubmit} >Trichendur</button> */}
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